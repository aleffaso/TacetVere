  //////##########################################################Emission_one##############################################################\\\\\\
var form_quantity = "<br><input class='form-quantity form-control' name='emission_quantity_one' type='number' placeholder='Quantidade'>"
var form_fuel = "<br><select id='form-fuel' class='form-fuel form-control' name='emission_one'>" + 
                        "<option value='nao-aplicavel'>Selecione o combustível</option>" + 
                        "<option value='nao-aplicavel'>Não Aplicável</option>" +
                        "<option value='acetileno'>Acetileno (kg) </option>" +
                        "<option value='alcatrao'>Alcatrão (m³)</option>" +
                        "<option value='asfaltos'>Asfaltos (m³)</option>" +
                        "<option value='carvao-metalurgico-importado'>Carvão Metalúrgico Importado (Toneladas)</option>" +
                        "<option value='carvao-metalurgico-nacional'>Carvão Metalúrgico Nacional (Toneladas)</option>" +
                        "<option value='carvao-vapor-3100-kcal-kg-one'>Carvão Vapor 3100 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-3300-kcal-kg-one'>Carvão Vapor 3300 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-3700-kcal-kg-one'>Carvão Vapor 3700 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-4200-kcal-kg-one'>Carvão Vapor 4200 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-4500-kcal-kg-one'>Carvão Vapor 4500 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-4700-kcal-kg-one'>Carvão Vapor 4700 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-5200-kcal-kg-one'>Carvão Vapor 5200 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-5900-kcal-kg-one'>Carvão Vapor 5900 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-6000-kcal-kg-one'>Carvão Vapor 6000 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-sem-especificacao'>Carvão Vapor sem Especificação (Toneladas)</option>" +
                        "<option value='coque-de-carvao-mineral'>Coque de Carvão Mineral (Toneladas)</option>" +
                        "<option value='coque-de-petroleo'>Coque de Petróleo (m³)</option>" +
                        "<option value='etano'>Etano (Toneladas)</option>" +
                        "<option value='gas-de-coqueria'>Gás de Coqueria (Toneladas)</option>" +
                        "<option value='gas-de-refinaria'>Gás de Refinaria (Toneladas)</option>" +
                        "<option value='gas-liquefeito-de-petroleo (GLP)'>Gás Liquefeito de Petróleo (GLP) (Toneladas)</option>" +
                        "<option value='gas-natural-seco'>Gás Natural Seco (m³)</option>" +
                        "<option value='gas-natural-umido'>Gás Natural Úmido (m³)</option>" +
                        "<option value='gasolina-automotiva(pura)'>Gasolina Automotiva (pura) (Litros)</option>" +
                        "<option value='gasolina-de-aviacao'>Gasolina de Aviação (Litros)</option>" +
                        "<option value='liquidos-de-gas Natural(LGN)'>Líquidos de Gás Natural (LGN) (Toneladas)</option>" +
                        "<option value='lubrificantes'>Lubrificantes (Litros)</option>" +
                        "<option value='nafta'>Nafta (m³)</option>" +
                        "<option value='oleo-combustível'>Óleo Combustível (Litros)</option>" +
                        "<option value='oleo-de-xisto'>Óleo de Xisto (Toneladas)</option>" +
                        "<option value='oleo-diesel-puro'>Óleo Diesel (puro) (Litros)</option>" +
                        "<option value='oleos-residuais'>Óleos Residuais (Toneladas)</option>" +
                        "<option value='outros-produtos-de-petróleo'>Outros Produtos de Petróleo (Toneladas)</option>" +
                        "<option value='parafina'>Parafina (Toneladas)</option>" +
                        "<option value='petroleo-bruto'>Petróleo Bruto (m³)</option>" +
                        "<option value='querosene-de-aviacao'>Querosene de Aviação (Toneladas)</option>" +
                        "<option value='querosene-iluminante'>Querosene Iluminante (Toneladas)</option>" +
                        "<option value='residuos-industriais'>Resíduos Industriais (TJ)</option>" +
                        "<option value='resíduos-municipais-(fracao-nao-biomassa)'>Resíduos Municipais (fração não-biomassa) (Toneladas)</option>" +
                        "<option value='solventes'>Solventes (Litros)</option>" +
                        "<option value='turfa'>Turfa (Toneladas)</option>" +
                        "<option value='xisto-betuminoso-e-areias-betuminosas'>Xisto Betuminoso e Areias Betuminosas (Toneladas)</option>" +
                        "<option value='etanol-anidro'>Etanol Anidro (Litros)</option>" +
                        "<option value='etanol-hidratado'>Etanol Hidratado (Litros)</option>" +
                        "<option value='bagaco-de-cana'>Bagaço de Cana (Toneladas)</option>" +
                        "<option value='biodiesel (B100)'>Biodiesel (B100) (Litros)</option>" +
                        "<option value='biogas'>Biogás (Toneladas)</option> (Toneladas)" +
                        "<option value='caldo-de-cana'>Caldo de Cana (Toneladas)</option>" +
                        "<option value='carvao-vegetal'>Carvão Vegetal (Toneladas)</option>" +
                        "<option value='lenha-para-carvoejamento'>Lenha para Carvoejamento (Toneladas)</option>" +
                        "<option value='lenha-para-queima-direta'>Lenha para Queima Direta (Toneladas)</option>" +
                        "<option value='licor-negro-(lixivia)'>Licor Negro (Lixívia) (Toneladas)</option>" +
                        "<option value='melaco'>Melaço (Toneladas)</option>" +
                        "<option value='residuos-municipais-(fracao-biomassa)'>Resíduos Municipais (fração biomassa) (Toneladas)</option>" +
                        "<option value='residuos-vegetais'>Resíduos Vegetais (Toneladas)</option>" +
                    "</select>"

