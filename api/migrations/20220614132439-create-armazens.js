"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ARMAZENS", {
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
      DESCRICAO: {
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
      DELETADO_EM: {
        allowNull: true,
        type: Sequelize.DATE,
      }, //Data de exclusao do registro
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("ARMAZENS");
  },
};
