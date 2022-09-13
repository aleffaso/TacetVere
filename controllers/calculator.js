const express = require('express');
const routes = express.Router();

const adminAuth = require('../middlewares/adminAuth'); 

//New category
routes.get("/admin/calculator", adminAuth, (req, res) => {
    res.render("admin/calculator", {token: req.session.token});
})

module.exports = routes;