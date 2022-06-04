/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "CLIENTES", [{
                CLI_LOJA: "1",
                CLI_NOME: "CONSUMIDOR",
                CRIADO_EM: new Date(),
                ATUALIZADO_EM: new Date(),
            }, ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("CLIENTES", null, { truncate: true });
    },
};