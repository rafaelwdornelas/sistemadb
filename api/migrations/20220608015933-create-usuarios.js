"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("USUARIOS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      USERNAME: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, //NÃO PODE TER DUPLICADO
      },
      SENHA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      COD_FUNCIONARIO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "FUNCIONARIOS",
          key: "id",
        },
      },
      REFRESHTOKEN: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    await queryInterface.dropTable("USUARIOS");
  },
};
