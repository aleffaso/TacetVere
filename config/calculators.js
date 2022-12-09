const express = require('express');
const app = express.Router();

// const CarbonManagement = require('../db/CarbonManagement');

app.get('/greener', (req, res) => {
    res.render('pages/calculator/carbonManagement/index'); 
})

// app.post('/greener-carbon-managament', (req, res) => {
//     console.log(req.body)
// })

module.exports = app;