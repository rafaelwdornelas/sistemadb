"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "FUNCIONARIOGRUPOS",
      [
        {
          FUNGR_NOME: "GRUPO FUNCIONARIOS LOJA 1",
          FUNGR_LOJA: 1,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("FUNCIONARIOGRUPOS", null, {
      truncate: true,
    });
  },
};