var info_start ="<div class='row'>" +
                    "<div class='col-11'>"
var info_mid =  "</div>" + 
                "<div class='col-1'>" +
                        "<a class='badge badge-dark' data-bs-toggle='collapse' href='#stationInfo7' role='button' aria-bs-expanded='false' aria-bs-controls='stationInfo7'>" +
                            "<i class='bi bi-info-circle-fill'></i>" +
                        "</a>" +
                    "</div>" +
                "</div>"
var info_end =  "<div class='collapse' id='stationInfo7'>" +
                    "<div class='mt-2'>" +
                        "Ex: Geradores a óleo diesel, aquecedores ou fornos/fogões/cooktops a gás, etc. Caso a alimentação da fonte de calor ou vapor seja a eletricidade, incluir somente na etapa de “Emissões Indiretas"+
                    "</div>" +
                "</div>"

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        var fuel = []
        var quantity = []
        var i = 0
        var j = 0

        if (val == "geracao-de-energia") {
            var e1_1 = "<input class='form-control' name='e1_1' type='text' value='Cadeiras e turbinas' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Produção de eletricidade' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Produção de calor ou vapor' readonly='readonly'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Bombas de combustível' readonly='readonly'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='Células de combustível' readonly='readonly'>"
            var e1_6 = "<hr><input class='form-control' name='e1_6' type='text' value='Chama' readonly='readonly'>"
            
            $("#emission_one").html(
                info_start + e1_1 + info_mid + info_end + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity +
                e1_4 + form_fuel + form_quantity +
                e1_5 + form_fuel + form_quantity +
                e1_6 + form_fuel + form_quantity 
            )

            $("#calculator").append(e1_1+e1_2+e1_3+e1_4+e1_5+e1_6)
            
            $(".form-fuel").change( function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "oleo-e-gas"){
            var e1_1 = "<input class='form-control' name='e1_1' type='text' value='Processamento de aquecedores' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Motores' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Turbinas' readonly='readonly'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Chamas' readonly='readonly'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='Incineradoras' readonly='readonly'>"
            var e1_6 = "<hr><input class='form-control' name='e1_6' type='text' value='Oxidantes' readonly='readonly'>"
            var e1_7 = "<hr><input class='form-control' name='e1_7' type='text' value='Produção de eletricidade' readonly='readonly'>"
            var e1_8 = "<hr><input class='form-control' name='e1_8' type='text' value='Calor e vapor' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity +
                e1_4 + form_fuel + form_quantity +
                e1_5 + form_fuel + form_quantity +
                e1_6 + form_fuel + form_quantity +
                e1_7 + form_fuel + form_quantity +
                e1_8 + form_fuel + form_quantity 
            )

            $("#calculator").append(e1_1+e1_2+e1_3+e1_4+e1_5+e1_6+e1_7+e1_8)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "extracao-mineral-de-carvao"){
            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Combustão à chama e à gás metano' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Uso de explosivos' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Fogos das minas' readonly='readonly'>"
            
            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2+e1_3)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "aluminio"){
            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Processamento de bauxita à alumínio' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Cozedura do coque' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Cal' readonly='readonly'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Precipitado de sódio e uso de combustível' readonly='readonly'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='No local CHP' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity +
                e1_4 + form_fuel + form_quantity +
                e1_5 + form_fuel + form_quantity 
            )

            $("#calculator").append(e1_1+e1_2+e1_3+e1_4+e1_5)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "ferro-e-aco"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Coque' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Carvão e fluxos de carbonato' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Caldeiras' readonly='readonly'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Chama' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity +
                e1_4 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2+e1_3+e1_4)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "quimicos"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Caldeiras' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Chama' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Fornos de fundição redutivos' readonly='readonly'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Reatores de chama' readonly='readonly'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='Reformadores de vapor' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity +
                e1_4 + form_fuel + form_quantity +
                e1_5 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2+e1_3+e1_4+e1_5)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "cimento-e-cal"){
            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Forno de tijolo holandês' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Secagem de materiais' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Produção de eletricidade' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2+e1_3)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "residuos"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Incineradoras' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Caldeiras' readonly='readonly'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Chama' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity +
                e1_3 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2+e1_3)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "papel-e-celulose"){
            var e1_1 = "<input class='form-control' name='e1_1' type='text' value='Produção de vapor e eletricidade' readonly='readonly'>"
            var e1_2 = "<input class='form-control' name='e1_2' type='text' value='Emissões derivadas do combustível fóssil da calcinação de carbonato de cálcio em fornos de cal, da secagem de produtos com secadores infravermelhos cheios de combustíveis fósseis' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "producao-de-HCFC22"){
            var e1_1 = "<input class='form-control' name='e1_1' type='text' value='Produção de eletricidade, calor ou vapor' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "producao-semicondutores"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Oxidação de desperdício orgânico volátil' readonly='readonly'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Produção de eletricidade, calor ou vapor' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity +
                e1_2 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "producao-de-servicos"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Produção de eletricidade, calor ou vapor locais' readonly='readonly'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity
            )

            $("#calculator").append(e1_1+e1_2)

            $(".form-fuel").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else{
          $("#emission_one").html(
            "<div><hr><h4>É necessário selecionar o setor</h4></div>"
            )
        }
    });
  });

  //////##########################################################Emission_two##############################################################\\\\\\

