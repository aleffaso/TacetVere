  //////##########################################################Emission_one##############################################################\\\\\\
var form_quantity = "<br><input class='form-quantity form-control' name='emission_quantity_one' type='number' placeholder='Quantidade'>"
var form_unity = "<br><input class='form-unity form-control' name='emission_unity_one' type='text' placeholder='Unidade'>"
var form_fuel = "<br><select class='form-fuel form-control' name='emission_one'>" + 
                        "<option value=''>Selecione o combustível</option>" + 
                        "<option value='nao-aplicavel'>Não Aplicável</option>" +
                        "<option value='acetileno'>Acetileno</option>" +
                        "<option value='alcatrao'>Alcatrão</option>" +
                        "<option value='asfaltos'>Asfaltos</option>" +
                        "<option value='carvao-metalurgico-importado'>Carvão Metalúrgico Importado</option>" +
                        "<option value='carvao-Metalurgico-nacional'>Carvão Metalúrgico Nacional</option>" +
                        "<option value='carvao-vapor-3100-kcal/kg'>Carvão Vapor 3100 kcal / kg</option>" +
                        "<option value='carvao-vapor-3300-kcal/kg'>Carvão Vapor 3300 kcal / kg</option>" +
                        "<option value='carvao-vapor-3700-kcal/kg'>Carvão Vapor 3700 kcal / kg</option>" +
                        "<option value='carvao-vapor-4200-kcal/kg'>Carvão Vapor 4200 kcal / kg</option>" +
                        "<option value='carvao-vapor-4500-kcal/kg'>Carvão Vapor 4500 kcal / kg</option>" +
                        "<option value='carvao-vapor-4700-kcal/kg'>Carvão Vapor 4700 kcal / kg</option>" +
                        "<option value='carvao-vapor-5200-kcal/kg'>Carvão Vapor 5200 kcal / kg</option>" +
                        "<option value='carvao-vapor-5900-kcal/kg'>Carvão Vapor 5900 kcal / kg</option>" +
                        "<option value='carvao-vapor-6000-kcal/kg'>Carvão Vapor 6000 kcal / kg</option>" +
                        "<option value='carvao-vapor-sem-especificacao'>Carvão Vapor sem Especificação</option>" +
                        "<option value='coque-de-carvao-mineral'>Coque de Carvão Mineral</option>" +
                        "<option value='coque-de-petroleo'>Coque de Petróleo</option>" +
                        "<option value='etano'>Etano</option>" +
                        "<option value='gas-de-coqueria'>Gás de Coqueria</option>" +
                        "<option value='gas-de-refinaria'>Gás de Refinaria</option>" +
                        "<option value='gas-liquefeito-de-petroleo (GLP)'>Gás Liquefeito de Petróleo (GLP)</option>" +
                        "<option value='gas-natural-seco'>Gás Natural Seco</option>" +
                        "<option value='gas-natural-umido'>Gás Natural Úmido</option>" +
                        "<option value='gasolina-automotiva(pura)'>Gasolina Automotiva (pura)</option>" +
                        "<option value='gasolina-de-aviacao'>Gasolina de Aviação</option>" +
                        "<option value='liquidos-de-gas Natural(LGN)'>Líquidos de Gás Natural (LGN)</option>" +
                        "<option value='lubrificantes'>Lubrificantes</option>" +
                        "<option value='nafta'>Nafta</option>" +
                        "<option value='oleo-combustível'>Óleo Combustível</option>" +
                        "<option value='oleo-de-xisto'>Óleo de Xisto</option>" +
                        "<option value='oleo-diesel-(puro)'>Óleo Diesel (puro)</option>" +
                        "<option value='oleos-residuais'>Óleos Residuais</option>" +
                        "<option value='outros-produtos-de-petróleo'>Outros Produtos de Petróleo</option>" +
                        "<option value='parafina'>Parafina</option>" +
                        "<option value='petroleo-bruto'>Petróleo Bruto</option>" +
                        "<option value='querosene-de-aviacao'>Querosene de Aviação</option>" +
                        "<option value='querosene-iluminante'>Querosene Iluminante</option>" +
                        "<option value='residuos-industriais'>Resíduos Industriais</option>" +
                        "<option value='resíduos-municipais-(fracao-nao-biomassa)'>Resíduos Municipais (fração não-biomassa)</option>" +
                        "<option value='solventes'>Solventes</option>" +
                        "<option value='turfa'>Turfa</option>" +
                        "<option value='xisto-betuminoso-e-areias-betuminosas'>Xisto Betuminoso e Areias Betuminosas</option>" +
                        "<option value='etanol-anidro'>Etanol Anidro</option>" +
                        "<option value='etanol-hidratado'>Etanol Hidratado</option>" +
                        "<option value='bagaco-de-cana'>Bagaço de Cana</option>" +
                        "<option value='biodiesel (B100)'>Biodiesel (B100)</option>" +
                        "<option value='biogas'>Biogás</option>" +
                        "<option value='caldo-de-cana'>Caldo de Cana</option>" +
                        "<option value='carvao-vegetal'>Carvão Vegetal</option>" +
                        "<option value='lenha-para-carvoejamento'>Lenha para Carvoejamento</option>" +
                        "<option value='lenha-para-queima-direta'>Lenha para Queima Direta</option>" +
                        "<option value='licor-negro-(lixivia)'>Licor Negro (Lixívia)</option>" +
                        "<option value='melaco'>Melaço</option>" +
                        "<option value='residuos-municipais-(fracao-biomassa)'>Resíduos Municipais (fração biomassa)</option>" +
                        "<option value='residuos-vegetais'>Resíduos Vegetais</option>" +
                    "</select>"

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        var fuel = []
        var quantity = []
        var unity = []
        var i = 0
        var j = 0
        var k = 0

        if (val == "geracao-de-energia") {
            var e1_1 = "<input class='form-control' name='e1_1' type='text' value='Cadeiras e turbinas'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Produção de eletricidade'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Bombas de combustível'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Células de combustível'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='Chama'>"
            
            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity +
                e1_4 + form_fuel + form_quantity + form_unity +
                e1_5 + form_fuel + form_quantity + form_unity 
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "oleo-e-gas"){
            var e1_1 = "<input class='form-control' name='ge1_1' type='text' value='Processamento de aquecedores'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Motores'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Turbinas'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Chamas'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='Incineradoras'>"
            var e1_6 = "<hr><input class='form-control' name='e1_6' type='text' value='Oxidantes'>"
            var e1_7 = "<hr><input class='form-control' name='e1_7' type='text' value='Produção de eletricidade'>"
            var e1_8 = "<hr><input class='form-control' name='e1_8' type='text' value='Calor e vapor'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity +
                e1_4 + form_fuel + form_quantity + form_unity +
                e1_5 + form_fuel + form_quantity + form_unity +
                e1_6 + form_fuel + form_quantity + form_unity +
                e1_7 + form_fuel + form_quantity + form_unity +
                e1_8 + form_fuel + form_quantity + form_unity 
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "extracao-mineral-de-carvao"){
            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Combustão à chama e à gás metano'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Uso de explosivos'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Fogos das minas'>"
            
            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "aluminio"){
            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Processamento de bauxita à alumínio'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Cozedura do coque'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Cal'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Precipitado de sódio e uso de combustível'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='No local CHP'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity +
                e1_4 + form_fuel + form_quantity + form_unity +
                e1_5 + form_fuel + form_quantity + form_unity 
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "ferro-e-aco"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Coque'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Carvão e fluxos de carbonato'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Caldeiras'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Chama'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity +
                e1_4 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "quimicos"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Caldeiras'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Chama'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Fornos de fundição redutivos'>"
            var e1_4 = "<hr><input class='form-control' name='e1_4' type='text' value='Reatores de chama'>"
            var e1_5 = "<hr><input class='form-control' name='e1_5' type='text' value='Reformadores de vapor'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity +
                e1_4 + form_fuel + form_quantity + form_unity +
                e1_5 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "cimento-e-cal"){
            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Forno de tijolo holandês'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Secagem de materiais'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Produção de eletricidade'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "residuos"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Incineradoras'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Caldeiras'>"
            var e1_3 = "<hr><input class='form-control' name='e1_3' type='text' value='Chama'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity +
                e1_3 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "papel-e-celulose"){
            var e1_1 = "<input class='form-control' name='e1_1' type='text' value='Produção de vapor e eletricidade'>"
            var e1_2 = "<input class='form-control' name='e1_2' type='text' value='Emissões derivadas do combustível fóssil da calcinação de carbonato de cálcio em fornos de cal, da secagem de produtos com secadores infravermelhos cheios de combustíveis fósseis'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-de-HCFC22"){
            var e1_1 = "<input class='form-control' name='e1_1' type='text' value='Produção de eletricidade, calor ou vapor'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-semicondutores"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Oxidação de desperdício orgânico volátil'>"
            var e1_2 = "<hr><input class='form-control' name='e1_2' type='text' value='Produção de eletricidade, calor ou vapor'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity +
                e1_2 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-de-servicos"){

            var e1_1 = "<hr><input class='form-control' name='e1_1' type='text' value='Produção de eletricidade, calor ou vapor locais'>"

            $("#emission_one").html(
                e1_1 + form_fuel + form_quantity + form_unity
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

            $(".form-unity").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e1_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
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
var form_unity_two = "<br><input class='form-unity-two form-control' name='emission_unity_two' type='text' placeholder='Unidade'>"
const form_fuel_two =  "<br><select class='form-fuel-two form-control' name='emission_two'>" +
                        "<option value=''>Combustível</option>" +
                        "<option value='nao-aplicavel'>Não Aplicável</option>" +
                        "<option value='gasolina-automotiva'>Gasolina Automotiva (pura)</option>" +
                        "<option value='ole-diesel'>Óleo Diesel (puro)</option>" +
                        "<option value='gas-natural'>Gás Natural Veicular (GNV)</option>" +
                        "<option value='gas-liquefeito-de-petroleo'>Gás Liquefeito de Petróleo (GLP)</option>" +
                        "<option value='querosene-de-aviacao'>Querosene de Aviação</option>" +
                        "<option value='gasolina-de-aviacao'>Gasolina de Aviação</option>" +
                        "<option value='lubrificante'>Lubrificantes</option>" +
                        "<option value='oleo-combustivel'>Óleo Combustível</option>" +
                        "<option value='etanol'>Etanol Hidratado</option>" +
                        "<option value='biodiesel'>Biodiesel (B100)</option>" +
                        "<option value='etanol-anidro'>Etanol Anidro</option>" +
                        "<option value='carvao-vapor-3100-kcal'>Carvão Vapor 3100 kcal / kg</option>" +
                        "<option value='carvao-vapor-3300-kcal'>Carvão Vapor 3300 kcal / kg</option>" +
                        "<option value='carvao-vapor-3700-kcal'>Carvão Vapor 3700 kcal / kg</option>" +
                        "<option value='carvao-vapor-4200-kcal'>Carvão Vapor 4200 kcal / kg</option>" +
                        "<option value='carvao-vapor-4500-kcal'>Carvão Vapor 4500 kcal / kg</option>" +
                        "<option value='carvao-vapor-4700-kcal'>Carvão Vapor 4700 kcal / kg</option>" +
                        "<option value='carvao-vapor-5200-kcal'>Carvão Vapor 5200 kcal / kg</option>" +
                        "<option value='carvao-vapor-5900-kcal'>Carvão Vapor 5900 kcal / kg</option>" +
                        "<option value='carvao-vapor-6000-kcal'>Carvão Vapor 6000 kcal / kg</option>" +
                        "<option value='carvao-vapor-sem-especificacao'>Carvão Vapor sem Especificação</option>" +
                        "<option value='coque-de-carvao-mineral'>Coque de Carvão Mineral</option>" +
                    "</select>"

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        var fuel = []
        var quantity = []
        var unity = []
        var i = 0
        var j = 0
        var k = 0

        if (val == "geracao-de-energia") {
            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Furgões / vans'>"
            var e2_2 = "<hr><input class='form-control' name='e2_2' type='text' value='Caminhão para transporte de combustíveis'>"
            var e2_3 = "<hr><input class='form-control' name='e2_3' type='text' value='Barcos'>"
            
            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two +
                e2_2 + form_fuel_two + form_quantity_two + form_unity_two +
                e2_3 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "oleo-e-gas"){

            var e2_1 = "<hr><input class='form-control' name='' type='text' value='Transporte de matérias primas/produtos/desperdícios brutos'>"
            var e2_2 = "<hr><input class='form-control' name='' type='text' value='Veículos possuídos pela empresa'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two +
                e2_2 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "extracao-mineral-de-carvao" || val == "aluminio"){
            $("#emission_two").html(
                "<div><hr><h4>Pode seguir para a próxima etapa</h4></div>"
            )

//////########################################################################################################################

        }else if (val == "ferro-e-aco"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte local'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "quimicos"){
            
            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de materiais/produtos/desperdício'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "cimento-e-cal"){
            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Operações de pedreiras'>"
            var e2_2 = "<hr><input class='form-control' name='e2_2' type='text' value='Transporte local'>"
            
            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two +
                e2_2 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })


//////########################################################################################################################

        }else if (val == "residuos"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de desperdício/produtos'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "papel-e-celulose"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas, produtos e desperdícios'>"
            var e2_2 = "<hr><input class='form-control' name='e2_2' type='text' value='Operação de equipamento de colheita'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two +
                e2_2 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-de-HCFC22"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas/desperdício/produtos'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-semicondutores"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas/desperdício/produtos'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-de-servicos"){

            var e2_1 = "<hr><input class='form-control' name='e2_1' type='text' value='Transporte de matérias primas, insumos e resíduos'>"

            $("#emission_two").html(
                e2_1 + form_fuel_two + form_quantity_two + form_unity_two
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

            $(".form-unity-two").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e2_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
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

var form_quantity_three = "<br><input class='form-quantity-three form-control' name='emission_quantity_three' type='number' placeholder='Quantidade'>"
var form_unity_three = "<br><input class='form-unity-three form-control' name='emission_unity_three' type='text' placeholder='Unidade'>"
var form_fuel_three = "<br><select class='form-fuel-three form-control' name='emission_three'>" +
                        "<option value=''>Processo / Equipamento</option>" +
                        "<option value='ar-condicionado-central'>Ar condicionado central</option>" +
                        "<option value='ar-condicionado-split'>Ar condicionado split</option>" +
                        "<option value='extintores-de-incendio'>Extintores de incêndio</option>" +
                        "<option value='refrigerador-geladeira-freezer'>Refrigerador, Geladeira, Freezer</option>" +
                    "</select>"

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        var fuel = []
        var quantity = []
        var unity = []
        var i = 0
        var j = 0
        var k = 0

        if (val == "geracao-de-energia") {

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Fuga de CH4 das instalações de transmissão e armazenamento'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Emissões de HFC das instalações de armazenamento de LPG'>"
            var e3_3 = "<hr><input class='form-control' name='e3_3' type='text' value='Emissões de SF6 do equipamento de transmissão e distribuição'>"

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_2 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_3 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1+e3_2+e3_3)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "oleo-e-gas"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Fugas de equipamentos sob pressão'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Tratamento de águas residuais'>"
            var e3_3 = "<hr><input class='form-control' name='e3_3' type='text' value='Captação à superfície'>"

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_2 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_3 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1+e3_2+e3_3)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "extracao-mineral-de-carvao"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Emissões de CH4 de minas de carvão locais e depósitos de carvão'>"

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "aluminio"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Linha de combustível CH4'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='HFC e PFC'>"
            var e3_3 = "<hr><input class='form-control' name='e3_3' type='text' value='SF6 de estufa'>"

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_2 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_3 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1+e3_2+e3_3)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "ferro-e-aco"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='CH4'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='N2O'>" 
            
            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_2 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1+e3_2)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "quimicos"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Uso de HFC'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Fuga do tanque de armazenamento'>"

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_2 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1+e3_2)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "cimento-e-cal"){
            $("#emission_three").html(
                "<div><hr><h4>Pode seguir para a próxima etapa</h4></div>"
            )

//////########################################################################################################################

        }else if (val == "residuos"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Emissões de CH4 e CO2 de desperdício e da decomposição do produto animal'>"

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "papel-e-celulose"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='CH4 e CO2 de desperdício'>" 

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-de-HCFC22"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Uso de HFC'>"  

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three
            )

            $("#calculator").append(e3_1)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-semicondutores"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Processamento de fugas de gás armazenados'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Fuga a partir de contentores'>" 

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_2 + form_fuel_three + form_quantity_three + form_unity_three 
            )

            $("#calculator").append(e3_1+e3_2)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else if (val == "producao-de-servicos"){

            var e3_1 = "<hr><input class='form-control' name='e3_1' type='text' value='Emissões decorrentes do uso de equipamento de refrigeração e de ar condicionado'>"
            var e3_2 = "<hr><input class='form-control' name='e3_2' type='text' value='Fuga a partir de contentores'>" 

            $("#emission_three").html(
                e3_1 + form_fuel_three + form_quantity_three + form_unity_three +
                e3_2 + form_fuel_three + form_quantity_three + form_unity_three 
            )

            $("#calculator").append(e3_1+e3_2)

            $(".form-fuel-three").change(function () {
                fuel[i++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ i +"' type='text' value='"+ fuel[fuel.length - 1] +"'>"
                )
            })

            $(".form-quantity-three").change(function () {
                quantity[j++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ j +"' type='number' value='"+ quantity[quantity.length - 1] +"'>"
                )
            })

            $(".form-unity-three").change(function () {
                unity[k++] = $(this).val()
                $("#calculator").append(
                    "<input class='form-control' name='e3_"+ k +"' type='text' value='"+ unity[unity.length - 1] +"'>"
                )
            })

//////########################################################################################################################

        }else{
            $("#emission_three").html(
                 "<div><hr><h4>É necessário selecionar o setor</h4></div>"
                )
        }
    });
});

//////##########################################################FIM##############################################################\\\\\\