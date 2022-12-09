const express = require('express');
const app = express.Router();

// const CarbonManagement = require('../db/CarbonManagement');

app.get('/2b2062936e9bb5a6b1d17869cc48c3934142b563', (req, res) => {
    res.render('pages/calculator/carbonManagement/index'); 
})

// app.get('/greener', (req, res) => {
//     res.render('pages/calculator/carbonManagement/index'); 
// })

// app.post('/greener-carbon-managament', (req, res) => {
//     console.log(req.body)
// })

module.exports = app;