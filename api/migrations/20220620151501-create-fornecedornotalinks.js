"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("FORNECEDORNOTALINKS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FORNECEDOR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CLIENTES",
          key: "id",
        },
      },
      PRODUTO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PRODUTOS",
          key: "id",
        },
      },
      COD_FORNECEDOR: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MULTIPLICADOR: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      CRIADO_EM: {
        allowNull: false,
        type: Sequelize.DATE,
      }, //Data de criacao do registro
      ATUALIZADO_EM: {
        allowNull: false,
        type: Sequelize.DATE,
      }, //Data de atualizacao do registro
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("FORNECEDORNOTALINS");
  },
};
