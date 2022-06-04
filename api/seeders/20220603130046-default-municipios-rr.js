/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ALTO ALEGRE",
                    MUN_UF: "RR",
                    MUN_COD: "1400050",
                },
                {
                    MUN_DESC: "AMAJARI",
                    MUN_UF: "RR",
                    MUN_COD: "1400027",
                },
                {
                    MUN_DESC: "BOA VISTA",
                    MUN_UF: "RR",
                    MUN_COD: "1400100",
                },
                {
                    MUN_DESC: "BONFIM",
                    MUN_UF: "RR",
                    MUN_COD: "1400159",
                },
                {
                    MUN_DESC: "CANTÁ",
                    MUN_UF: "RR",
                    MUN_COD: "1400175",
                },
                {
                    MUN_DESC: "CARACARAÍ",
                    MUN_UF: "RR",
                    MUN_COD: "1400209",
                },
                {
                    MUN_DESC: "CAROEBE",
                    MUN_UF: "RR",
                    MUN_COD: "1400233",
                },
                {
                    MUN_DESC: "IRACEMA",
                    MUN_UF: "RR",
                    MUN_COD: "1400282",
                },
                {
                    MUN_DESC: "MUCAJAÍ",
                    MUN_UF: "RR",
                    MUN_COD: "1400308",
                },
                {
                    MUN_DESC: "NORMANDIA",
                    MUN_UF: "RR",
                    MUN_COD: "1400407",
                },
                {
                    MUN_DESC: "PACARAIMA",
                    MUN_UF: "RR",
                    MUN_COD: "1400456",
                },
                {
                    MUN_DESC: "RORAINÓPOLIS",
                    MUN_UF: "RR",
                    MUN_COD: "1400472",
                },
                {
                    MUN_DESC: "SÃO JOÃO DA BALIZA",
                    MUN_UF: "RR",
                    MUN_COD: "1400506",
                },
                {
                    MUN_DESC: "SÃO LUIZ",
                    MUN_UF: "RR",
                    MUN_COD: "1400605",
                },
                {
                    MUN_DESC: "UIRAMUTÃ",
                    MUN_UF: "RR",
                    MUN_COD: "1400704",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "RR" }, {});
    },
};