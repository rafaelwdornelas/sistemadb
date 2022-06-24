"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("COTACAO_CABS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CLIENTE: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CLIENTES",
          key: "id",
        },
      },
      LOJA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "LOJAS",
          key: "id",
        },
      },
      VENDEDOR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "FUNCIONARIOS",
          key: "id",
        },
      },
      USUARIO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "USUARIOS",
          key: "id",
        },
      },
      STATUS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
          model: "COTACAO_STATUS",
          key: "id",
        },
      },
      VALIDADE: {
        type: Sequelize.STRING(8),
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
      TOTAL: {
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
    await queryInterface.dropTable("COTACAO_CABS");
  },
};
