const express = require('express');
const app = express.Router();
const authorize = require("../middlewares/googleSheets"); 
const {google} = require('googleapis');

// const CarbonManagement = require('../db/CarbonManagement');

const route = '/2b2062936e9bb5a6b1d17869cc48c3934142b563'

app.get(route, (req, res) => {
    res.render('pages/calculator/carbonManagement/index', {message: false}); 
})

// app.get('/greener', (req, res) => {
//     res.render('pages/calculator/carbonManagement/index'); 
// })

app.post('/greener-carbon-management', (req, res) => {
    
    async function writeData(auth){
        const sheets = google.sheets({ version: 'v4', auth });
        const today = new Date().toLocaleString();
        const array = Object.values(req.body)
        array.unshift(today)
        const values = [array]
        const resource = {
            values,
          };

        sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'RAW',
            resource: resource,
          },
          (err, result) => {
            if (err) {
              res.render('pages/calculator/carbonManagement/index', {message: err}); 
            }
            res.render('pages/calculator/carbonManagement/index', {message: result.status}); 
          }
        );
    }
      
    authorize().then(writeData).catch(console.error);
})

module.exports = app;