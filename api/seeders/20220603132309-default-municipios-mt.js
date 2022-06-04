/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ACORIZAL",
                    MUN_UF: "MT",
                    MUN_COD: "5100102",
                },
                {
                    MUN_DESC: "ÁGUA BOA",
                    MUN_UF: "MT",
                    MUN_COD: "5100201",
                },
                {
                    MUN_DESC: "ALTA FLORESTA",
                    MUN_UF: "MT",
                    MUN_COD: "5100250",
                },
                {
                    MUN_DESC: "ALTO ARAGUAIA",
                    MUN_UF: "MT",
                    MUN_COD: "5100300",
                },
                {
                    MUN_DESC: "ALTO BOA VISTA",
                    MUN_UF: "MT",
                    MUN_COD: "5100359",
                },
                {
                    MUN_DESC: "ALTO GARÇAS",
                    MUN_UF: "MT",
                    MUN_COD: "5100409",
                },
                {
                    MUN_DESC: "ALTO PARAGUAI",
                    MUN_UF: "MT",
                    MUN_COD: "5100508",
                },
                {
                    MUN_DESC: "ALTO TAQUARI",
                    MUN_UF: "MT",
                    MUN_COD: "5100607",
                },
                {
                    MUN_DESC: "APIACÁS",
                    MUN_UF: "MT",
                    MUN_COD: "5100805",
                },
                {
                    MUN_DESC: "ARAGUAIANA",
                    MUN_UF: "MT",
                    MUN_COD: "5101001",
                },
                {
                    MUN_DESC: "ARAGUAINHA",
                    MUN_UF: "MT",
                    MUN_COD: "5101209",
                },
                {
                    MUN_DESC: "ARAPUTANGA",
                    MUN_UF: "MT",
                    MUN_COD: "5101258",
                },
                {
                    MUN_DESC: "ARENÁPOLIS",
                    MUN_UF: "MT",
                    MUN_COD: "5101308",
                },
                {
                    MUN_DESC: "ARIPUANÃ",
                    MUN_UF: "MT",
                    MUN_COD: "5101407",
                },
                {
                    MUN_DESC: "BARÃO DE MELGAÇO",
                    MUN_UF: "MT",
                    MUN_COD: "5101605",
                },
                {
                    MUN_DESC: "BARRA DO BUGRES",
                    MUN_UF: "MT",
                    MUN_COD: "5101704",
                },
                {
                    MUN_DESC: "BARRA DO GARÇAS",
                    MUN_UF: "MT",
                    MUN_COD: "5101803",
                },
                {
                    MUN_DESC: "BOM JESUS DO ARAGUAIA",
                    MUN_UF: "MT",
                    MUN_COD: "5101852",
                },
                {
                    MUN_DESC: "BRASNORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5101902",
                },
                {
                    MUN_DESC: "CÁCERES",
                    MUN_UF: "MT",
                    MUN_COD: "5102504",
                },
                {
                    MUN_DESC: "CAMPINÁPOLIS",
                    MUN_UF: "MT",
                    MUN_COD: "5102603",
                },
                {
                    MUN_DESC: "CAMPO NOVO DO PARECIS",
                    MUN_UF: "MT",
                    MUN_COD: "5102637",
                },
                {
                    MUN_DESC: "CAMPO VERDE",
                    MUN_UF: "MT",
                    MUN_COD: "5102678",
                },
                {
                    MUN_DESC: "CAMPOS DE JÚLIO",
                    MUN_UF: "MT",
                    MUN_COD: "5102686",
                },
                {
                    MUN_DESC: "CANABRAVA DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5102694",
                },
                {
                    MUN_DESC: "CANARANA",
                    MUN_UF: "MT",
                    MUN_COD: "5102702",
                },
                {
                    MUN_DESC: "CARLINDA",
                    MUN_UF: "MT",
                    MUN_COD: "5102793",
                },
                {
                    MUN_DESC: "CASTANHEIRA",
                    MUN_UF: "MT",
                    MUN_COD: "5102850",
                },
                {
                    MUN_DESC: "CHAPADA DOS GUIMARÃES",
                    MUN_UF: "MT",
                    MUN_COD: "5103007",
                },
                {
                    MUN_DESC: "CLÁUDIA",
                    MUN_UF: "MT",
                    MUN_COD: "5103056",
                },
                {
                    MUN_DESC: "COCALINHO",
                    MUN_UF: "MT",
                    MUN_COD: "5103106",
                },
                {
                    MUN_DESC: "COLÍDER",
                    MUN_UF: "MT",
                    MUN_COD: "5103205",
                },
                {
                    MUN_DESC: "COLNIZA",
                    MUN_UF: "MT",
                    MUN_COD: "5103254",
                },
                {
                    MUN_DESC: "COMODORO",
                    MUN_UF: "MT",
                    MUN_COD: "5103304",
                },
                {
                    MUN_DESC: "CONFRESA",
                    MUN_UF: "MT",
                    MUN_COD: "5103353",
                },
                {
                    MUN_DESC: "CONQUISTA D'OESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5103361",
                },
                {
                    MUN_DESC: "COTRIGUAÇU",
                    MUN_UF: "MT",
                    MUN_COD: "5103379",
                },
                {
                    MUN_DESC: "CUIABÁ",
                    MUN_UF: "MT",
                    MUN_COD: "5103403",
                },
                {
                    MUN_DESC: "CURVELÂNDIA",
                    MUN_UF: "MT",
                    MUN_COD: "5103437",
                },
                {
                    MUN_DESC: "DENISE",
                    MUN_UF: "MT",
                    MUN_COD: "5103452",
                },
                {
                    MUN_DESC: "DIAMANTINO",
                    MUN_UF: "MT",
                    MUN_COD: "5103502",
                },
                {
                    MUN_DESC: "DOM AQUINO",
                    MUN_UF: "MT",
                    MUN_COD: "5103601",
                },
                {
                    MUN_DESC: "FELIZ NATAL",
                    MUN_UF: "MT",
                    MUN_COD: "5103700",
                },
                {
                    MUN_DESC: "FIGUEIRÓPOLIS D'OESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5103809",
                },
                {
                    MUN_DESC: "GAÚCHA DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5103858",
                },
                {
                    MUN_DESC: "GENERAL CARNEIRO",
                    MUN_UF: "MT",
                    MUN_COD: "5103908",
                },
                {
                    MUN_DESC: "GLÓRIA D'OESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5103957",
                },
                {
                    MUN_DESC: "GUARANTÃ DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5104104",
                },
                {
                    MUN_DESC: "GUIRATINGA",
                    MUN_UF: "MT",
                    MUN_COD: "5104203",
                },
                {
                    MUN_DESC: "INDIAVAÍ",
                    MUN_UF: "MT",
                    MUN_COD: "5104500",
                },
                {
                    MUN_DESC: "IPIRANGA DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5104526",
                },
                {
                    MUN_DESC: "ITANHANGÁ",
                    MUN_UF: "MT",
                    MUN_COD: "5104542",
                },
                {
                    MUN_DESC: "ITAÚBA",
                    MUN_UF: "MT",
                    MUN_COD: "5104559",
                },
                {
                    MUN_DESC: "ITIQUIRA",
                    MUN_UF: "MT",
                    MUN_COD: "5104609",
                },
                {
                    MUN_DESC: "JACIARA",
                    MUN_UF: "MT",
                    MUN_COD: "5104807",
                },
                {
                    MUN_DESC: "JANGADA",
                    MUN_UF: "MT",
                    MUN_COD: "5104906",
                },
                {
                    MUN_DESC: "JAURU",
                    MUN_UF: "MT",
                    MUN_COD: "5105002",
                },
                {
                    MUN_DESC: "JUARA",
                    MUN_UF: "MT",
                    MUN_COD: "5105101",
                },
                {
                    MUN_DESC: "JUÍNA",
                    MUN_UF: "MT",
                    MUN_COD: "5105150",
                },
                {
                    MUN_DESC: "JURUENA",
                    MUN_UF: "MT",
                    MUN_COD: "5105176",
                },
                {
                    MUN_DESC: "JUSCIMEIRA",
                    MUN_UF: "MT",
                    MUN_COD: "5105200",
                },
                {
                    MUN_DESC: "LAMBARI D'OESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5105234",
                },
                {
                    MUN_DESC: "LUCAS DO RIO VERDE",
                    MUN_UF: "MT",
                    MUN_COD: "5105259",
                },
                {
                    MUN_DESC: "LUCIARA",
                    MUN_UF: "MT",
                    MUN_COD: "5105309",
                },
                {
                    MUN_DESC: "MARCELÂNDIA",
                    MUN_UF: "MT",
                    MUN_COD: "5105580",
                },
                {
                    MUN_DESC: "MATUPÁ",
                    MUN_UF: "MT",
                    MUN_COD: "5105606",
                },
                {
                    MUN_DESC: "MIRASSOL D'OESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5105622",
                },
                {
                    MUN_DESC: "NOBRES",
                    MUN_UF: "MT",
                    MUN_COD: "5105903",
                },
                {
                    MUN_DESC: "NORTELÂNDIA",
                    MUN_UF: "MT",
                    MUN_COD: "5106000",
                },
                {
                    MUN_DESC: "NOSSA SENHORA DO LIVRAMENTO",
                    MUN_UF: "MT",
                    MUN_COD: "5106109",
                },
                {
                    MUN_DESC: "NOVA BANDEIRANTES",
                    MUN_UF: "MT",
                    MUN_COD: "5106158",
                },
                {
                    MUN_DESC: "NOVA BRASILÂNDIA",
                    MUN_UF: "MT",
                    MUN_COD: "5106208",
                },
                {
                    MUN_DESC: "NOVA CANAÃ DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5106216",
                },
                {
                    MUN_DESC: "NOVA GUARITA",
                    MUN_UF: "MT",
                    MUN_COD: "5108808",
                },
                {
                    MUN_DESC: "NOVA LACERDA",
                    MUN_UF: "MT",
                    MUN_COD: "5106182",
                },
                {
                    MUN_DESC: "NOVA MARILÂNDIA",
                    MUN_UF: "MT",
                    MUN_COD: "5108857",
                },
                {
                    MUN_DESC: "NOVA MARINGÁ",
                    MUN_UF: "MT",
                    MUN_COD: "5108907",
                },
                {
                    MUN_DESC: "NOVA MONTE VERDE",
                    MUN_UF: "MT",
                    MUN_COD: "5108956",
                },
                {
                    MUN_DESC: "NOVA MUTUM",
                    MUN_UF: "MT",
                    MUN_COD: "5106224",
                },
                {
                    MUN_DESC: "NOVA NAZARÉ",
                    MUN_UF: "MT",
                    MUN_COD: "5106174",
                },
                {
                    MUN_DESC: "NOVA OLÍMPIA",
                    MUN_UF: "MT",
                    MUN_COD: "5106232",
                },
                {
                    MUN_DESC: "NOVA SANTA HELENA",
                    MUN_UF: "MT",
                    MUN_COD: "5106190",
                },
                {
                    MUN_DESC: "NOVA UBIRATÃ",
                    MUN_UF: "MT",
                    MUN_COD: "5106240",
                },
                {
                    MUN_DESC: "NOVA XAVANTINA",
                    MUN_UF: "MT",
                    MUN_COD: "5106257",
                },
                {
                    MUN_DESC: "NOVO HORIZONTE DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5106273",
                },
                {
                    MUN_DESC: "NOVO MUNDO",
                    MUN_UF: "MT",
                    MUN_COD: "5106265",
                },
                {
                    MUN_DESC: "NOVO SANTO ANTÔNIO",
                    MUN_UF: "MT",
                    MUN_COD: "5106315",
                },
                {
                    MUN_DESC: "NOVO SÃO JOAQUIM",
                    MUN_UF: "MT",
                    MUN_COD: "5106281",
                },
                {
                    MUN_DESC: "PARANAÍTA",
                    MUN_UF: "MT",
                    MUN_COD: "5106299",
                },
                {
                    MUN_DESC: "PARANATINGA",
                    MUN_UF: "MT",
                    MUN_COD: "5106307",
                },
                {
                    MUN_DESC: "PEDRA PRETA",
                    MUN_UF: "MT",
                    MUN_COD: "5106372",
                },
                {
                    MUN_DESC: "PEIXOTO DE AZEVEDO",
                    MUN_UF: "MT",
                    MUN_COD: "5106422",
                },
                {
                    MUN_DESC: "PLANALTO DA SERRA",
                    MUN_UF: "MT",
                    MUN_COD: "5106455",
                },
                {
                    MUN_DESC: "POCONÉ",
                    MUN_UF: "MT",
                    MUN_COD: "5106505",
                },
                {
                    MUN_DESC: "PONTAL DO ARAGUAIA",
                    MUN_UF: "MT",
                    MUN_COD: "5106653",
                },
                {
                    MUN_DESC: "PONTE BRANCA",
                    MUN_UF: "MT",
                    MUN_COD: "5106703",
                },
                {
                    MUN_DESC: "PONTES E LACERDA",
                    MUN_UF: "MT",
                    MUN_COD: "5106752",
                },
                {
                    MUN_DESC: "PORTO ALEGRE DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5106778",
                },
                {
                    MUN_DESC: "PORTO DOS GAÚCHOS",
                    MUN_UF: "MT",
                    MUN_COD: "5106802",
                },
                {
                    MUN_DESC: "PORTO ESPERIDIÃO",
                    MUN_UF: "MT",
                    MUN_COD: "5106828",
                },
                {
                    MUN_DESC: "PORTO ESTRELA",
                    MUN_UF: "MT",
                    MUN_COD: "5106851",
                },
                {
                    MUN_DESC: "POXORÉU",
                    MUN_UF: "MT",
                    MUN_COD: "5107008",
                },
                {
                    MUN_DESC: "PRIMAVERA DO LESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5107040",
                },
                {
                    MUN_DESC: "QUERÊNCIA",
                    MUN_UF: "MT",
                    MUN_COD: "5107065",
                },
                {
                    MUN_DESC: "RESERVA DO CABAÇAL",
                    MUN_UF: "MT",
                    MUN_COD: "5107156",
                },
                {
                    MUN_DESC: "RIBEIRÃO CASCALHEIRA",
                    MUN_UF: "MT",
                    MUN_COD: "5107180",
                },
                {
                    MUN_DESC: "RIBEIRÃOZINHO",
                    MUN_UF: "MT",
                    MUN_COD: "5107198",
                },
                {
                    MUN_DESC: "RIO BRANCO",
                    MUN_UF: "MT",
                    MUN_COD: "5107206",
                },
                {
                    MUN_DESC: "RONDOLÂNDIA",
                    MUN_UF: "MT",
                    MUN_COD: "5107578",
                },
                {
                    MUN_DESC: "RONDONÓPOLIS",
                    MUN_UF: "MT",
                    MUN_COD: "5107602",
                },
                {
                    MUN_DESC: "ROSÁRIO OESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5107701",
                },
                {
                    MUN_DESC: "SALTO DO CÉU",
                    MUN_UF: "MT",
                    MUN_COD: "5107750",
                },
                {
                    MUN_DESC: "SANTA CARMEM",
                    MUN_UF: "MT",
                    MUN_COD: "5107248",
                },
                {
                    MUN_DESC: "SANTA CRUZ DO XINGU",
                    MUN_UF: "MT",
                    MUN_COD: "5107743",
                },
                {
                    MUN_DESC: "SANTA RITA DO TRIVELATO",
                    MUN_UF: "MT",
                    MUN_COD: "5107768",
                },
                {
                    MUN_DESC: "SANTA TEREZINHA",
                    MUN_UF: "MT",
                    MUN_COD: "5107776",
                },
                {
                    MUN_DESC: "SANTO AFONSO",
                    MUN_UF: "MT",
                    MUN_COD: "5107263",
                },
                {
                    MUN_DESC: "SANTO ANTÔNIO DO LESTE",
                    MUN_UF: "MT",
                    MUN_COD: "5107792",
                },
                {
                    MUN_DESC: "SANTO ANTÔNIO DO LEVERGER",
                    MUN_UF: "MT",
                    MUN_COD: "5107800",
                },
                {
                    MUN_DESC: "SÃO FÉLIX DO ARAGUAIA",
                    MUN_UF: "MT",
                    MUN_COD: "5107859",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DO POVO",
                    MUN_UF: "MT",
                    MUN_COD: "5107297",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DO RIO CLARO",
                    MUN_UF: "MT",
                    MUN_COD: "5107305",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DO XINGU",
                    MUN_UF: "MT",
                    MUN_COD: "5107354",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DOS QUATRO MARCOS",
                    MUN_UF: "MT",
                    MUN_COD: "5107107",
                },
                {
                    MUN_DESC: "SÃO PEDRO DA CIPA",
                    MUN_UF: "MT",
                    MUN_COD: "5107404",
                },
                {
                    MUN_DESC: "SAPEZAL",
                    MUN_UF: "MT",
                    MUN_COD: "5107875",
                },
                {
                    MUN_DESC: "SERRA NOVA DOURADA",
                    MUN_UF: "MT",
                    MUN_COD: "5107883",
                },
                {
                    MUN_DESC: "SINOP",
                    MUN_UF: "MT",
                    MUN_COD: "5107909",
                },
                {
                    MUN_DESC: "SORRISO",
                    MUN_UF: "MT",
                    MUN_COD: "5107925",
                },
                {
                    MUN_DESC: "TABAPORÃ",
                    MUN_UF: "MT",
                    MUN_COD: "5107941",
                },
                {
                    MUN_DESC: "TANGARÁ DA SERRA",
                    MUN_UF: "MT",
                    MUN_COD: "5107958",
                },
                {
                    MUN_DESC: "TAPURAH",
                    MUN_UF: "MT",
                    MUN_COD: "5108006",
                },
                {
                    MUN_DESC: "TERRA NOVA DO NORTE",
                    MUN_UF: "MT",
                    MUN_COD: "5108055",
                },
                {
                    MUN_DESC: "TESOURO",
                    MUN_UF: "MT",
                    MUN_COD: "5108105",
                },
                {
                    MUN_DESC: "TORIXORÉU",
                    MUN_UF: "MT",
                    MUN_COD: "5108204",
                },
                {
                    MUN_DESC: "UNIÃO DO SUL",
                    MUN_UF: "MT",
                    MUN_COD: "5108303",
                },
                {
                    MUN_DESC: "VALE DE SÃO DOMINGOS",
                    MUN_UF: "MT",
                    MUN_COD: "5108352",
                },
                {
                    MUN_DESC: "VÁRZEA GRANDE",
                    MUN_UF: "MT",
                    MUN_COD: "5108402",
                },
                {
                    MUN_DESC: "VERA",
                    MUN_UF: "MT",
                    MUN_COD: "5108501",
                },
                {
                    MUN_DESC: "VILA BELA DA SANTÍSSIMA TRINDADE",
                    MUN_UF: "MT",
                    MUN_COD: "5105507",
                },
                {
                    MUN_DESC: "VILA RICA",
                    MUN_UF: "MT",
                    MUN_COD: "5108600",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "MT" }, {});
    },
};