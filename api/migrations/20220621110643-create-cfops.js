"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CFOPS", {
      CFOP: {
        type: Sequelize.INTEGER,
      },
      DESC_SIMPLES: {
        type: Sequelize.TEXT,
      },
      DESC_APLICACAO: {
        type: Sequelize.TEXT,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("CFOPS");
  },
};
