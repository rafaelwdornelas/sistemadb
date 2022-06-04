"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "TELEFONES", [{
                TEL_CLI: 1,
                TEL_TIPO: 2,
                TEL_DDD: "11",
                TEL_NUMERO: "988888888",
                TEL_RAMAL: "",
                TEL_CONTATO: "CONSUMIDOR",
                TEL_OBS: "OBSERVAÇÃO DO CONSUMIDOR",
                CRIADO_EM: new Date(),
                ATUALIZADO_EM: new Date(),
            }, ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("TELEFONES", null, { truncate: true });
    },
};