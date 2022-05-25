const express = require("express");
const routes = express.Router();

const Article = require('../db/Article');
const Category = require('../db/Category');


//main page
routes.get('/', (req,res) => {
    res.render("index", {token: req.session.token}); 
});

//Blog page
routes.get('/blog', (req,res) => {
    Article.findAll({
        include: [{model: Category}] //include Category table
    }).then(articles => {
        res.render("blog", {articles: articles, token: req.session.token});
    })
});

module.exports = routes;