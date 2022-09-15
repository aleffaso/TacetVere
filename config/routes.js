const express = require('express');
const routes = express.Router();

const Parameters = require('../db/Parameters');
const Article = require('../db/Article');
const Category = require('../db/Category');
const User = require('../db/User');


//main page
routes.get('/', (req,res) => {
    Parameters.findAll().then(parameters => {
        res.render('index', {token: req.session.token, data: req.body, parameters: parameters, calculator:false}); 
    });
});

//Blog page
routes.get('/blog', (req,res) => {
    const path = req.route.path

    Article.findAll({
        order:[['id', 'DESC']]
    }).then(articles => {
        Category.findAll().then(categories => {
            User.findAll().then(users => {
                res.render('pages/blog', {
                    articles: articles, 
                    token: req.session.token, 
                    categories: categories,
                    users: users,
                    path: path
                });
            })
        }).catch(err => {
            res.redirect('/');
        });
    }).catch(err => {
        res.redirect('/');
    });
});

//Search form
routes.get('/busca', async (req, res) => {
    const path = req.route.path
    const keyword = req.query.search.toUpperCase()

    Category.findAll().then(categories => {
        const id = categories.map((category) => {
            searchKey = category.slug.toUpperCase().split('-')
            var comparison = []
            var id = []

            for (let i=0; i < searchKey.length; i++){
                comparison.push(keyword)

                if(comparison[i] == searchKey[i]){
                    id.push(category.id);
                }
            }
            
            return id
        })

        Category.findAll({
            where:{id:id},
            order:[['id', 'DESC']]
        }).then(category => {
            const articleId = category.map(categories => {
                return categories.id
            })
            Article.findAll({
                where: {categoryId: articleId},
                order:[['id', 'DESC']],
            }).then(articles => {
                User.findAll().then(users => {
                    res.render('pages/blog', {
                        users: users,
                        articleId: articleId, 
                        keyword: keyword.toLowerCase(),
                        articles: articles,
                        categories: category, 
                        token: req.session.token, 
                        path: path
                    })
                });
            })
        }).catch(err => {
            res.redirect('/');
        });

    }).catch(err => {
        res.redirect('/');
    });
})

//Not found page
routes.get('*', (req, res) =>{
    res.render('pages/error', {token: req.session.token})
});

module.exports = routes;