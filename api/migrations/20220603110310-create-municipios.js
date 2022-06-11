"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MUNICIPIOS", {
      MUN_COD: {
        type: Sequelize.STRING(7),
        allowNull: false,
        primaryKey: true,
      },
      MUN_UF: {
        type: Sequelize.STRING(2),
      },
      MUN_DESC: {
        type: Sequelize.STRING(80),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("MUNICIPIOS");
  },
};