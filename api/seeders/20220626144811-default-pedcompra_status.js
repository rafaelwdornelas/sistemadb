"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "PEDCOMPRA_STATUS",
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
    await queryInterface.bulkDelete("PEDCOMPRA_STATUS", null, {});
  },
};
