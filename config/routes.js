const express = require("express");
const routes = express.Router();
const adminAuth = require("../middlewares/adminAuth"); 

//main page
routes.get('/', (req,res) => {
    res.render("index");
});

//logged main page
routes.get('/logged', adminAuth,(req,res) => {
    res.render("admin/index");
});

module.exports = routes;