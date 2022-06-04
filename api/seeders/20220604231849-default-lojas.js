"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "LOJAS", [{
                LJ_NOME: "EMPRESA DE TESTE",
                LJ_MOME_FANTASIA: "EMPRESA DE TESTE",
                LJ_IMAGEM64: "",
                LJ_MATRIZ_FILIAL: "1",
                LJ_TIPO: "PJ",
                LJ_CPF_CNPJ: "00000000000000",
                LJ_IE: "0000000000",
                LJ_IM: "0000000000",
                LJ_CNAE: "0000000",
                LJ_REGIME_TRIBUTARIO: 1,
                LJ_REGIME_ESP_TRIBUTARIO: 1,
                CRIADO_EM: new Date(),
                ATUALIZADO_EM: new Date(),
            }, ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("LOJAS", null, {});
    },
};