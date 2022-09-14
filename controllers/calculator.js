const express = require('express');
const routes = express.Router();
const slugify = require('slugify');

const Parameters = require('../db/Parameters');
const adminAuth = require('../middlewares/adminAuth'); 

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

    var { category, fuel, unity_system, co2_fossil, ch4,  N20, biogenic_co2, ch4_energy, ch4_manufactured_built, ch4_comercial_institutional, ch4_rafp, n2o_energy, n2o_manufactured_built, n2o_comercial_institutional, n2o_rafp,  hfc_32, hfc_125, cfc_12,  reference} = req.body;

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
    
    var { id, category, fuel, unity_system, co2_fossil, ch4,  N20, biogenic_co2, ch4_energy, ch4_manufactured_built, ch4_comercial_institutional, ch4_rafp, n2o_energy, n2o_manufactured_built, n2o_comercial_institutional, n2o_rafp,  hfc_32, hfc_125, cfc_12,  reference} = req.body;

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

module.exports = routes;