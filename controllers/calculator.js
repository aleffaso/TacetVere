const express = require('express');
const routes = express.Router();
const slugify = require('slugify');

const Parameters = require('../db/Parameters');
const Calculator = require('../db/Calculator');
const adminAuth = require('../middlewares/adminAuth'); 
const { route } = require('express/lib/router');

//New category
routes.get("/admin/calculator", adminAuth, (req, res) => {
    res.render("admin/calculator/index", {token: req.session.token});
});

routes.get("/admin/parameters", adminAuth, (req, res) => {
    Parameters.findAll().then(parameters => {
        res.render("admin/calculator/parameters", {token: req.session.token, parameters: parameters});
    });
});

routes.get("/admin/parameters/new", adminAuth, (req, res) => {
    res.render("admin/calculator/new_parameter", {token: req.session.token});
});

routes.post("/parameter/new", adminAuth, (req,res) => {

    var { category, fuel, unity_system, co2_fossil, ch4, 
        N20, biogenic_co2, ch4_energy, ch4_manufactured_built,
        ch4_comercial_institutional, ch4_rafp, n2o_energy,
        n2o_manufactured_built, n2o_comercial_institutional,
        n2o_rafp,  hfc_32, hfc_125, cfc_12,  reference } = req.body;

    Parameters.create({
        category:category,
        slug_category: slugify(category),
        fuel: fuel,
        slug_fuel: slugify(fuel),
        unity_system: unity_system,
        co2_fossil: co2_fossil,
        ch4: ch4,
        N20: N20,
        biogenic_co2: biogenic_co2,
        ch4_energy: ch4_energy,
        ch4_manufactured_built: ch4_manufactured_built,
        ch4_comercial_institutional: ch4_comercial_institutional ,
        ch4_rafp: ch4_rafp, 
        n2o_energy: n2o_energy,
        n2o_manufactured_built: n2o_manufactured_built,
        n2o_comercial_institutional: n2o_comercial_institutional,
        n2o_rafp: n2o_rafp,
        hfc_32: hfc_32,
        hfc_125: hfc_125,
        cfc_12: cfc_12,
        reference: reference,
        slug_reference: slugify(reference)
    }).then(() => {
        res.redirect("/admin/parameters");
    }).catch((err) => {
        res.redirect("/admin/parameters");
    });
})

routes.get("/admin/parameters/edit/:id", adminAuth, (req,res) => {

    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/parameters");
    };

    Parameters.findByPk(id).then(parameter => { //Search user by its ID
        if(parameter != undefined){
            res.render("admin/calculator/edit_parameter", {parameter: parameter, token: req.session.token});
        }else{
            res.redirect("/admin/parameters");
        }
    }).catch(err => {
        res.redirect("/admin/parameters");
    });
});

routes.post('/parameter/update', adminAuth, (req,res) => {
    
    var { id, category, fuel, unity_system, co2_fossil, ch4, 
        N20, biogenic_co2, ch4_energy, ch4_manufactured_built,
        ch4_comercial_institutional, ch4_rafp, n2o_energy,
        n2o_manufactured_built, n2o_comercial_institutional,
        n2o_rafp,  hfc_32, hfc_125, cfc_12,  reference} = req.body;

    Parameters.update({
        category:category,
        slug_category: slugify(category),
        fuel: fuel,
        slug_fuel: slugify(fuel),
        unity_system: unity_system,
        co2_fossil: co2_fossil,
        ch4: ch4,
        N20: N20,
        biogenic_co2: biogenic_co2,
        ch4_energy: ch4_energy,
        ch4_manufactured_built: ch4_manufactured_built,
        ch4_comercial_institutional: ch4_comercial_institutional ,
        ch4_rafp: ch4_rafp, 
        n2o_energy: n2o_energy,
        n2o_manufactured_built: n2o_manufactured_built,
        n2o_comercial_institutional: n2o_comercial_institutional,
        n2o_rafp: n2o_rafp,
        hfc_32: hfc_32,
        hfc_125: hfc_125,
        cfc_12: cfc_12,
        reference: reference,
        slug_reference: slugify(reference)
    },
    { 
        where: {
            id:id
        }
    }).then(() => {
        res.redirect('/admin/parameters');
    }).catch(err => {
        res.redirect('/admin/parameters');
    });
});

routes.post("/calculator", (req, res) => {
    var { social_name, company_name, cnpj, address, people_organization_amount, 
        people_out_of_organization_amount, company_sector, company_task_nature, 
        year, electricity_consume, electricity_transmission, electricity_quantity, 
        electricity_unity, e1_1, e1_2, e1_3, e1_4, e1_5, e1_6, e1_7, e1_8, e2_1, 
        e2_2, e2_3, e2_4, e2_5, e3_1, e3_2, e3_3, e3_4, e3_5 } = req.body

    Calculator.create({
        social_name: social_name, company_name: company_name, cnpj: cnpj, 
        address: address, people_organization_amount: people_organization_amount, 
        people_out_of_organization_amount: people_out_of_organization_amount, 
        company_sector: company_sector, company_task_nature: company_task_nature, 
        year: year, electricity_consume: electricity_consume, 
        electricity_transmission: electricity_transmission,
        electricity_quantity: electricity_quantity, electricity_unity:electricity_unity, 
        e1_1: e1_1, e1_2: e1_2, e1_3: e1_3, e1_4: e1_4, e1_5: e1_5, e1_6: e1_6, e1_7: e1_7,
        e1_8: e1_8, e2_1, e2_2: e2_2, e2_3: e2_3, e2_4: e2_4, e2_5: e2_5, e3_1: e3_1, 
        e3_2: e3_2, e3_3: e3_3, e3_4: e3_4, e3_5: e3_5
    }).then(() => {
        Parameters.findAll().then(parameters => {
            res.render('index', {token: req.session.token, data: req.body, parameters: parameters}); 
        });
    }).catch((err) => {
        res.redirect("/");
    });
});

routes.get("/admin/results", adminAuth, (req, res) => {
    Parameters.findAll().then(parameters => {
        Calculator.findAll().then(results => {
            res.render("admin/calculator/results", {token: req.session.token, results: results, parameters: parameters, calculator:true}); 
        })
    });
})

module.exports = routes;