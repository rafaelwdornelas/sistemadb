"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PEDCOMPRA_ITENS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PEDCOMPRA_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PEDCOMPRA_CABS",
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
      PRODUTOCOD: {
        type: Sequelize.STRING(60),
        allowNull: false,
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
      NECESSIDADE: {
        type: Sequelize.STRING(8),
        allowNull: false,
      }, //Data da Necessidade do produto YYYYMMDD
      OBSITEM: {
        type: Sequelize.TEXT,
        allowNull: false,
      }, //observações do item
      VALORUNT: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      VALORTOTAL: {
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
    await queryInterface.dropTable("PEDCOMPRA_ITENS");
  },
};
