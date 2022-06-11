"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CNAES", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CN_CODIGO: {
        type: Sequelize.STRING(9),
      },
      CN_DESCRICAO: {
        type: Sequelize.STRING(255),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("CNAES");
  },
};