"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "CRI_FAMILIAS", [{
                NOME: "GERAL",
                CRIADO_EM: new Date(),
                ATUALIZADO_EM: new Date(),
            }, ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("CRI_FAMILIAS", null, { truncate: true });
    },
};