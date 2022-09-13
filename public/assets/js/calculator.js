const common = "<br>" +
                "<select class='form-control' name='fuel'>" +
                    "<option>Selecione o combustível</option>" +
                    "<option value=''>Não Aplicável</option>" +
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
                "</select>" +
                "<br>" +
                "<input class='form-control' name='' type='number' placeholder='Quantidade'>" +
                "<br>" +
                "<input class='form-control' name='' type='text' placeholder='Unidade'>" +
                "<hr>" 

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        if (val == "geracao-de-energia") {
            $("#emission_one").html(
              "<input class='form-control' name='' type='text' value='Cadeiras e turbinas' disabled>" + common +
              "<input class='form-control' name='' type='text' value='Produção de eletricidade' disabled>" + common +
              "<input class='form-control' name='' type='text' value='Produção de calor ou vapor' disabled>" + common +
              "<input class='form-control' name='' type='text' value='Bombas de combustível' disabled>" + common +
              "<input class='form-control' name='' type='text' value='Células de combustível' disabled>" + common +
              "<input class='form-control' name='' type='text' value='Chama' disabled>" + common 
              )
        }else if (val == "oleo-e-gas"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Processamento de aquecedores' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Motores' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Turbinas' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Chamas' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Incineradoras' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Oxidantes' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Produção de eletricidade' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Calor e vapor' disabled>" + common 
            )
        }else if (val == "extracao-mineral-de-carvao"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Combustão à chama e à gás metano' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Uso de explosivos' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Fogos das minas' disabled>" + common 
            )
        }else if (val == "aluminio"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Processamento de bauxita à alumínio' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Cozedura do coque' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Cal' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Precipitado de sódio e uso de combustível' disabled>" + common +
                "<input class='form-control' name='' type='text' value='No local CHP' disabled>" + common 
            )
        }else if (val == "ferro-e-aco"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Coque' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Carvão e fluxos de carbonato' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Caldeiras' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Chama' disabled>" + common
            )
        }else if (val == "quimicos"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Caldeiras' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Chama' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Fornos de fundição redutivos' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Reatores de chama' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Reformadores de vapor' disabled>" + common
            )
        }else if (val == "cimento-e-cal"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Forno de tijolo holandês' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Secagem de materiais' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Produção de eletricidade' disabled>" + common
            )
        }else if (val == "residuos"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Incineradoras' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Caldeiras' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Chama' disabled>" + common
            )
        }else if (val == "papel-e-celulose"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Produção de vapor e eletricidade' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Emissões derivadas do combustível fóssil da calcinação de carbonato de cálcio em fornos de cal, da secagem de produtos com secadores infravermelhos cheios de combustíveis fósseis' disabled>" + common
            )
        }else if (val == "producao-de-HCFC22"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Produção de eletricidade, calor ou vapor' disabled>" + common 
            )
        }else if (val == "producao-semicondutores"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Oxidação de desperdício orgânico volátil' disabled>" + common +
                "<input class='form-control' name='' type='text' value='Produção de eletricidade, calor ou vapor' disabled>" + common 
            )
        }else if (val == "producao-de-servicos"){
            $("#emission_one").html(
                "<input class='form-control' name='' type='text' value='Produção de eletricidade, calor ou vapor locais' disabled>" + common 
            )
        }else{
          $("#emission_one").html("<div></div>")
        }
    });
  });

