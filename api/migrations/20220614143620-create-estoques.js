"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ESTOQUES", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ARMAZEM: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ARMAZENS",
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
      QUANTIDADE: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      FABRICACAO: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      VALIDADE: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      LOTE: {
        type: Sequelize.STRING,
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("ESTOQUES");
  },
};
