"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FUNCIONARIOCARGOS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FUNCG_NOME: {
        type: Sequelize.STRING,
      },
      FUNCG_GRUPO: {
        type: Sequelize.INTEGER,
        references: {
          model: "FUNCIONARIOGRUPOS",
          key: "id",
        },
      },
      FUNCG_SALARIO: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("FUNCIONARIOCARGOS");
  },
};