"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("CLI_FAMILIAS", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            NOME: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            DESCONTO: {
                type: Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0,
            },
            RESTRITO: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            CRIADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            ATUALIZADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            DELETADO_EM: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("CLI_FAMILIAS");
    },
};