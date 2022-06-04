/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "AMAPÁ",
                    MUN_UF: "AP",
                    MUN_COD: "1600105",
                },
                {
                    MUN_DESC: "CALÇOENE",
                    MUN_UF: "AP",
                    MUN_COD: "1600204",
                },
                {
                    MUN_DESC: "CUTIAS",
                    MUN_UF: "AP",
                    MUN_COD: "1600212",
                },
                {
                    MUN_DESC: "FERREIRA GOMES",
                    MUN_UF: "AP",
                    MUN_COD: "1600238",
                },
                {
                    MUN_DESC: "ITAUBAL",
                    MUN_UF: "AP",
                    MUN_COD: "1600253",
                },
                {
                    MUN_DESC: "LARANJAL DO JARI",
                    MUN_UF: "AP",
                    MUN_COD: "1600279",
                },
                {
                    MUN_DESC: "MACAPÁ",
                    MUN_UF: "AP",
                    MUN_COD: "1600303",
                },
                {
                    MUN_DESC: "MAZAGÃO",
                    MUN_UF: "AP",
                    MUN_COD: "1600402",
                },
                {
                    MUN_DESC: "OIAPOQUE",
                    MUN_UF: "AP",
                    MUN_COD: "1600501",
                },
                {
                    MUN_DESC: "PEDRA BRANCA DO AMAPARI",
                    MUN_UF: "AP",
                    MUN_COD: "1600154",
                },
                {
                    MUN_DESC: "PORTO GRANDE",
                    MUN_UF: "AP",
                    MUN_COD: "1600535",
                },
                {
                    MUN_DESC: "PRACUÚBA",
                    MUN_UF: "AP",
                    MUN_COD: "1600550",
                },
                {
                    MUN_DESC: "SANTANA",
                    MUN_UF: "AP",
                    MUN_COD: "1600600",
                },
                {
                    MUN_DESC: "SERRA DO NAVIO",
                    MUN_UF: "AP",
                    MUN_COD: "1600055",
                },
                {
                    MUN_DESC: "TARTARUGALZINHO",
                    MUN_UF: "AP",
                    MUN_COD: "1600709",
                },
                {
                    MUN_DESC: "VITÓRIA DO JARI",
                    MUN_UF: "AP",
                    MUN_COD: "1600808",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "AP" }, {});
    },
};