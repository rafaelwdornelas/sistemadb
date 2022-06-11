"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PRODFAMILIAS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PROD_NOME: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("PRODFAMILIAS");
  },
};