var form_quantity_two = "<br><input class='form-quantity-two form-control' name='emission_quantity_two' type='number' placeholder='Quantidade'>"
const form_fuel_two =  "<br><select class='form-fuel-two form-control' name='emission_two'>" +
                        "<option value=''>Combustível</option>" +
                        "<option value='nao-aplicavel'>Não Aplicável</option>" +
                        "<option value='gasolina-automotiva-pura-movel'>Gasolina Automotiva (pura) (Litros)</option>" +
                        "<option value='ole-diesel-puro-movel'>Óleo Diesel (puro) (Litros)</option>" +
                        "<option value='gas-natural-veicular-gnv'>Gás Natural Veicular (GNV) (Litros)</option>" +
                        "<option value='gas-liquefeito-de-petroleo-glp'>Gás Liquefeito de Petróleo (GLP) (Litros)</option>" +
                        "<option value='querosene-de-aviacao'>Querosene de Aviação (Litros)</option>" +
                        "<option value='gasolina-de-aviacao'>Gasolina de Aviação (Litros)</option>" +
                        "<option value='lubrificantes'>Lubrificantes (Litros)</option>" +
                        "<option value='oleo-combustivel'>Óleo Combustível (Litros)</option>" +
                        "<option value='etanol-hidratado'>Etanol Hidratado (Litros)</option>" +
                        "<option value='biodiesel-b100'>Biodiesel (B100) (Litros)</option>" +
                        "<option value='etanol-anidro'>Etanol Anidro (Litros)</option>" +
                        "<option value='carvao-vapor-3100-kcal-kg-two'>Carvão Vapor 3100 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-3300-kcal-kg-two'>Carvão Vapor 3300 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-3700-kcal-kg-two'>Carvão Vapor 3700 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-4200-kcal-kg-two'>Carvão Vapor 4200 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-4500-kcal-kg-two'>Carvão Vapor 4500 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-4700-kcal-kg-two'>Carvão Vapor 4700 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-5200-kcal-kg-two'>Carvão Vapor 5200 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-5900-kcal-kg-two'>Carvão Vapor 5900 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-6000-kcal-kg-two'>Carvão Vapor 6000 kcal / kg (Toneladas)</option>" +
                        "<option value='carvao-vapor-sem-especificacao'>Carvão Vapor sem Especificação (Toneladas)</option>" +
                        "<option value='coque-de-carvao-mineral'>Coque de Carvão Mineral (Toneladas)</option>" +
                    "</select>"

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        var fuel = []
        var quantity = []
        var i = 0
        var j = 0

        if (val == "geracao-de-energia") {
            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Furgões / vans' readonly='readonly'>"
            var e2_2 = "<hr><input class='form-control' name='e2_2' type='text' value='Caminhão para transporte de combustíveis' readonly='readonly'>"
            var e2_3 = "<hr><input class='form-control' name='e2_3' type='text' value='Barcos' readonly='readonly'>"
            
            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two +
                e2_2 + form_fuel_two + form_quantity_two +
                e2_3 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1+e2_2+e2_3)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "oleo-e-gas"){

            var e2_1 = "<hr><input class='form-control' name='' type='text' value='Transporte de matérias primas/produtos/desperdícios brutos' readonly='readonly'>"
            var e2_2 = "<hr><input class='form-control' name='' type='text' value='Veículos possuídos pela empresa' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two +
                e2_2 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1+e2_2)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "extracao-mineral-de-carvao" || val == "aluminio"){
            $("#emission_two").html(
                "<div><hr><h4>Pode seguir para a próxima etapa</h4></div>"
            )

//////########################################################################################################################

        }else if (val == "ferro-e-aco"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte local' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "quimicos"){
            
            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de materiais/produtos/desperdício' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "cimento-e-cal"){
            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Operações de pedreiras' readonly='readonly'>"
            var e2_2 = "<hr><input class='form-control' name='e2_2' type='text' value='Transporte local' readonly='readonly'>"
            
            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two +
                e2_2 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1+e2_2)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })



