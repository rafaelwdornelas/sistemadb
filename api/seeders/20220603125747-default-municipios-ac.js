/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ACRELÂNDIA",
                    MUN_UF: "AC",
                    MUN_COD: "1200013",
                },
                {
                    MUN_DESC: "ASSIS BRASIL",
                    MUN_UF: "AC",
                    MUN_COD: "1200054",
                },
                {
                    MUN_DESC: "BRASILÉIA",
                    MUN_UF: "AC",
                    MUN_COD: "1200104",
                },
                {
                    MUN_DESC: "BUJARI",
                    MUN_UF: "AC",
                    MUN_COD: "1200138",
                },
                {
                    MUN_DESC: "CAPIXABA",
                    MUN_UF: "AC",
                    MUN_COD: "1200179",
                },
                {
                    MUN_DESC: "CRUZEIRO DO SUL",
                    MUN_UF: "AC",
                    MUN_COD: "1200203",
                },
                {
                    MUN_DESC: "EPITACIOLÂNDIA",
                    MUN_UF: "AC",
                    MUN_COD: "1200252",
                },
                {
                    MUN_DESC: "FEIJÓ",
                    MUN_UF: "AC",
                    MUN_COD: "1200302",
                },
                {
                    MUN_DESC: "JORDÃO",
                    MUN_UF: "AC",
                    MUN_COD: "1200328",
                },
                {
                    MUN_DESC: "MÂNCIO LIMA",
                    MUN_UF: "AC",
                    MUN_COD: "1200336",
                },
                {
                    MUN_DESC: "MANOEL URBANO",
                    MUN_UF: "AC",
                    MUN_COD: "1200344",
                },
                {
                    MUN_DESC: "MARECHAL THAUMATURGO",
                    MUN_UF: "AC",
                    MUN_COD: "1200351",
                },
                {
                    MUN_DESC: "PLÁCIDO DE CASTRO",
                    MUN_UF: "AC",
                    MUN_COD: "1200385",
                },
                {
                    MUN_DESC: "PORTO ACRE",
                    MUN_UF: "AC",
                    MUN_COD: "1200807",
                },
                {
                    MUN_DESC: "PORTO WALTER",
                    MUN_UF: "AC",
                    MUN_COD: "1200393",
                },
                {
                    MUN_DESC: "RIO BRANCO",
                    MUN_UF: "AC",
                    MUN_COD: "1200401",
                },
                {
                    MUN_DESC: "RODRIGUES ALVES",
                    MUN_UF: "AC",
                    MUN_COD: "1200427",
                },
                {
                    MUN_DESC: "SANTA ROSA DO PURUS",
                    MUN_UF: "AC",
                    MUN_COD: "1200435",
                },
                {
                    MUN_DESC: "SENA MADUREIRA",
                    MUN_UF: "AC",
                    MUN_COD: "1200500",
                },
                {
                    MUN_DESC: "SENADOR GUIOMARD",
                    MUN_UF: "AC",
                    MUN_COD: "1200450",
                },
                {
                    MUN_DESC: "TARAUACÁ",
                    MUN_UF: "AC",
                    MUN_COD: "1200609",
                },
                {
                    MUN_DESC: "XAPURI",
                    MUN_UF: "AC",
                    MUN_COD: "1200708",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "AC" }, {});
    },
};