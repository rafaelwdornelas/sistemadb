/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ANGRA DOS REIS",
                    MUN_UF: "RJ",
                    MUN_COD: "3300100",
                },
                {
                    MUN_DESC: "APERIBÉ",
                    MUN_UF: "RJ",
                    MUN_COD: "3300159",
                },
                {
                    MUN_DESC: "ARARUAMA",
                    MUN_UF: "RJ",
                    MUN_COD: "3300209",
                },
                {
                    MUN_DESC: "AREAL",
                    MUN_UF: "RJ",
                    MUN_COD: "3300225",
                },
                {
                    MUN_DESC: "ARMAÇÃO DOS BÚZIOS",
                    MUN_UF: "RJ",
                    MUN_COD: "3300233",
                },
                {
                    MUN_DESC: "ARRAIAL DO CABO",
                    MUN_UF: "RJ",
                    MUN_COD: "3300258",
                },
                {
                    MUN_DESC: "BARRA DO PIRAÍ",
                    MUN_UF: "RJ",
                    MUN_COD: "3300308",
                },
                {
                    MUN_DESC: "BARRA MANSA",
                    MUN_UF: "RJ",
                    MUN_COD: "3300407",
                },
                {
                    MUN_DESC: "BELFORD ROXO",
                    MUN_UF: "RJ",
                    MUN_COD: "3300456",
                },
                {
                    MUN_DESC: "BOM JARDIM",
                    MUN_UF: "RJ",
                    MUN_COD: "3300506",
                },
                {
                    MUN_DESC: "BOM JESUS DO ITABAPOANA",
                    MUN_UF: "RJ",
                    MUN_COD: "3300605",
                },
                {
                    MUN_DESC: "CABO FRIO",
                    MUN_UF: "RJ",
                    MUN_COD: "3300704",
                },
                {
                    MUN_DESC: "CACHOEIRAS DE MACACU",
                    MUN_UF: "RJ",
                    MUN_COD: "3300803",
                },
                {
                    MUN_DESC: "CAMBUCI",
                    MUN_UF: "RJ",
                    MUN_COD: "3300902",
                },
                {
                    MUN_DESC: "CAMPOS DOS GOYTACAZES",
                    MUN_UF: "RJ",
                    MUN_COD: "3301009",
                },
                {
                    MUN_DESC: "CANTAGALO",
                    MUN_UF: "RJ",
                    MUN_COD: "3301108",
                },
                {
                    MUN_DESC: "CARAPEBUS",
                    MUN_UF: "RJ",
                    MUN_COD: "3300936",
                },
                {
                    MUN_DESC: "CARDOSO MOREIRA",
                    MUN_UF: "RJ",
                    MUN_COD: "3301157",
                },
                {
                    MUN_DESC: "CARMO",
                    MUN_UF: "RJ",
                    MUN_COD: "3301207",
                },
                {
                    MUN_DESC: "CASIMIRO DE ABREU",
                    MUN_UF: "RJ",
                    MUN_COD: "3301306",
                },
                {
                    MUN_DESC: "COMENDADOR LEVY GASPARIAN",
                    MUN_UF: "RJ",
                    MUN_COD: "3300951",
                },
                {
                    MUN_DESC: "CONCEIÇÃO DE MACABU",
                    MUN_UF: "RJ",
                    MUN_COD: "3301405",
                },
                {
                    MUN_DESC: "CORDEIRO",
                    MUN_UF: "RJ",
                    MUN_COD: "3301504",
                },
                {
                    MUN_DESC: "DUAS BARRAS",
                    MUN_UF: "RJ",
                    MUN_COD: "3301603",
                },
                {
                    MUN_DESC: "DUQUE DE CAXIAS",
                    MUN_UF: "RJ",
                    MUN_COD: "3301702",
                },
                {
                    MUN_DESC: "ENGENHEIRO PAULO DE FRONTIN",
                    MUN_UF: "RJ",
                    MUN_COD: "3301801",
                },
                {
                    MUN_DESC: "GUAPIMIRIM",
                    MUN_UF: "RJ",
                    MUN_COD: "3301850",
                },
                {
                    MUN_DESC: "IGUABA GRANDE",
                    MUN_UF: "RJ",
                    MUN_COD: "3301876",
                },
                {
                    MUN_DESC: "ITABORAÍ",
                    MUN_UF: "RJ",
                    MUN_COD: "3301900",
                },
                {
                    MUN_DESC: "ITAGUAÍ",
                    MUN_UF: "RJ",
                    MUN_COD: "3302007",
                },
                {
                    MUN_DESC: "ITALVA",
                    MUN_UF: "RJ",
                    MUN_COD: "3302056",
                },
                {
                    MUN_DESC: "ITAOCARA",
                    MUN_UF: "RJ",
                    MUN_COD: "3302106",
                },
                {
                    MUN_DESC: "ITAPERUNA",
                    MUN_UF: "RJ",
                    MUN_COD: "3302205",
                },
                {
                    MUN_DESC: "ITATIAIA",
                    MUN_UF: "RJ",
                    MUN_COD: "3302254",
                },
                {
                    MUN_DESC: "JAPERI",
                    MUN_UF: "RJ",
                    MUN_COD: "3302270",
                },
                {
                    MUN_DESC: "LAJE DO MURIAÉ",
                    MUN_UF: "RJ",
                    MUN_COD: "3302304",
                },
                {
                    MUN_DESC: "MACAÉ",
                    MUN_UF: "RJ",
                    MUN_COD: "3302403",
                },
                {
                    MUN_DESC: "MACUCO",
                    MUN_UF: "RJ",
                    MUN_COD: "3302452",
                },
                {
                    MUN_DESC: "MAGÉ",
                    MUN_UF: "RJ",
                    MUN_COD: "3302502",
                },
                {
                    MUN_DESC: "MANGARATIBA",
                    MUN_UF: "RJ",
                    MUN_COD: "3302601",
                },
                {
                    MUN_DESC: "MARICÁ",
                    MUN_UF: "RJ",
                    MUN_COD: "3302700",
                },
                {
                    MUN_DESC: "MENDES",
                    MUN_UF: "RJ",
                    MUN_COD: "3302809",
                },
                {
                    MUN_DESC: "MESQUITA",
                    MUN_UF: "RJ",
                    MUN_COD: "3302858",
                },
                {
                    MUN_DESC: "MIGUEL PEREIRA",
                    MUN_UF: "RJ",
                    MUN_COD: "3302908",
                },
                {
                    MUN_DESC: "MIRACEMA",
                    MUN_UF: "RJ",
                    MUN_COD: "3303005",
                },
                {
                    MUN_DESC: "NATIVIDADE",
                    MUN_UF: "RJ",
                    MUN_COD: "3303104",
                },
                {
                    MUN_DESC: "NILÓPOLIS",
                    MUN_UF: "RJ",
                    MUN_COD: "3303203",
                },
                {
                    MUN_DESC: "NITERÓI",
                    MUN_UF: "RJ",
                    MUN_COD: "3303302",
                },
                {
                    MUN_DESC: "NOVA FRIBURGO",
                    MUN_UF: "RJ",
                    MUN_COD: "3303401",
                },
                {
                    MUN_DESC: "NOVA IGUAÇU",
                    MUN_UF: "RJ",
                    MUN_COD: "3303500",
                },
                {
                    MUN_DESC: "PARACAMBI",
                    MUN_UF: "RJ",
                    MUN_COD: "3303609",
                },
                {
                    MUN_DESC: "PARAÍBA DO SUL",
                    MUN_UF: "RJ",
                    MUN_COD: "3303708",
                },
                {
                    MUN_DESC: "PARATY",
                    MUN_UF: "RJ",
                    MUN_COD: "3303807",
                },
                {
                    MUN_DESC: "PATY DO ALFERES",
                    MUN_UF: "RJ",
                    MUN_COD: "3303856",
                },
                {
                    MUN_DESC: "PETRÓPOLIS",
                    MUN_UF: "RJ",
                    MUN_COD: "3303906",
                },
                {
                    MUN_DESC: "PINHEIRAL",
                    MUN_UF: "RJ",
                    MUN_COD: "3303955",
                },
                {
                    MUN_DESC: "PIRAÍ",
                    MUN_UF: "RJ",
                    MUN_COD: "3304003",
                },
                {
                    MUN_DESC: "PORCIÚNCULA",
                    MUN_UF: "RJ",
                    MUN_COD: "3304102",
                },
                {
                    MUN_DESC: "PORTO REAL",
                    MUN_UF: "RJ",
                    MUN_COD: "3304110",
                },
                {
                    MUN_DESC: "QUATIS",
                    MUN_UF: "RJ",
                    MUN_COD: "3304128",
                },
                {
                    MUN_DESC: "QUEIMADOS",
                    MUN_UF: "RJ",
                    MUN_COD: "3304144",
                },
                {
                    MUN_DESC: "QUISSAMÃ",
                    MUN_UF: "RJ",
                    MUN_COD: "3304151",
                },
                {
                    MUN_DESC: "RESENDE",
                    MUN_UF: "RJ",
                    MUN_COD: "3304201",
                },
                {
                    MUN_DESC: "RIO BONITO",
                    MUN_UF: "RJ",
                    MUN_COD: "3304300",
                },
                {
                    MUN_DESC: "RIO CLARO",
                    MUN_UF: "RJ",
                    MUN_COD: "3304409",
                },
                {
                    MUN_DESC: "RIO DAS FLORES",
                    MUN_UF: "RJ",
                    MUN_COD: "3304508",
                },
                {
                    MUN_DESC: "RIO DAS OSTRAS",
                    MUN_UF: "RJ",
                    MUN_COD: "3304524",
                },
                {
                    MUN_DESC: "RIO DE JANEIRO",
                    MUN_UF: "RJ",
                    MUN_COD: "3304557",
                },
                {
                    MUN_DESC: "SANTA MARIA MADALENA",
                    MUN_UF: "RJ",
                    MUN_COD: "3304607",
                },
                {
                    MUN_DESC: "SANTO ANTÔNIO DE PÁDUA",
                    MUN_UF: "RJ",
                    MUN_COD: "3304706",
                },
                {
                    MUN_DESC: "SÃO FIDÉLIS",
                    MUN_UF: "RJ",
                    MUN_COD: "3304805",
                },
                {
                    MUN_DESC: "SÃO FRANCISCO DE ITABAPOANA",
                    MUN_UF: "RJ",
                    MUN_COD: "3304755",
                },
                {
                    MUN_DESC: "SÃO GONÇALO",
                    MUN_UF: "RJ",
                    MUN_COD: "3304904",
                },
                {
                    MUN_DESC: "SÃO JOÃO DA BARRA",
                    MUN_UF: "RJ",
                    MUN_COD: "3305000",
                },
                {
                    MUN_DESC: "SÃO JOÃO DE MERITI",
                    MUN_UF: "RJ",
                    MUN_COD: "3305109",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DE UBÁ",
                    MUN_UF: "RJ",
                    MUN_COD: "3305133",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DO VALE DO RIO PRETO",
                    MUN_UF: "RJ",
                    MUN_COD: "3305158",
                },
                {
                    MUN_DESC: "SÃO PEDRO DA ALDEIA",
                    MUN_UF: "RJ",
                    MUN_COD: "3305208",
                },
                {
                    MUN_DESC: "SÃO SEBASTIÃO DO ALTO",
                    MUN_UF: "RJ",
                    MUN_COD: "3305307",
                },
                {
                    MUN_DESC: "SAPUCAIA",
                    MUN_UF: "RJ",
                    MUN_COD: "3305406",
                },
                {
                    MUN_DESC: "SAQUAREMA",
                    MUN_UF: "RJ",
                    MUN_COD: "3305505",
                },
                {
                    MUN_DESC: "SEROPÉDICA",
                    MUN_UF: "RJ",
                    MUN_COD: "3305554",
                },
                {
                    MUN_DESC: "SILVA JARDIM",
                    MUN_UF: "RJ",
                    MUN_COD: "3305604",
                },
                {
                    MUN_DESC: "SUMIDOURO",
                    MUN_UF: "RJ",
                    MUN_COD: "3305703",
                },
                {
                    MUN_DESC: "TANGUÁ",
                    MUN_UF: "RJ",
                    MUN_COD: "3305752",
                },
                {
                    MUN_DESC: "TERESÓPOLIS",
                    MUN_UF: "RJ",
                    MUN_COD: "3305802",
                },
                {
                    MUN_DESC: "TRAJANO DE MORAES",
                    MUN_UF: "RJ",
                    MUN_COD: "3305901",
                },
                {
                    MUN_DESC: "TRÊS RIOS",
                    MUN_UF: "RJ",
                    MUN_COD: "3306008",
                },
                {
                    MUN_DESC: "VALENÇA",
                    MUN_UF: "RJ",
                    MUN_COD: "3306107",
                },
                {
                    MUN_DESC: "VARRE-SAI",
                    MUN_UF: "RJ",
                    MUN_COD: "3306156",
                },
                {
                    MUN_DESC: "VASSOURAS",
                    MUN_UF: "RJ",
                    MUN_COD: "3306206",
                },
                {
                    MUN_DESC: "VOLTA REDONDA",
                    MUN_UF: "RJ",
                    MUN_COD: "3306305",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "RJ" }, {});
    },
};