"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "ENDERECOS", [{
                END_CLI: "1",
                END_TIPO: 1,
                END_RUA: "RUA CONSUMIDOR",
                END_NUMERO: "12",
                END_BAIRRO: "BAIRRO CONSUMIDOR",
                END_EST: "SP",
                END_MUNICIPIO: "SÃO PAULO",
                END_COMP: "COMP. CONSUMIDOR",
                END_CODMUN: "3165206",
                CRIADO_EM: new Date(),
                ATUALIZADO_EM: new Date(),
            }, ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("ENDERECOS", null, { truncate: true });
    },
};