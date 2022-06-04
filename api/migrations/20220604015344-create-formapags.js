"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("FORMAPAGS", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            PAG_NOME: {
                type: Sequelize.STRING(80),
                defaultValue: "",
                allowNull: false,
            },
            PAG_ATIVO: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            },
            PAG_TIPO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
            PAG_FDIAS: {
                type: Sequelize.STRING,
            },
            PAG_FPORCENTAGEM: {
                type: Sequelize.STRING,
            },
            PAG_DESCONTO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            },
            PAG_ACRESSIMO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            },
            CRIADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            ATUALIZADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("FORMAPAGS");
    },
};