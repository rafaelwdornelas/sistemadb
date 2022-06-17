"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "ARMAZENS",
      [
        {
          LOJA: 1,
          DESCRICAO: "PRINCIPAL LOJA 1",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("ARMAZENS", null, {});
  },
};