//////########################################################################################################################

        }else if (val == "residuos"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de desperdício/produtos' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "papel-e-celulose"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas, produtos e desperdícios' readonly='readonly'>"
            var e2_2 = "<hr><input class='form-control' name='e2_2' type='text' value='Operação de equipamento de colheita' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two +
                e2_2 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1+e2_2)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "producao-de-HCFC22"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas/desperdício/produtos' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "producao-semicondutores"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas/desperdício/produtos' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "producao-de-servicos"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas, insumos e resíduos' readonly='readonly'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two
            )

            $("#calculator").append(e2_1)

            $(".form-fuel-two").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-two").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else{
          $("#emission_two").html(
            "<div><hr><h4>É necessário selecionar o setor</h4></div>"
            )
        }
    });
});

  //////##########################################################Emission_three##############################################################\\\\\\

var form_quantity_air_conditionair = "<br><input class='form-air-conditioner form-control' name='' value='Ar condicionado central' readonly='readonly'><br><input class='form_quantity_air_conditionair form-control' name='emission_quantity_three' type='number' placeholder='Quantidade'>"

var form_quantity_air_split = "<br><input class='form-air-split form-control' name='' value='Ar condicionado split' readonly='readonly'><br><input class='form_quantity_air_split form-control' name='emission_quantity_three' type='number' placeholder='Quantidade'>"

var form_quantity_extinguish = "<br><input class='form-air-conditioner form-control' name='' value='Extintores' readonly='readonly'><br><input class='form-quantity-extinguish form-control' name='emission_quantity_three' type='number' placeholder='Quantidade'>"

