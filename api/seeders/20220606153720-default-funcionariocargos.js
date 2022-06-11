"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "FUNCIONARIOCARGOS", [{
        FUNCG_NOME: "CARGO GERAL DE FUNCIONARIOS",
        FUNCG_GRUPO: 1,
        FUNCG_SALARIO: 1350,
        CRIADO_EM: new Date(),
        ATUALIZADO_EM: new Date(),
      }, ], {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("FUNCIONARIOCARGOS", null, {});
  },
};