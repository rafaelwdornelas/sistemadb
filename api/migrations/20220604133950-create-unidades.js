"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UNIDADES", {
      UN_CODIGO: {
        type: Sequelize.STRING(2),
        primaryKey: true,
        allowNull: false,
      },
      UN_DESCRICAO: {
        type: Sequelize.STRING(20),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("UNIDADES");
  },
};