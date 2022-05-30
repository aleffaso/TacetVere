const express = require('express');
const routes = express.Router();
const slugify = require("slugify");

const Category = require('../db/Category');
const Article = require('../db/Article');
const adminAuth = require("../middlewares/adminAuth"); 

//Article page
routes.get('/article/:id', (req,res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/");
    };

    Article.findByPk(id).then(article => { //Search article by its ID

        var dateObj = article.createdAt;
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var hour = dateObj.getUTCHours() - 3; //Brasilia time UTC -3
        var minute = dateObj.getUTCMinutes();
        var email = article.dataValues;

        if(article != undefined){
            Category.findAll().then(categories => {
                if(categories != undefined){
                   res.render("article", {
                        article: article,
                        author: email.author,
                        category: categories,
                        day: day,
                        month: month,
                        year: year,
                        hour: hour, 
                        minute: minute,
                        token: req.session.token
                    });
                }else{
                    res.redirect("/");
                }
            })
        }else{
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    });
});

//Show all articles
routes.get("/admin/articles", adminAuth, (req,res) => { 
    Article.findAll({
        include: [{model: Category}] //include Category table
    }).then(articles => {
        res.render("admin/articles/index", {articles: articles, token: req.session.token});
    })
});

//New article
routes.get("/admin/article/new", adminAuth, (req,res) => { 
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories, token: req.session.token});
    });
});

routes.post("/articles/new", adminAuth, (req,res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;
    var author = req.loggedUser.email;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        author: author,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    });
});

//Update article
routes.get("/admin/articles/edit/:id", adminAuth, (req,res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/articles");
    };

    Article.findByPk(id).then(article => { //Search article by its ID
        if(article != undefined){

            Category.findAll().then(categories => {
                res.render("admin/articles/edit", {article: article, categories: categories, token: req.session.token});
            });

        }else{
            res.redirect("/admin/articles");
        }
    }).catch(err => {
        res.redirect("/admin/articles");
    });
});

routes.post("/articles/update", adminAuth, (req,res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category

    Article.update({title: title, slug:slugify(title), body: body, categoryId:category},{ //Update title, slug and body by specified id
        where: {
            id:id
        }
    }).then(() => {
        res.redirect("/admin/articles");
    }).catch(err => {
        res.redirect("/admin/articles");
    });
});

//Delete article
routes.post("/articles/delete", adminAuth,  (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){ //is it a number or not?
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            });
        }else{
            res.redirect("/admin/articles");
        }
    }else{
        res.redirect("/admin/articles");
    }
});

module.exports = routes;