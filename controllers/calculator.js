const express = require('express');
const routes = express.Router();

const adminAuth = require('../middlewares/adminAuth'); 

//New category
routes.get("/admin/calculator", adminAuth, (req, res) => {
    res.render("admin/calculator", {token: req.session.token});
})

// routes.post("/admin/scope1", (req, res) => {

// })

// routes.post("/admin/scope2", (req, res) => {

// })

// routes.post("/admin/scope3", (req, res) => {

// })

module.exports = routes;