const common_two = "<br>" +
                    "<select class='form-control' name='fuel'>" +
                        "<option value=''>Não Aplicável</option>" +
                        "<option value=''>Gasolina Automotiva (pura)</option>" +
                        "<option value=''>Óleo Diesel (puro)</option>" +
                        "<option value=''>Gás Natural Veicular (GNV)</option>" +
                        "<option value=''>Gás Liquefeito de Petróleo (GLP)</option>" +
                        "<option value=''>Querosene de Aviação</option>" +
                        "<option value=''>Gasolina de Aviação</option>" +
                        "<option value=''>Lubrificantes</option>" +
                        "<option value=''>Óleo Combustível</option>" +
                        "<option value=''>Etanol Hidratado</option>" +
                        "<option value=''>Biodiesel (B100)</option>" +
                        "<option value=''>Etanol Anidro</option>" +
                        "<option value=''>Carvão Vapor 3100 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 3300 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 3700 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 4200 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 4500 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 4700 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 5200 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 5900 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor 6000 kcal / kg</option>" +
                        "<option value=''>Carvão Vapor sem Especificação</option>" +
                        "<option value=''>Coque de Carvão Mineral</option>" +
                    "</select>" +
                    "<br>" +
                    "<input class='form-control' name='' type='number' placeholder='Quantidade'>" +
                    "<br>" +
                    "<input class='form-control' name='' type='text' placeholder='Unidade'>" +
                    "<hr>" 

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        if (val == "geracao-de-energia") {
            $("#emission_two").html(
              "<input class='form-control' name='' type='text' value='Furgões / vans' disabled>" + common_two +
              "<input class='form-control' name='' type='text' value='Caminhão para transporte de combustíveis' disabled>" + common_two +
              "<input class='form-control' name='' type='text' value='Barcos' disabled>" + common_two
              )
        }else if (val == "oleo-e-gas"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte de matérias primas/produtos/desperdícios brutos' disabled>" + common_two +
                "<input class='form-control' name='' type='text' value='Veículos possuídos pela empresa' disabled>" + common_two
            )
        }else if (val == "extracao-mineral-de-carvao" || val == "aluminio"){
            $("#emission_two").html(
                "<div></div>"
            )
        }else if (val == "ferro-e-aco"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte local' disabled>" + common_two 
            )
        }else if (val == "quimicos"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte de materiais/produtos/desperdício' disabled>" + common_two
            )
        }else if (val == "cimento-e-cal"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Operações de pedreiras' disabled>" + common_two +
                "<input class='form-control' name='' type='text' value='Transporte local' disabled>" + common_two
            )
        }else if (val == "residuos"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte de desperdício/produtos' disabled>" + common_two 
            )
        }else if (val == "papel-e-celulose"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte de matérias primas, produtos e desperdícios' disabled>" + common_two +
                "<input class='form-control' name='' type='text' value='Operação de equipamento de colheita' disabled>" + common_two
            )
        }else if (val == "producao-de-HCFC22"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte de matérias primas/desperdício/produtos' disabled>" + common_two 
            )
        }else if (val == "producao-semicondutores"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte de matérias primas/desperdício/produtos' disabled>" + common_two
            )
        }else if (val == "producao-de-servicos"){
            $("#emission_two").html(
                "<input class='form-control' name='' type='text' value='Transporte de matérias primas, insumos e resíduos' disabled>" + common_two
            )
        }else{
          $("#emission_two").html("<div></div>")
        }
    });
});

const common_three = "<br>" +
                "<select class='form-control' name='process'>" +
                "<option value=''>Ar condicionado central</option>" +
                "<option value=''>Ar condicionado split</option>" +
                "<option value=''>Extintores de incêndio</option>" +
                "<option value=''>Refrigerador, Geladeira, Freezer</option>" +
                "<option value=''>Eletricidade da rede de transmissão</option>" +
                "</select>" +
                "<br>" +
                "<input class='form-control' name='' type='number' placeholder='Quantidade'>" +
                "<br>" +
                "<input class='form-control' name='' type='text' placeholder='Unidade'>" +
                "<hr>" 

$(document).ready(function () {
    $("#sector").change(function () {
        var val = $(this).val();
        if (val == "geracao-de-energia") {
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Fuga de CH4 das instalações de transmissão e armazenamento' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='Emissões de HFC das instalações de armazenamento de LPG' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='Emissões de SF6 do equipamento de transmissão e distribuição' disabled>" + common_three
                )
        }else if (val == "oleo-e-gas"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Fugas de equipamentos sob pressão' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='Tratamento de águas residuais' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='Captação à superfície' disabled>" + common_three 
            )
        }else if (val == "extracao-mineral-de-carvao"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Emissões de CH4 de minas de carvão locais e depósitos de carvão' disabled>" + common_three 
            )
        }else if (val == "aluminio"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Linha de combustível CH4' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='HFC e PFC' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='SF6 de estufa' disabled>" + common_three
            )
        }else if (val == "ferro-e-aco"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='CH4' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='N2O' disabled>" + common_three 

            )
        }else if (val == "quimicos"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Uso de HFC' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='Fuga do tanque de armazenamento' disabled>" + common_three
            )
        }else if (val == "cimento-e-cal"){
            $("#emission_three").html(
                "<div></div>"
            )
        }else if (val == "residuos"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Emissões de CH4 e CO2 de desperdício e da decomposição do produto animal' disabled>" + common_three 
            )
        }else if (val == "papel-e-celulose"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='CH4 e CO2 de desperdício' disabled>" + common_three
            )
        }else if (val == "producao-de-HCFC22"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Uso de HFC' disabled>" + common_three 
            )
        }else if (val == "producao-semicondutores"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Processamento de fugas de gás armazenados' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='Fuga a partir de contentores' disabled>" + common_three
            )
        }else if (val == "producao-de-servicos"){
            $("#emission_three").html(
                "<input class='form-control' name='' type='text' value='Emissões decorrentes do uso de equipamento de refrigeração e de ar condicionado' disabled>" + common_three +
                "<input class='form-control' name='' type='text' value='Fuga a partir de contentores' disabled>" + common_three
            )
        }else{
            $("#emission_three").html("<div></div>")
        }
    });
});