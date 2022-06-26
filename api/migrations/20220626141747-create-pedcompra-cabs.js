"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PEDCOMPRA_CABS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      LOJA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "LOJAS",
          key: "id",
        },
      },
      FORNECEDOR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CLIENTES",
          key: "id",
        },
      },
      SOLICITANTE: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "FUNCIONARIOS",
          key: "id",
        },
      },
      APROVADOR: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "FUNCIONARIOS",
          key: "id",
        },
      },
      STATUS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: "PEDCOMPRA_STATUS",
          key: "id",
        },
      },
      DATAAPROVADO: {
        type: Sequelize.STRING(8),
        allowNull: true,
      },
      VALORMERCADORIAS: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      VALORTAXAS: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      VALORTOTAL: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      OBS: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "",
      },
      CRIADO_EM: {
        allowNull: false,
        type: Sequelize.DATE,
      }, //Data de criacao do registro
      ATUALIZADO_EM: {
        allowNull: false,
        type: Sequelize.DATE,
      }, //Data de atualizacao do registro
      DELETADO_EM: {
        allowNull: true,
        type: Sequelize.DATE,
      }, //Data de exclusao do registro
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("PEDCOMPRA_CABS");
  },
};
