"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "COTACAO_STATUS",
      [
        {
          DESCRICAO: "PENDENTE",
        },
        {
          DESCRICAO: "CANCELADA",
        },
        {
          DESCRICAO: "APROVADA",
        },
        {
          DESCRICAO: "REPROVADA",
        },
        {
          DESCRICAO: "FINALIZADA",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("COTACAO_STATUS", null, {});
  },
};
