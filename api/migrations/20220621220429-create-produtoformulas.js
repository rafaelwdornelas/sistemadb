"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PRODUTOFORMULAS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PRODUTO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PRODUTOS",
          key: "id",
        },
      }, //Produto master que será formulado
      ITEM: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PRODUTOS",
          key: "id",
        },
      }, //Produto da formula
      QUANTIDADE: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }, //Quantidade do Produto
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
    await queryInterface.dropTable("PRODUTOFORMULAS");
  },
};
