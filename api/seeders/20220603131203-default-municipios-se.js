/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "AMPARO DO SÃO FRANCISCO",
                    MUN_UF: "SE",
                    MUN_COD: "2800100",
                },
                {
                    MUN_DESC: "AQUIDABÃ",
                    MUN_UF: "SE",
                    MUN_COD: "2800209",
                },
                {
                    MUN_DESC: "ARACAJU",
                    MUN_UF: "SE",
                    MUN_COD: "2800308",
                },
                {
                    MUN_DESC: "ARAUÁ",
                    MUN_UF: "SE",
                    MUN_COD: "2800407",
                },
                {
                    MUN_DESC: "AREIA BRANCA",
                    MUN_UF: "SE",
                    MUN_COD: "2800506",
                },
                {
                    MUN_DESC: "BARRA DOS COQUEIROS",
                    MUN_UF: "SE",
                    MUN_COD: "2800605",
                },
                {
                    MUN_DESC: "BOQUIM",
                    MUN_UF: "SE",
                    MUN_COD: "2800670",
                },
                {
                    MUN_DESC: "BREJO GRANDE",
                    MUN_UF: "SE",
                    MUN_COD: "2800704",
                },
                {
                    MUN_DESC: "CAMPO DO BRITO",
                    MUN_UF: "SE",
                    MUN_COD: "2801009",
                },
                {
                    MUN_DESC: "CANHOBA",
                    MUN_UF: "SE",
                    MUN_COD: "2801108",
                },
                {
                    MUN_DESC: "CANINDÉ DE SÃO FRANCISCO",
                    MUN_UF: "SE",
                    MUN_COD: "2801207",
                },
                {
                    MUN_DESC: "CAPELA",
                    MUN_UF: "SE",
                    MUN_COD: "2801306",
                },
                {
                    MUN_DESC: "CARIRA",
                    MUN_UF: "SE",
                    MUN_COD: "2801405",
                },
                {
                    MUN_DESC: "CARMÓPOLIS",
                    MUN_UF: "SE",
                    MUN_COD: "2801504",
                },
                {
                    MUN_DESC: "CEDRO DE SÃO JOÃO",
                    MUN_UF: "SE",
                    MUN_COD: "2801603",
                },
                {
                    MUN_DESC: "CRISTINÁPOLIS",
                    MUN_UF: "SE",
                    MUN_COD: "2801702",
                },
                {
                    MUN_DESC: "CUMBE",
                    MUN_UF: "SE",
                    MUN_COD: "2801900",
                },
                {
                    MUN_DESC: "DIVINA PASTORA",
                    MUN_UF: "SE",
                    MUN_COD: "2802007",
                },
                {
                    MUN_DESC: "ESTÂNCIA",
                    MUN_UF: "SE",
                    MUN_COD: "2802106",
                },
                {
                    MUN_DESC: "FEIRA NOVA",
                    MUN_UF: "SE",
                    MUN_COD: "2802205",
                },
                {
                    MUN_DESC: "FREI PAULO",
                    MUN_UF: "SE",
                    MUN_COD: "2802304",
                },
                {
                    MUN_DESC: "GARARU",
                    MUN_UF: "SE",
                    MUN_COD: "2802403",
                },
                {
                    MUN_DESC: "GENERAL MAYNARD",
                    MUN_UF: "SE",
                    MUN_COD: "2802502",
                },
                {
                    MUN_DESC: "GRACHO CARDOSO",
                    MUN_UF: "SE",
                    MUN_COD: "2802601",
                },
                {
                    MUN_DESC: "ILHA DAS FLORES",
                    MUN_UF: "SE",
                    MUN_COD: "2802700",
                },
                {
                    MUN_DESC: "INDIAROBA",
                    MUN_UF: "SE",
                    MUN_COD: "2802809",
                },
                {
                    MUN_DESC: "ITABAIANA",
                    MUN_UF: "SE",
                    MUN_COD: "2802908",
                },
                {
                    MUN_DESC: "ITABAIANINHA",
                    MUN_UF: "SE",
                    MUN_COD: "2803005",
                },
                {
                    MUN_DESC: "ITABI",
                    MUN_UF: "SE",
                    MUN_COD: "2803104",
                },
                {
                    MUN_DESC: "ITAPORANGA D'AJUDA",
                    MUN_UF: "SE",
                    MUN_COD: "2803203",
                },
                {
                    MUN_DESC: "JAPARATUBA",
                    MUN_UF: "SE",
                    MUN_COD: "2803302",
                },
                {
                    MUN_DESC: "JAPOATÃ",
                    MUN_UF: "SE",
                    MUN_COD: "2803401",
                },
                {
                    MUN_DESC: "LAGARTO",
                    MUN_UF: "SE",
                    MUN_COD: "2803500",
                },
                {
                    MUN_DESC: "LARANJEIRAS",
                    MUN_UF: "SE",
                    MUN_COD: "2803609",
                },
                {
                    MUN_DESC: "MACAMBIRA",
                    MUN_UF: "SE",
                    MUN_COD: "2803708",
                },
                {
                    MUN_DESC: "MALHADA DOS BOIS",
                    MUN_UF: "SE",
                    MUN_COD: "2803807",
                },
                {
                    MUN_DESC: "MALHADOR",
                    MUN_UF: "SE",
                    MUN_COD: "2803906",
                },
                {
                    MUN_DESC: "MARUIM",
                    MUN_UF: "SE",
                    MUN_COD: "2804003",
                },
                {
                    MUN_DESC: "MOITA BONITA",
                    MUN_UF: "SE",
                    MUN_COD: "2804102",
                },
                {
                    MUN_DESC: "MONTE ALEGRE DE SERGIPE",
                    MUN_UF: "SE",
                    MUN_COD: "2804201",
                },
                {
                    MUN_DESC: "MURIBECA",
                    MUN_UF: "SE",
                    MUN_COD: "2804300",
                },
                {
                    MUN_DESC: "NEÓPOLIS",
                    MUN_UF: "SE",
                    MUN_COD: "2804409",
                },
                {
                    MUN_DESC: "NOSSA SENHORA APARECIDA",
                    MUN_UF: "SE",
                    MUN_COD: "2804458",
                },
                {
                    MUN_DESC: "NOSSA SENHORA DA GLÓRIA",
                    MUN_UF: "SE",
                    MUN_COD: "2804508",
                },
                {
                    MUN_DESC: "NOSSA SENHORA DAS DORES",
                    MUN_UF: "SE",
                    MUN_COD: "2804607",
                },
                {
                    MUN_DESC: "NOSSA SENHORA DE LOURDES",
                    MUN_UF: "SE",
                    MUN_COD: "2804706",
                },
                {
                    MUN_DESC: "NOSSA SENHORA DO SOCORRO",
                    MUN_UF: "SE",
                    MUN_COD: "2804805",
                },
                {
                    MUN_DESC: "PACATUBA",
                    MUN_UF: "SE",
                    MUN_COD: "2804904",
                },
                {
                    MUN_DESC: "PEDRA MOLE",
                    MUN_UF: "SE",
                    MUN_COD: "2805000",
                },
                {
                    MUN_DESC: "PEDRINHAS",
                    MUN_UF: "SE",
                    MUN_COD: "2805109",
                },
                {
                    MUN_DESC: "PINHÃO",
                    MUN_UF: "SE",
                    MUN_COD: "2805208",
                },
                {
                    MUN_DESC: "PIRAMBU",
                    MUN_UF: "SE",
                    MUN_COD: "2805307",
                },
                {
                    MUN_DESC: "POÇO REDONDO",
                    MUN_UF: "SE",
                    MUN_COD: "2805406",
                },
                {
                    MUN_DESC: "POÇO VERDE",
                    MUN_UF: "SE",
                    MUN_COD: "2805505",
                },
                {
                    MUN_DESC: "PORTO DA FOLHA",
                    MUN_UF: "SE",
                    MUN_COD: "2805604",
                },
                {
                    MUN_DESC: "PROPRIÁ",
                    MUN_UF: "SE",
                    MUN_COD: "2805703",
                },
                {
                    MUN_DESC: "RIACHÃO DO DANTAS",
                    MUN_UF: "SE",
                    MUN_COD: "2805802",
                },
                {
                    MUN_DESC: "RIACHUELO",
                    MUN_UF: "SE",
                    MUN_COD: "2805901",
                },
                {
                    MUN_DESC: "RIBEIRÓPOLIS",
                    MUN_UF: "SE",
                    MUN_COD: "2806008",
                },
                {
                    MUN_DESC: "ROSÁRIO DO CATETE",
                    MUN_UF: "SE",
                    MUN_COD: "2806107",
                },
                {
                    MUN_DESC: "SALGADO",
                    MUN_UF: "SE",
                    MUN_COD: "2806206",
                },
                {
                    MUN_DESC: "SANTA LUZIA DO ITANHY",
                    MUN_UF: "SE",
                    MUN_COD: "2806305",
                },
                {
                    MUN_DESC: "SANTA ROSA DE LIMA",
                    MUN_UF: "SE",
                    MUN_COD: "2806503",
                },
                {
                    MUN_DESC: "SANTANA DO SÃO FRANCISCO",
                    MUN_UF: "SE",
                    MUN_COD: "2806404",
                },
                {
                    MUN_DESC: "SANTO AMARO DAS BROTAS",
                    MUN_UF: "SE",
                    MUN_COD: "2806602",
                },
                {
                    MUN_DESC: "SÃO CRISTÓVÃO",
                    MUN_UF: "SE",
                    MUN_COD: "2806701",
                },
                {
                    MUN_DESC: "SÃO DOMINGOS",
                    MUN_UF: "SE",
                    MUN_COD: "2806800",
                },
                {
                    MUN_DESC: "SÃO FRANCISCO",
                    MUN_UF: "SE",
                    MUN_COD: "2806909",
                },
                {
                    MUN_DESC: "SÃO MIGUEL DO ALEIXO",
                    MUN_UF: "SE",
                    MUN_COD: "2807006",
                },
                {
                    MUN_DESC: "SIMÃO DIAS",
                    MUN_UF: "SE",
                    MUN_COD: "2807105",
                },
                {
                    MUN_DESC: "SIRIRI",
                    MUN_UF: "SE",
                    MUN_COD: "2807204",
                },
                {
                    MUN_DESC: "TELHA",
                    MUN_UF: "SE",
                    MUN_COD: "2807303",
                },
                {
                    MUN_DESC: "TOBIAS BARRETO",
                    MUN_UF: "SE",
                    MUN_COD: "2807402",
                },
                {
                    MUN_DESC: "TOMAR DO GERU",
                    MUN_UF: "SE",
                    MUN_COD: "2807501",
                },
                {
                    MUN_DESC: "UMBAÚBA",
                    MUN_UF: "SE",
                    MUN_COD: "2807600",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "SE" }, {});
    },
};