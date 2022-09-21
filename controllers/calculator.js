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
        e2_2, e2_3, e2_4, e2_5, e3_1, e3_2, e3_3 } = req.body

        var replace = ['', '', '0']
        var replace_3 = ['', '0', '0', '0']

        if(e1_1 == undefined){
            e1_1 = replace
        }
        
        if(e1_2 == undefined){
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
            e3_1 = replace_3
        } 
        
        if(e3_2 == undefined){
            e3_2 = replace_3
        } 
        
        if(e3_3 == undefined){
            e3_3 = replace_3
        } 
        
        if(!people_organization_amount){
            people_organization_amount = 0
        }

        if(!people_out_of_organization_amount){
            people_out_of_organization_amount = 0
        }

        if(!year){
            year = "0"
        }

        if(!electricity_quantity){
            electricity_quantity = 0
        }

        console.log(year)

        Parameters.findAll().then((parameters, index) => {
            
            var sum_co2 = 0;
            var sum_ch4 = 0;
            var sum_n2o = 0;
            var sum_biogenic_co2 = 0;

            var sum_co2_two = 0;
            var sum_ch4_two = 0;
            var sum_n2o_two = 0;
            var sum_biogenic_co2_two = 0;

            var sum_co2_three = 0;
            var sum_ch4_three = 0;
            var sum_n2o_three = 0;
            var sum_biogenic_co2_three = 0;
            var sum_hfc32_three = 0;
            var sum_hfc125_three = 0;
            var sum_cfc12_three = 0;


            const arrayPar = parameters.map( parameter => {

                var { co2_fossil, ch4, N20, biogenic_co2, ch4_energy, ch4_manufactured_built,
                    ch4_comercial_institutional,ch4_rafp, n2o_energy, n2o_manufactured_built, 
                    n2o_comercial_institutional, n2o_rafp, hfc_32, hfc_125, cfc_12 } = parameter

                const fuel_calc = 1
                const air_calc = 1
                const extinguish_calc = 2
                const fridge_calc = 3
                const quant_calc = 2
                var array = []

                var array_co2 = []
                var array_ch4 = []
                var array_n2o = []
                var array_biogenic_co2 = []

                var array_co2_two = []
                var array_ch4_two = []
                var array_n2o_two = []
                var array_biogenic_co2_two = []

                var array_co2_three = []
                var array_ch4_three = []
                var array_n2o_three = []
                var array_biogenic_co2_three = []
                var array_hfc32_three = []
                var array_hfc125_three = []
                var array_ccfc12_three = []

                //First escope

                if (parameter.slug_fuel == e1_1[fuel_calc]){
                    var co2_fossil_result_e1 = co2_fossil * e1_1[quant_calc]
                    var ch4_result_e1 = ch4 * e1_1[quant_calc]
                    var n2o_result_e1 = N20 * e1_1[quant_calc]
                    var biogenic_co2_result_e1 = biogenic_co2 * e1_1[quant_calc]   
                }else{
                    var co2_fossil_result_e1 = 0
                    var ch4_result_e1 = 0
                    var n2o_result_e1 = 0
                    var biogenic_co2_result_e1 = 0 
                }

                if(parameter.slug_fuel == e1_2[fuel_calc]){
                    var co2_fossil_result_e2 = co2_fossil * e1_2[quant_calc]
                    var ch4_result_e2 = ch4 * e1_2[quant_calc]
                    var n2o_result_e2 = N20 * e1_2[quant_calc]
                    var biogenic_co2_result_e2 = biogenic_co2 * e1_2[quant_calc]
                }else{
                    var co2_fossil_result_e2 = 0
                    var ch4_result_e2 = 0
                    var n2o_result_e2 = 0
                    var biogenic_co2_result_e2 = 0 
                }

                if(parameter.slug_fuel == e1_3[fuel_calc]){
                    var co2_fossil_result_e3 = co2_fossil * e1_3[quant_calc]
                    var ch4_result_e3 = ch4 * e1_3[quant_calc]
                    var n2o_result_e3 = N20 * e1_3[quant_calc]
                    var biogenic_co2_result_e3 = biogenic_co2 * e1_3[quant_calc]
                }else{
                    var co2_fossil_result_e3 = 0
                    var ch4_result_e3 = 0
                    var n2o_result_e3 = 0
                    var biogenic_co2_result_e3 = 0 
                }

                if(parameter.slug_fuel == e1_4[fuel_calc]){
                    var co2_fossil_result_e4 = co2_fossil * e1_4[quant_calc]
                    var ch4_result_e4 = ch4 * e1_4[quant_calc]
                    var n2o_result_e4 = N20 * e1_4[quant_calc]
                    var biogenic_co2_result_e4 = biogenic_co2 * e1_4[quant_calc]
                }else{
                    var co2_fossil_result_e4 = 0
                    var ch4_result_e4 = 0
                    var n2o_result_e4 = 0
                    var biogenic_co2_result_e4 = 0 
                }

                if(parameter.slug_fuel == e1_5[fuel_calc]){
                    var co2_fossil_result_e5 = co2_fossil * e1_5[quant_calc]
                    var ch4_result_e5 = ch4 * e1_5[quant_calc]
                    var n2o_result_e5 = N20 * e1_5[quant_calc]
                    var biogenic_co2_result_e5 = biogenic_co2 * e1_5[quant_calc]
                }else{
                    var co2_fossil_result_e5 = 0
                    var ch4_result_e5 = 0
                    var n2o_result_e5 = 0
                    var biogenic_co2_result_e5 = 0 
                }

                if(parameter.slug_fuel == e1_6[fuel_calc]){
                    var co2_fossil_result_e6 = co2_fossil * e1_6[quant_calc]
                    var ch4_result_e6 = ch4 * e1_6[quant_calc]
                    var n2o_result_e6 = N20 * e1_6[quant_calc]
                    var biogenic_co2_result_e6 = biogenic_co2 * e1_6[quant_calc]
                }else{
                    var co2_fossil_result_e6 = 0
                    var ch4_result_e6 = 0
                    var n2o_result_e6 = 0
                    var biogenic_co2_result_e6 = 0 
                }

                if(parameter.slug_fuel == e1_7[fuel_calc]){
                    var co2_fossil_result_e7 = co2_fossil * e1_7[quant_calc]
                    var ch4_result_e7 = ch4 * e1_7[quant_calc]
                    var n2o_result_e7 = N20 * e1_7[quant_calc]
                    var biogenic_co2_result_e7 = biogenic_co2 * e1_7[quant_calc]
                }else{
                    var co2_fossil_result_e7 = 0
                    var ch4_result_e7 = 0
                    var n2o_result_e7 = 0
                    var biogenic_co2_result_e7 = 0 
                }

                if(parameter.slug_fuel == e1_8[fuel_calc]){
                    var co2_fossil_result_e8 = co2_fossil * e1_8[quant_calc]
                    var ch4_result_e8 = ch4 * e1_8[quant_calc]
                    var n2o_result_e8 = N20 * e1_8[quant_calc]
                    var biogenic_co2_result_e8 = biogenic_co2 * e1_8[quant_calc]
                }else{
                    var co2_fossil_result_e8 = 0
                    var ch4_result_e8 = 0
                    var n2o_result_e8 = 0
                    var biogenic_co2_result_e8 = 0 
                }

                    //////////////////Emission Two

                if(parameter.slug_fuel == e2_1[fuel_calc]){
                    var co2_fossil_result_two_e1 = co2_fossil * e2_1[quant_calc]
                    var ch4_result_two_e1 = ch4 * e2_1[quant_calc]
                    var n2o_result_two_e1 = N20 * e2_1[quant_calc]
                    var biogenic_co2_result_two_e1 = biogenic_co2 * e2_1[quant_calc]
                }else{
                    co2_fossil_result_two_e1 = 0
                    ch4_result_two_e1 = 0
                    n2o_result_two_e1 = 0
                    biogenic_co2_result_two_e1 = 0
                }

                if(parameter.slug_fuel == e2_2[fuel_calc] ){
                    var co2_fossil_result_two_e2 = co2_fossil * e2_2[quant_calc]
                    var ch4_result_two_e2 = ch4 * e2_2[quant_calc]
                    var n2o_result_two_e2 = N20 * e2_2[quant_calc]
                    var biogenic_co2_result_two_e2 = biogenic_co2 * e2_2[quant_calc]
                }else{
                    co2_fossil_result_two_e2 = 0
                    ch4_result_two_e2 = 0
                    n2o_result_two_e2 = 0
                    biogenic_co2_result_two_e2 = 0
                }

                if(parameter.slug_fuel == e2_3[fuel_calc]){
                    var co2_fossil_result_two_e3 = co2_fossil * e2_3[quant_calc]
                    var ch4_result_two_e3 = ch4 * e2_3[quant_calc]
                    var n2o_result_two_e3 = N20 * e2_3[quant_calc]
                    var biogenic_co2_result_two_e3 = biogenic_co2 * e2_3[quant_calc]
                }else{
                    co2_fossil_result_two_e3 = 0
                    ch4_result_two_e3 = 0
                    n2o_result_two_e3 = 0
                    biogenic_co2_result_two_e3 = 0
                }

                if(parameter.slug_fuel == e2_4[fuel_calc]){
                    var co2_fossil_result_two_e4 = co2_fossil * e2_4[quant_calc]
                    var ch4_result_two_e4 = ch4 * e2_4[quant_calc]
                    var n2o_result_two_e4 = N20 * e2_4[quant_calc]
                    var biogenic_co2_result_two_e4 = biogenic_co2 * e2_4[quant_calc]
                }else{
                    co2_fossil_result_two_e4 = 0
                    ch4_result_two_e4 = 0
                    n2o_result_two_e4 = 0
                    biogenic_co2_result_two_e4 = 0
                }

                if(parameter.slug_fuel == e2_5[fuel_calc]){
                    var co2_fossil_result_two_e5 = co2_fossil * e2_5[quant_calc]
                    var ch4_result_two_e5 = ch4 * e2_5[quant_calc]
                    var n2o_result_two_e5 = N20 * e2_5[quant_calc]
                    var biogenic_co2_result_two_e5 = biogenic_co2 * e2_5[quant_calc]
                }else{
                    co2_fossil_result_two_e5 = 0
                    ch4_result_two_e5 = 0
                    n2o_result_two_e5 = 0
                    biogenic_co2_result_two_e5 = 0
                }

                if( e3_1[air_calc] || e3_1[extinguish_calc] ||  e3_1[fridge_calc] ||
                    e3_2[air_calc] || e3_2[extinguish_calc] ||  e3_2[fridge_calc] ||
                    e3_3[air_calc] || e3_3[extinguish_calc] ||  e3_3[fridge_calc] ||
                    e3_4[air_calc] || e3_4[extinguish_calc] ||  e3_4[fridge_calc] ||
                    e3_5[air_calc] || e3_5[extinguish_calc] ||  e3_5[fridge_calc] ){

                    //////////////////Emission Three
                    if(parameter.slug_fuel == 'ar-condicionado-split'){
                        var sum_air = parseInt(e3_1[air_calc]) + parseInt(e3_2[air_calc]) + parseInt(e3_3[air_calc])
                        var co2_fossil_result_three_air = co2_fossil * sum_air
                        var ch4_result_three_air = ch4 * sum_air
                        var n2o_result_three_air = N20 * sum_air
                        var biogenic_result_three_air = biogenic_co2 * sum_air
                        var hfc32_result_three_air = hfc_32 * sum_air
                        var hfc125_result_three_air = hfc_125 * sum_air
                        var cfc12_result_three_air = cfc_12 * sum_air
                    }else{
                        co2_fossil_result_three_air = 0
                        ch4_result_three_air = 0
                        n2o_result_three_air = 0
                        biogenic_result_three_air = 0
                        hfc32_result_three_air = 0
                        hfc125_result_three_air = 0
                        cfc12_result_three_air = 0
                    }

                    if(parameter.slug_fuel == 'extintores-de-incendio'){
                        var sum_extinguish = parseInt(e3_1[extinguish_calc]) + parseInt(e3_2[extinguish_calc]) + parseInt(e3_3[extinguish_calc])
                        var co2_fossil_result_three_extinguish = co2_fossil * sum_extinguish
                        var ch4_result_three_extinguish = ch4 * sum_extinguish
                        var n2o_result_three_extinguish = N20 * sum_extinguish
                        var biogenic_result_three_extinguish = biogenic_co2 * sum_extinguish
                        var hfc32_result_three_extinguish = hfc_32 * sum_extinguish
                        var hfc125_result_three_extinguish = hfc_125 * sum_extinguish
                        var cfc12_result_three_extinguish = cfc_12 * sum_extinguish
                    }else{
                        co2_fossil_result_three_extinguish = 0
                        ch4_result_three_extinguish = 0
                        n2o_result_three_extinguish = 0
                        biogenic_result_three_extinguish = 0
                        hfc32_result_three_extinguish = 0
                        hfc125_result_three_extinguish = 0
                        cfc12_result_three_extinguish = 0
                    }

                    if(parameter.slug_fuel == 'refrigerador-geladeira-freezer'){
                        var sum_fridge = parseInt(e3_1[fridge_calc]) + parseInt(e3_2[fridge_calc]) + parseInt(e3_3[fridge_calc])
                        var co2_fossil_result_three_fridge = co2_fossil * sum_fridge
                        var ch4_result_three_fridge = ch4 * sum_fridge
                        var n2o_result_three_fridge = N20 * sum_fridge
                        var biogenic_result_three_fridge = biogenic_co2 * sum_fridge
                        var hfc32_result_three_fridge = hfc_32 * sum_fridge
                        var hfc125_result_three_fridge = hfc_125 * sum_fridge
                        var cfc12_result_three_fridge = cfc_12 * sum_fridge
                    }else{
                        co2_fossil_result_three_fridge = 0
                        ch4_result_three_fridge = 0
                        n2o_result_three_fridge = 0
                        biogenic_result_three_fridge = 0
                        hfc32_result_three_fridge = 0
                        hfc125_result_three_fridge = 0
                        cfc12_result_three_fridge = 0
                    }


                    //////////////////Array push

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

                    array_co2_two.push(co2_fossil_result_two_e1)
                    array_co2_two.push(co2_fossil_result_two_e2)
                    array_co2_two.push(co2_fossil_result_two_e3)
                    array_co2_two.push(co2_fossil_result_two_e4)
                    array_co2_two.push(co2_fossil_result_two_e5)

                    array_ch4_two.push(ch4_result_two_e1)
                    array_ch4_two.push(ch4_result_two_e2)
                    array_ch4_two.push(ch4_result_two_e3)
                    array_ch4_two.push(ch4_result_two_e4)
                    array_ch4_two.push(ch4_result_two_e5)

                    array_n2o_two.push(n2o_result_two_e1)
                    array_n2o_two.push(n2o_result_two_e2)
                    array_n2o_two.push(n2o_result_two_e3)
                    array_n2o_two.push(n2o_result_two_e4)
                    array_n2o_two.push(n2o_result_two_e5)

                    array_biogenic_co2_two.push(biogenic_co2_result_two_e1)
                    array_biogenic_co2_two.push(biogenic_co2_result_two_e2)
                    array_biogenic_co2_two.push(biogenic_co2_result_two_e3)
                    array_biogenic_co2_two.push(biogenic_co2_result_two_e4)
                    array_biogenic_co2_two.push(biogenic_co2_result_two_e5)

                    array_co2_three.push(co2_fossil_result_three_air)
                    array_co2_three.push(co2_fossil_result_three_extinguish)
                    array_co2_three.push(co2_fossil_result_three_fridge)

                    array_ch4_three.push(ch4_result_three_air)
                    array_ch4_three.push(ch4_result_three_extinguish)
                    array_ch4_three.push(ch4_result_three_fridge)

                    array_n2o_three.push(n2o_result_three_air)
                    array_n2o_three.push(n2o_result_three_extinguish)
                    array_n2o_three.push(n2o_result_three_fridge)

                    array_biogenic_co2_three.push(biogenic_result_three_air)
                    array_biogenic_co2_three.push(biogenic_result_three_extinguish)
                    array_biogenic_co2_three.push(biogenic_result_three_fridge)

                    array_hfc32_three.push(hfc32_result_three_air)
                    array_hfc32_three.push(hfc32_result_three_extinguish)
                    array_hfc32_three.push(hfc32_result_three_fridge)

                    array_hfc125_three.push(hfc125_result_three_air)
                    array_hfc125_three.push(hfc125_result_three_extinguish)
                    array_hfc125_three.push(hfc125_result_three_fridge)

                    array_ccfc12_three.push(cfc12_result_three_air)
                    array_ccfc12_three.push(cfc12_result_three_extinguish)
                    array_ccfc12_three.push(cfc12_result_three_fridge)

                    array.push(array_co2)
                    array.push(array_ch4)
                    array.push(array_n2o)
                    array.push(array_biogenic_co2)

                    array.push(array_co2_two)
                    array.push(array_ch4_two)
                    array.push(array_n2o_two)
                    array.push(array_biogenic_co2_two)

                    array.push(array_co2_three)
                    array.push(array_ch4_three)
                    array.push(array_n2o_three)
                    array.push(array_biogenic_co2_three)
                    array.push(array_hfc32_three)
                    array.push(array_hfc125_three)
                    array.push(array_ccfc12_three)

                    return array

                }   
            })

            for (var i=0; i < 56; i++){ //Range da tabela de calculo dos parametros
                if(arrayPar[i] != undefined){
                    for(var j=0; j<=7; j++){ //Range do array de dados
                        sum_co2 += arrayPar[i][0][j]
                        sum_ch4 += arrayPar[i][1][j]
                        sum_n2o += arrayPar[i][2][j]
                        sum_biogenic_co2 += arrayPar[i][3][j]
                    }
                }   
            }

            for(var i=56; i < 80; i++ ){
                if(arrayPar[i] != undefined){
                    for(var j=0; j<5; j++){
                        if( arrayPar[i][4][j] == undefined || arrayPar[i][5][j] == undefined ||
                            arrayPar[i][6][j] == undefined || arrayPar[i][7][j] == undefined){

                                arrayPar[i][4][j] = 0;
                                arrayPar[i][5][j] = 0;
                                arrayPar[i][6][j] = 0;
                                arrayPar[i][7][j] = 0;
                        }

                        sum_co2_two += arrayPar[i][4][j]
                        sum_ch4_two += arrayPar[i][5][j]
                        sum_n2o_two += arrayPar[i][6][j]
                        sum_biogenic_co2_two += arrayPar[i][7][j] 
                    }
                }
            }

            for(var i=80; i<85; i++){
                if(arrayPar[i] != undefined){
                    for(var j=0; j<3; j++){
                        if(arrayPar[i][8][j] == undefined || arrayPar[i][9][j] == undefined ||
                            arrayPar[i][10][j] == undefined || arrayPar[i][11][j] == undefined ||
                            arrayPar[i][12][j] == undefined || arrayPar[i][13][j] == undefined ||
                            arrayPar[i][14][j] == undefined){

                                arrayPar[i][8][j] = 0;
                                arrayPar[i][9][j] = 0;
                                arrayPar[i][10][j] = 0;
                                arrayPar[i][11][j] = 0;
                                arrayPar[i][12][j] = 0;
                                arrayPar[i][13][j] = 0;
                                arrayPar[i][14][j] = 0;
                        }

                        sum_co2_three += arrayPar[i][8][j]
                        sum_ch4_three += arrayPar[i][9][j]
                        sum_n2o_three += arrayPar[i][10][j]
                        sum_biogenic_co2_three += arrayPar[i][11][j]
                        sum_hfc32_three += arrayPar[i][12][j]/1000
                        sum_hfc125_three += arrayPar[i][13][j]/1000
                        sum_cfc12_three += arrayPar[i][13][j]/1000
                    }
                }
            }

            console.log("Co2 Fóssil (t): ",sum_co2, "Ch4 (t): ",sum_ch4, "N2O (t): ",sum_n2o, "CO2 biogênico (t): ",sum_biogenic_co2)
            console.log("Co2 Fóssil (t): ",sum_co2_two, "Ch4 (t): ",sum_ch4_two, "N2O (t): ",sum_n2o_two, "CO2 biogênico (t): ",sum_biogenic_co2_two)
            console.log("Co2 Fóssil (t): ",sum_co2_three, "Ch4 (t): ",sum_ch4_three, "N2O (t): ",sum_n2o_three, "CO2 biogênico (t): ",sum_biogenic_co2_three, "HFC-32 (t): ", sum_hfc32_three,  "HFC-125 (t): ", sum_hfc125_three, "CFC-12 (t): ", sum_cfc12_three )

            const electricity_co2 = parameters.map(parameter => {
                return parameter.co2_fossil * electricity_quantity
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
            //     e3_2: e3_2, e3_3: e3_3,
            // }).then(() => {
                res.render('index', {token: req.session.token, 
                    parameters: parameters, 
                    calculator:true,
                    sum_co2: sum_co2.toFixed(2),
                    sum_ch4: sum_ch4.toFixed(2),
                    sum_n2o: sum_n2o.toFixed(2),
                    sum_biogenic_co2: sum_biogenic_co2.toFixed(2),
                    sum_co2_two: sum_co2_two.toFixed(2),
                    sum_ch4_two: sum_ch4_two.toFixed(2),
                    sum_n2o_two: sum_n2o_two.toFixed(2),
                    sum_biogenic_co2_two: sum_biogenic_co2_two.toFixed(2),
                    sum_co2_three: sum_co2_three.toFixed(2),
                    sum_ch4_three: sum_ch4_three.toFixed(2),
                    sum_n2o_three: sum_n2o_three.toFixed(2),
                    sum_biogenic_co2_three: sum_biogenic_co2_three.toFixed(2),
                    sum_hfc32_three: sum_hfc32_three.toFixed(2),
                    sum_hfc125_three: sum_hfc125_three.toFixed(2),
                    sum_cfc12_three: sum_cfc12_three.toFixed(2),
                    sum_co2_three: sum_co2_three.toFixed(2),
                    sum_ch4_three: sum_ch4_three.toFixed(2),
                    sum_n2o_three: sum_n2o_three.toFixed(2),
                    sum_biogenic_co2_three: sum_biogenic_co2_three.toFixed(2),
                    sum_hfc32_three: sum_hfc32_three.toFixed(2),
                    sum_hfc125_three: sum_hfc125_three.toFixed(2),
                    sum_cfc12_three: sum_cfc12_three.toFixed(2),
                    sum_co2_four: electricity_co2[electricity_co2.length - 1],
                    sum_ch4_four: 0,
                    sum_n2o_four: 0,
                    sum_biogenic_co2_four: 0
                }); 
            // }).catch((err) => {
            //     console.log(err)
            //     res.redirect("/");
            // });
        })
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