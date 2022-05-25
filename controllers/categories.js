const express = require('express');
const routes = express.Router();
const slugify = require("slugify");

const Category = require('../db/Category');
const adminAuth = require("../middlewares/adminAuth"); 


//Show all categories

routes.get("/admin/categories", adminAuth, (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories:categories, token: req.session.token});
    })
});

//New category

routes.get("/admin/category/new", adminAuth, (req, res) => {
    res.render("admin/categories/new", {token: req.session.token});
});

routes.post("/categories/new", adminAuth, (req,res) => {

    var {title} = req.body;

    Category.findOne({where:{title: title}}).then(category => {

        if(category == undefined){
            Category.create({
                title: title,
                slug: slugify(title)
            }).then(() => {
                res.redirect("/admin/categories");
            }).catch((err) => {
                res.redirect("/admin/categories");
            });
        }else{
            res.send("Esta catregoria já existe");
        }
    })
});

//Update category

routes.get("/admin/categories/edit/:id", adminAuth, (req,res) => {

    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/categories");
    };

    Category.findByPk(id).then(category => { //Search category by its ID
        if(category != undefined){
            res.render("admin/categories/edit", {category: category, token: req.session.token});
        }else{
            res.redirect("/admin/categories");
        }
    }).catch(err => {
        res.redirect("/admin/categories");
    });
});

routes.post("/categories/update", adminAuth, (req,res) => {

    var {id, title} = req.body;

    Category.update({title: title, slug:slugify(title)},{
        where: {
            id:id
        }
    }).then(() => {
        res.redirect("/admin/categories");
    }).catch(err => {
        res.redirect("/admin/categories");
    });
});

//Delete category

routes.post("/categories/delete", adminAuth, (req, res) => {

    var id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){ //is it a number or not?
            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            });
        }else{
            res.redirect("/admin/categories");
        }
    }else{
        res.redirect("/admin/categoriess");
    }
});

module.exports = routes;