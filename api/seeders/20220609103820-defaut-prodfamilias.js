"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "PRODFAMILIAS",
      [
        {
          PROD_NOME: "GERAL",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("PRODFAMILIAS", null, { truncate: true });
  },
};
