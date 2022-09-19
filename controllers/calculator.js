const express = require('express');
const routes = express.Router();
const slugify = require('slugify');

const Parameters = require('../db/Parameters');
const Calculator = require('../db/Calculator');
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

        var replace = ['', '', '0']

        if(e1_1 == undefined){
            e1_1 = replace
        }
        
        if(e1_2 == null){
            e1_2 = replace
        }
        
        if(e1_3 == undefined){
            e1_3 = replace
        }
        
        if(e1_4 == undefined){
            e1_4 = replace
        }
        
        if(e1_5 == undefined){
            e1_5 = replace
        }
        
        if(e1_6 == undefined){
            e1_6 = replace
        }
        
        if(e1_7 == undefined){
            e1_7 = replace
        }
        
        if(e1_8 == undefined){
            e1_8 = replace
        }

        
        if(e2_1 == undefined){
            e2_1 = replace
        } 
        
        if(e2_2 == undefined){
            e2_2 = replace
        } 
        
        if(e2_3 == undefined){
            e2_3 = replace
        } 
        
        if(e2_4 == undefined){
            e2_4 = replace
        } 
        
        if(e2_5 == undefined){
            e2_5 = replace
        } 


        if(e3_1 == undefined){
            e2_1 = replace
        } 
        
        if(e3_2 == undefined){
            e3_2 = replace
        } 
        
        if(e3_3 == undefined){
            e3_3 = replace
        } 
        
        if(e3_4 == undefined){
            e3_4 = replace
        } 
        
        if(e3_5 == undefined){
            e3_5 = replace
        } 


        Parameters.findAll().then(parameters => {
            
            var sum_co2 = 0;
            var sum_ch4 = 0;
            var sum_n2o = 0;
            var qtd = 77;

            const arrayPar = parameters.map( (parameter, index) => {

                var { co2_fossil, ch4, N20, biogenic_co2, ch4_energy, ch4_manufactured_built,
                    ch4_comercial_institutional,ch4_rafp, n2o_energy, n2o_manufactured_built, 
                    n2o_comercial_institutional, n2o_rafp, hfc_32, hfc_125, cfc_12 } = parameter

                const fuel_calc = 1
                const quant_calc = 2
                var array = []
                var array_co2 = []
                var array_ch4 = []
                var array_n2o = []
                var array_biogenic_co2 = []

                //First escope

                if (parameter.slug_fuel == e1_1[fuel_calc] || 
                   parameter.slug_fuel == e1_2[fuel_calc] || 
                   parameter.slug_fuel == e1_3[fuel_calc] ||
                   parameter.slug_fuel == e1_4[fuel_calc] ||
                   parameter.slug_fuel == e1_5[fuel_calc] || 
                   parameter.slug_fuel == e1_6[fuel_calc] || 
                   parameter.slug_fuel == e1_7[fuel_calc] ||
                   parameter.slug_fuel == e1_8[fuel_calc]){

                    var co2_fossil_result_e1 = co2_fossil * e1_1[quant_calc]
                    var ch4_result_e1 = ch4 * e1_1[quant_calc]
                    var n2o_result_e1 = N20 * e1_1[quant_calc]
                    var biogenic_co2_result_e1 = biogenic_co2 * e1_1[quant_calc]

                    var co2_fossil_result_e2 = co2_fossil * e1_2[quant_calc]
                    var ch4_result_e2 = ch4 * e1_2[quant_calc]
                    var n2o_result_e2 = N20 * e1_2[quant_calc]
                    var biogenic_co2_result_e2 = biogenic_co2 * e1_2[quant_calc]

                    var co2_fossil_result_e3 = co2_fossil * e1_3[quant_calc]
                    var ch4_result_e3 = ch4 * e1_3[quant_calc]
                    var n2o_result_e3 = N20 * e1_3[quant_calc]
                    var biogenic_co2_result_e3 = biogenic_co2 * e1_3[quant_calc]

                    var co2_fossil_result_e4 = co2_fossil * e1_4[quant_calc]
                    var ch4_result_e4 = ch4 * e1_4[quant_calc]
                    var n2o_result_e4 = N20 * e1_4[quant_calc]
                    var biogenic_co2_result_e4 = biogenic_co2 * e1_4[quant_calc]

                    var co2_fossil_result_e5 = co2_fossil * e1_5[quant_calc]
                    var ch4_result_e5 = ch4 * e1_5[quant_calc]
                    var n2o_result_e5 = N20 * e1_5[quant_calc]
                    var biogenic_co2_result_e5 = biogenic_co2 * e1_5[quant_calc]

                    var co2_fossil_result_e6 = co2_fossil * e1_6[quant_calc]
                    var ch4_result_e6 = ch4 * e1_6[quant_calc]
                    var n2o_result_e6 = N20 * e1_6[quant_calc]
                    var biogenic_co2_result_e6 = biogenic_co2 * e1_6[quant_calc]

                    var co2_fossil_result_e7 = co2_fossil * e1_7[quant_calc]
                    var ch4_result_e7 = ch4 * e1_7[quant_calc]
                    var n2o_result_e7 = N20 * e1_7[quant_calc]
                    var biogenic_co2_result_e7 = biogenic_co2 * e1_7[quant_calc]

                    var co2_fossil_result_e8 = co2_fossil * e1_8[quant_calc]
                    var ch4_result_e8 = ch4 * e1_8[quant_calc]
                    var n2o_result_e8 = N20 * e1_8[quant_calc]
                    var biogenic_co2_result_e8 = biogenic_co2 * e1_8[quant_calc]

                    array_co2.push(co2_fossil_result_e1)
                    array_co2.push(co2_fossil_result_e2)
                    array_co2.push(co2_fossil_result_e3)
                    array_co2.push(co2_fossil_result_e4)
                    array_co2.push(co2_fossil_result_e5)
                    array_co2.push(co2_fossil_result_e6)
                    array_co2.push(co2_fossil_result_e7)
                    array_co2.push(co2_fossil_result_e8)

                    array_ch4.push(ch4_result_e1)
                    array_ch4.push(ch4_result_e2)
                    array_ch4.push(ch4_result_e3)
                    array_ch4.push(ch4_result_e4)
                    array_ch4.push(ch4_result_e5)
                    array_ch4.push(ch4_result_e6)
                    array_ch4.push(ch4_result_e7)
                    array_ch4.push(ch4_result_e8)

                    array_n2o.push(n2o_result_e1)
                    array_n2o.push(n2o_result_e2)
                    array_n2o.push(n2o_result_e3)
                    array_n2o.push(n2o_result_e4)
                    array_n2o.push(n2o_result_e5)
                    array_n2o.push(n2o_result_e6)
                    array_n2o.push(n2o_result_e7)
                    array_n2o.push(n2o_result_e8)

                    array_biogenic_co2.push(biogenic_co2_result_e1)
                    array_biogenic_co2.push(biogenic_co2_result_e2)
                    array_biogenic_co2.push(biogenic_co2_result_e3)
                    array_biogenic_co2.push(biogenic_co2_result_e4)
                    array_biogenic_co2.push(biogenic_co2_result_e5)
                    array_biogenic_co2.push(biogenic_co2_result_e6)
                    array_biogenic_co2.push(biogenic_co2_result_e7)
                    array_biogenic_co2.push(biogenic_co2_result_e8)


                    array.push(array_co2)
                    array.push(array_ch4)
                    array.push(array_n2o)

                    return array

                }
                    // var ch4_energy_result = ch4_energy * e1_1[quant_calc]
                    // var ch4_manufactured_built_result = ch4_manufactured_built * e1_1[quant_calc]
                    // var ch4_comercial_institutional_result = ch4_comercial_institutional * e1_1[quant_calc]
                    // var h4_rafp_result = ch4_rafp * e1_1[quant_calc]
                    // var n2o_energy_result = n2o_energy * e1_1[quant_calc]
                    // var n2o_manufactured_built_result = n2o_manufactured_built * e1_1[quant_calc]
                    // var n2o_comercial_institutional_result = n2o_comercial_institutional * e1_1[quant_calc]
                    // var n2o_rafp_result = n2o_rafp * e1_1[quant_calc]
                    // var fc_32_result = hfc_32 * e1_1[quant_calc]
                    // var hfc_125_result = hfc_125 * e1_1[quant_calc]
                    // var cfc_12_result = cfc_12 * e1_1[quant_calc]
                    
            })

            for (var i=0 ; i< qtd; i++){
                if(arrayPar[i] != undefined){
                    sum_co2 += arrayPar[i][0][0]
                    sum_ch4 += arrayPar[i][1][0]
                    sum_n2o += arrayPar[i][2][0]
                }
            }

            console.log("Co2 Fóssil (t): ",sum_co2, "Ch4 (t): ",sum_ch4, "N2O (t): ",sum_n2o)

        })

    // Calculator.create({
    //     social_name: social_name, company_name: company_name, cnpj: cnpj, 
    //     address: address, people_organization_amount: people_organization_amount, 
    //     people_out_of_organization_amount: people_out_of_organization_amount, 
    //     company_sector: company_sector, company_task_nature: company_task_nature, 
    //     year: year, electricity_consume: electricity_consume, 
    //     electricity_transmission: electricity_transmission,
    //     electricity_quantity: electricity_quantity, electricity_unity:electricity_unity, 
    //     e1_1: e1_1, e1_2: e1_2, e1_3: e1_3, e1_4: e1_4, e1_5: e1_5, e1_6: e1_6, e1_7: e1_7,
    //     e1_8: e1_8, e2_1, e2_2: e2_2, e2_3: e2_3, e2_4: e2_4, e2_5: e2_5, e3_1: e3_1, 
    //     e3_2: e3_2, e3_3: e3_3, e3_4: e3_4, e3_5: e3_5
    // }).then(() => {
    //     Parameters.findAll().then(parameters => {
    //         res.render('index', {token: req.session.token, data: req.body, parameters: parameters}); 
    //     });
    // }).catch((err) => {
    //     res.redirect("/");
    // });
});

routes.get("/admin/results", adminAuth, (req, res) => {
    Parameters.findAll().then(parameters => {
        Calculator.findAll().then(results => {
            res.render("admin/calculator/results", {
                token: req.session.token, 
                results: results, 
                parameters: parameters, 
                calculator: true
            }); 
        })
    });
})

module.exports = routes;