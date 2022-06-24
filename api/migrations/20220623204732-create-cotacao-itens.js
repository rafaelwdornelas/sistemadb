"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("COTACAO_ITENS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      COTACAO_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "COTACAO_CABS",
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
      PRODUTODESC: {
        type: Sequelize.STRING(120),
        allowNull: false,
        defaultValue: "",
      },
      PRODUTOUND: {
        type: Sequelize.STRING(3),
        allowNull: false,
        defaultValue: "UND",
      },
      QUANTIDADE: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      VALORORIGINAL: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      VALORUNT: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      VALORTOTAL: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      DESCONTOPERC: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      DESCONTOVALOR: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
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
    await queryInterface.dropTable("COTACAO_ITENS");
  },
};
