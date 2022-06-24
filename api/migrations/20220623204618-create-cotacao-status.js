"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("COTACAO_STATUS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      DESCRICAO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("COTACAO_STATUS");
  },
};