var form_quantity_fridge = "<br><input class='form-air-conditioner form-control' name='' value='Refrigerador, Geladeira, Freezer' readonly='readonly'><br><input class='form-quantity-fridge form-control' name='emission_quantity_three' type='number' placeholder='Quantidade'>"

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();

        function emissionThreeStandard(){
            var quantity_air = [];
            var quantity_air_split = [];
            var quantity_extinguish = [];
            var quantity_fridge = [];
            var i = 0;
            var j = 0;
            var k = 0;
            var w = 0;

            $(".form_quantity_air_conditionair").change(function () {
                quantity_air[i++] = $(this).val()
                console.log(quantity_air[quantity_air.length - 1])
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='number' value='"+ quantity_air[quantity_air.length - 1] +"'>"
                )
            })
    
            $(".form_quantity_air_split").change(function () {
                quantity_air_split[w++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ w +"' type='number' value='"+ quantity_air_split[quantity_air_split.length - 1] +"'>"
                )
            })
    
            $(".form-quantity-extinguish").change(function () {
                quantity_extinguish[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity_extinguish[quantity_extinguish.length - 1] +"'>"
                )
            })
    
            $(".form-quantity-fridge").change(function () {
                quantity_fridge[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='number' value='"+ quantity_fridge[quantity_fridge.length - 1] +"'>"
                )
            })

        }

        if (val == "geracao-de-energia") {

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Fuga de CH4 das instalações de transmissão e armazenamento' readonly='readonly'>" 
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Emissões de HFC das instalações de armazenamento de LPG' readonly='readonly'>"
            var e3_3 = "<hr><input class='form-control' name='e3_3' type='text' value='Emissões de SF6 do equipamento de transmissão e distribuição' readonly='readonly'>"

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_2 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_3 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge
            )

            $("#calculator").append(e3_1+e3_2+e3_3)

            emissionThreeStandard()




//////########################################################################################################################

        }else if (val == "oleo-e-gas"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Fugas de equipamentos sob pressão' readonly='readonly'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Tratamento de águas residuais' readonly='readonly'>"
            var e3_3 = "<hr><input class='form-control' name='e3_3' type='text' value='Captação à superfície' readonly='readonly'>"

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_2 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_3 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge
            )

            $("#calculator").append(e3_1+e3_2+e3_3)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "extracao-mineral-de-carvao"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Emissões de CH4 de minas de carvão locais e depósitos de carvão' readonly='readonly'>"

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge 
            )

            $("#calculator").append(e3_1)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "aluminio"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Linha de combustível CH4' readonly='readonly'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='HFC e PFC' readonly='readonly'>"
            var e3_3 = "<hr><input class='form-control' name='e3_3' type='text' value='SF6 de estufa' readonly='readonly'>"

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_2 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_3 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge
            )

            $("#calculator").append(e3_1+e3_2+e3_3)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "ferro-e-aco"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='CH4' readonly='readonly'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='N2O' readonly='readonly'>"
            
            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_2 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge 
            )

            $("#calculator").append(e3_1+e3_2)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "quimicos"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Uso de HFC' readonly='readonly'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Fuga do tanque de armazenamento' readonly='readonly'>"

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge +
                e3_2 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge 
            )

            $("#calculator").append(e3_1+e3_2)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "cimento-e-cal"){
            $("#emission_three").html(
                "<div><hr><h4>Pode seguir para a próxima etapa</h4></div>"
            )

//////########################################################################################################################

        }else if (val == "residuos"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Emissões de CH4 e CO2 de desperdício e da decomposição do produto animal' readonly='readonly'>"

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge 
            )

            $("#calculator").append(e3_1)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "papel-e-celulose"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='CH4 e CO2 de desperdício' readonly='readonly'>" 

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge 
            )

            $("#calculator").append(e3_1+e3_2+e3_3)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "producao-de-HCFC22"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Uso de HFC' readonly='readonly'>"  

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge 
            )

            $("#calculator").append(e3_1)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "producao-semicondutores"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Processamento de fugas de gás armazenados' readonly='readonly'>"
            // var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Fuga a partir de contentores'>" 

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge 
            )

            $("#calculator").append(e3_1)

            emissionThreeStandard()


//////########################################################################################################################

        }else if (val == "producao-de-servicos"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Emissões decorrentes do uso de equipamento de refrigeração e de ar condicionado' readonly='readonly'>"
            // var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Fuga a partir de contentores' readonly='readonly'>"

            $("#emission_three").html(
                e3_1 + form_quantity_air_conditionair + form_quantity_air_split + form_quantity_extinguish + form_quantity_fridge
            )

            $("#calculator").append(e3_1)

            emissionThreeStandard()


//////########################################################################################################################

        }else{
            $("#emission_three").html(
                 "<div><hr><h4>É necessário selecionar o setor</h4></div>"
            )
        }
    });
});

//////##########################################################FIM##############################################################\\\\\\