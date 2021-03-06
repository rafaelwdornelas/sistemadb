"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FUNCIONARIOGRUPOS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FUNGR_NOME: {
        type: Sequelize.STRING,
      },
      FUNGR_LOJA: {
        type: Sequelize.INTEGER,
        references: {
          model: "LOJAS",
          key: "id",
        },
      },
      CRIADO_EM: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ATUALIZADO_EM: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      DELETADO_EM: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("FUNCIONARIOGRUPOS");
  },
};