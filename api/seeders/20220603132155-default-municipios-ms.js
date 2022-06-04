/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ÁGUA CLARA",
                    MUN_UF: "MS",
                    MUN_COD: "5000203",
                },
                {
                    MUN_DESC: "ALCINÓPOLIS",
                    MUN_UF: "MS",
                    MUN_COD: "5000252",
                },
                {
                    MUN_DESC: "AMAMBAI",
                    MUN_UF: "MS",
                    MUN_COD: "5000609",
                },
                {
                    MUN_DESC: "ANASTÁCIO",
                    MUN_UF: "MS",
                    MUN_COD: "5000708",
                },
                {
                    MUN_DESC: "ANAURILÂNDIA",
                    MUN_UF: "MS",
                    MUN_COD: "5000807",
                },
                {
                    MUN_DESC: "ANGÉLICA",
                    MUN_UF: "MS",
                    MUN_COD: "5000856",
                },
                {
                    MUN_DESC: "ANTÔNIO JOÃO",
                    MUN_UF: "MS",
                    MUN_COD: "5000906",
                },
                {
                    MUN_DESC: "APARECIDA DO TABOADO",
                    MUN_UF: "MS",
                    MUN_COD: "5001003",
                },
                {
                    MUN_DESC: "AQUIDAUANA",
                    MUN_UF: "MS",
                    MUN_COD: "5001102",
                },
                {
                    MUN_DESC: "ARAL MOREIRA",
                    MUN_UF: "MS",
                    MUN_COD: "5001243",
                },
                {
                    MUN_DESC: "BANDEIRANTES",
                    MUN_UF: "MS",
                    MUN_COD: "5001508",
                },
                {
                    MUN_DESC: "BATAGUASSU",
                    MUN_UF: "MS",
                    MUN_COD: "5001904",
                },
                {
                    MUN_DESC: "BATAYPORÃ",
                    MUN_UF: "MS",
                    MUN_COD: "5002001",
                },
                {
                    MUN_DESC: "BELA VISTA",
                    MUN_UF: "MS",
                    MUN_COD: "5002100",
                },
                {
                    MUN_DESC: "BODOQUENA",
                    MUN_UF: "MS",
                    MUN_COD: "5002159",
                },
                {
                    MUN_DESC: "BONITO",
                    MUN_UF: "MS",
                    MUN_COD: "5002209",
                },
                {
                    MUN_DESC: "BRASILÂNDIA",
                    MUN_UF: "MS",
                    MUN_COD: "5002308",
                },
                {
                    MUN_DESC: "CAARAPÓ",
                    MUN_UF: "MS",
                    MUN_COD: "5002407",
                },
                {
                    MUN_DESC: "CAMAPUÃ",
                    MUN_UF: "MS",
                    MUN_COD: "5002605",
                },
                {
                    MUN_DESC: "CAMPO GRANDE",
                    MUN_UF: "MS",
                    MUN_COD: "5002704",
                },
                {
                    MUN_DESC: "CARACOL",
                    MUN_UF: "MS",
                    MUN_COD: "5002803",
                },
                {
                    MUN_DESC: "CASSILÂNDIA",
                    MUN_UF: "MS",
                    MUN_COD: "5002902",
                },
                {
                    MUN_DESC: "CHAPADÃO DO SUL",
                    MUN_UF: "MS",
                    MUN_COD: "5002951",
                },
                {
                    MUN_DESC: "CORGUINHO",
                    MUN_UF: "MS",
                    MUN_COD: "5003108",
                },
                {
                    MUN_DESC: "CORONEL SAPUCAIA",
                    MUN_UF: "MS",
                    MUN_COD: "5003157",
                },
                {
                    MUN_DESC: "CORUMBÁ",
                    MUN_UF: "MS",
                    MUN_COD: "5003207",
                },
                {
                    MUN_DESC: "COSTA RICA",
                    MUN_UF: "MS",
                    MUN_COD: "5003256",
                },
                {
                    MUN_DESC: "COXIM",
                    MUN_UF: "MS",
                    MUN_COD: "5003306",
                },
                {
                    MUN_DESC: "DEODÁPOLIS",
                    MUN_UF: "MS",
                    MUN_COD: "5003454",
                },
                {
                    MUN_DESC: "DOIS IRMÃOS DO BURITI",
                    MUN_UF: "MS",
                    MUN_COD: "5003488",
                },
                {
                    MUN_DESC: "DOURADINA",
                    MUN_UF: "MS",
                    MUN_COD: "5003504",
                },
                {
                    MUN_DESC: "DOURADOS",
                    MUN_UF: "MS",
                    MUN_COD: "5003702",
                },
                {
                    MUN_DESC: "ELDORADO",
                    MUN_UF: "MS",
                    MUN_COD: "5003751",
                },
                {
                    MUN_DESC: "FÁTIMA DO SUL",
                    MUN_UF: "MS",
                    MUN_COD: "5003801",
                },
                {
                    MUN_DESC: "FIGUEIRÃO",
                    MUN_UF: "MS",
                    MUN_COD: "5003900",
                },
                {
                    MUN_DESC: "GLÓRIA DE DOURADOS",
                    MUN_UF: "MS",
                    MUN_COD: "5004007",
                },
                {
                    MUN_DESC: "GUIA LOPES DA LAGUNA",
                    MUN_UF: "MS",
                    MUN_COD: "5004106",
                },
                {
                    MUN_DESC: "IGUATEMI",
                    MUN_UF: "MS",
                    MUN_COD: "5004304",
                },
                {
                    MUN_DESC: "INOCÊNCIA",
                    MUN_UF: "MS",
                    MUN_COD: "5004403",
                },
                {
                    MUN_DESC: "ITAPORÃ",
                    MUN_UF: "MS",
                    MUN_COD: "5004502",
                },
                {
                    MUN_DESC: "ITAQUIRAÍ",
                    MUN_UF: "MS",
                    MUN_COD: "5004601",
                },
                {
                    MUN_DESC: "IVINHEMA",
                    MUN_UF: "MS",
                    MUN_COD: "5004700",
                },
                {
                    MUN_DESC: "JAPORÃ",
                    MUN_UF: "MS",
                    MUN_COD: "5004809",
                },
                {
                    MUN_DESC: "JARAGUARI",
                    MUN_UF: "MS",
                    MUN_COD: "5004908",
                },
                {
                    MUN_DESC: "JARDIM",
                    MUN_UF: "MS",
                    MUN_COD: "5005004",
                },
                {
                    MUN_DESC: "JATEÍ",
                    MUN_UF: "MS",
                    MUN_COD: "5005103",
                },
                {
                    MUN_DESC: "JUTI",
                    MUN_UF: "MS",
                    MUN_COD: "5005152",
                },
                {
                    MUN_DESC: "LADÁRIO",
                    MUN_UF: "MS",
                    MUN_COD: "5005202",
                },
                {
                    MUN_DESC: "LAGUNA CARAPÃ",
                    MUN_UF: "MS",
                    MUN_COD: "5005251",
                },
                {
                    MUN_DESC: "MARACAJU",
                    MUN_UF: "MS",
                    MUN_COD: "5005400",
                },
                {
                    MUN_DESC: "MIRANDA",
                    MUN_UF: "MS",
                    MUN_COD: "5005608",
                },
                {
                    MUN_DESC: "MUNDO NOVO",
                    MUN_UF: "MS",
                    MUN_COD: "5005681",
                },
                {
                    MUN_DESC: "NAVIRAÍ",
                    MUN_UF: "MS",
                    MUN_COD: "5005707",
                },
                {
                    MUN_DESC: "NIOAQUE",
                    MUN_UF: "MS",
                    MUN_COD: "5005806",
                },
                {
                    MUN_DESC: "NOVA ALVORADA DO SUL",
                    MUN_UF: "MS",
                    MUN_COD: "5006002",
                },
                {
                    MUN_DESC: "NOVA ANDRADINA",
                    MUN_UF: "MS",
                    MUN_COD: "5006200",
                },
                {
                    MUN_DESC: "NOVO HORIZONTE DO SUL",
                    MUN_UF: "MS",
                    MUN_COD: "5006259",
                },
                {
                    MUN_DESC: "PARAÍSO DAS ÁGUAS",
                    MUN_UF: "MS",
                    MUN_COD: "5006275",
                },
                {
                    MUN_DESC: "PARANAÍBA",
                    MUN_UF: "MS",
                    MUN_COD: "5006309",
                },
                {
                    MUN_DESC: "PARANHOS",
                    MUN_UF: "MS",
                    MUN_COD: "5006358",
                },
                {
                    MUN_DESC: "PEDRO GOMES",
                    MUN_UF: "MS",
                    MUN_COD: "5006408",
                },
                {
                    MUN_DESC: "PONTA PORÃ",
                    MUN_UF: "MS",
                    MUN_COD: "5006606",
                },
                {
                    MUN_DESC: "PORTO MURTINHO",
                    MUN_UF: "MS",
                    MUN_COD: "5006903",
                },
                {
                    MUN_DESC: "RIBAS DO RIO PARDO",
                    MUN_UF: "MS",
                    MUN_COD: "5007109",
                },
                {
                    MUN_DESC: "RIO BRILHANTE",
                    MUN_UF: "MS",
                    MUN_COD: "5007208",
                },
                {
                    MUN_DESC: "RIO NEGRO",
                    MUN_UF: "MS",
                    MUN_COD: "5007307",
                },
                {
                    MUN_DESC: "RIO VERDE DE MATO GROSSO",
                    MUN_UF: "MS",
                    MUN_COD: "5007406",
                },
                {
                    MUN_DESC: "ROCHEDO",
                    MUN_UF: "MS",
                    MUN_COD: "5007505",
                },
                {
                    MUN_DESC: "SANTA RITA DO PARDO",
                    MUN_UF: "MS",
                    MUN_COD: "5007554",
                },
                {
                    MUN_DESC: "SÃO GABRIEL DO OESTE",
                    MUN_UF: "MS",
                    MUN_COD: "5007695",
                },
                {
                    MUN_DESC: "SELVÍRIA",
                    MUN_UF: "MS",
                    MUN_COD: "5007802",
                },
                {
                    MUN_DESC: "SETE QUEDAS",
                    MUN_UF: "MS",
                    MUN_COD: "5007703",
                },
                {
                    MUN_DESC: "SIDROLÂNDIA",
                    MUN_UF: "MS",
                    MUN_COD: "5007901",
                },
                {
                    MUN_DESC: "SONORA",
                    MUN_UF: "MS",
                    MUN_COD: "5007935",
                },
                {
                    MUN_DESC: "TACURU",
                    MUN_UF: "MS",
                    MUN_COD: "5007950",
                },
                {
                    MUN_DESC: "TAQUARUSSU",
                    MUN_UF: "MS",
                    MUN_COD: "5007976",
                },
                {
                    MUN_DESC: "TERENOS",
                    MUN_UF: "MS",
                    MUN_COD: "5008008",
                },
                {
                    MUN_DESC: "TRÊS LAGOAS",
                    MUN_UF: "MS",
                    MUN_COD: "5008305",
                },
                {
                    MUN_DESC: "VICENTINA",
                    MUN_UF: "MS",
                    MUN_COD: "5008404",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "MS" }, {});
    },
};