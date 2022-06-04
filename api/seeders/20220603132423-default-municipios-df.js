/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                MUN_DESC: "BRASÍLIA",
                MUN_UF: "DF",
                MUN_COD: "5300108",
            }, ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "DF" }, {});
    },
};