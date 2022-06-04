/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "FORMAPAGS", [{
                    PAG_NOME: "Boleto 30 dias",
                    PAG_FDIAS: "30",
                    PAG_FPORCENTAGEM: "100",
                    CRIADO_EM: new Date(),
                    ATUALIZADO_EM: new Date(),
                },
                {
                    PAG_NOME: "Boleto 30/60 dias",
                    PAG_FDIAS: "30,60,90",
                    PAG_FPORCENTAGEM: "50,50",
                    CRIADO_EM: new Date(),
                    ATUALIZADO_EM: new Date(),
                },
                {
                    PAG_NOME: "Boleto 30/60/90 dias",
                    PAG_FDIAS: "30,60,90",
                    PAG_FPORCENTAGEM: "34,33,33",
                    CRIADO_EM: new Date(),
                    ATUALIZADO_EM: new Date(),
                },
                {
                    PAG_NOME: "Boleto 30/60/90/120 dias",
                    PAG_FDIAS: "30,60,90",
                    PAG_FPORCENTAGEM: "25,25,25,25",
                    CRIADO_EM: new Date(),
                    ATUALIZADO_EM: new Date(),
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("FORMAPAGS", null, { truncate: true });
    },
};