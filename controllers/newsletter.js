const express = require('express');
const routes = express.Router();

const Newsletter = require('../db/Newsletter');
const adminAuth = require("../middlewares/adminAuth"); 

//New e-mail to base
routes.post("/newsletter", (req,res) => {

    var {email} = req.body;

    Newsletter.findOne({where:{email: email}}).then(newsletter => {

        if(newsletter == undefined){
            Newsletter.create({email: email}).then(() => {
                res.redirect("/blog");
            }).catch((err) => {
                res.redirect("/blog");
            });
        }else{
            res.redirect("/blog");
        }
    }).catch(err => {
        res.redirect("/blog");
    })
});

//Show all emails
routes.get("/admin/newsletter", adminAuth, (req, res) => {
    Newsletter.findAll().then(emails => {
        res.render("admin/newsletter/index", {emails:emails, token: req.session.token});
    }).catch(err => {
        res.redirect("/");
    })
});

//Delete email
routes.post("/newsletter/delete", adminAuth, (req, res) => {

    var id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){ //is it a number or not?
            Newsletter.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/newsletter");
            });
        }else{
            res.redirect("/admin/newsletter");
        }
    }else{
        res.redirect("/admin/newsletter");
    }
});

module.exports = routes;