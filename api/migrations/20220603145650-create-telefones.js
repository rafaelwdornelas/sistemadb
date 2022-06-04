"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("TELEFONES", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            TEL_CLI: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            TEL_TIPO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            }, //O tipo do telefone, Fixo (1) ou Celular (2)
            TEL_DDD: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            },
            TEL_NUMERO: {
                type: Sequelize.STRING(9),
                defaultValue: "",
                allowNull: false,
            },
            TEL_RAMAL: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            },
            TEL_CONTATO: {
                type: Sequelize.STRING(80),
                defaultValue: "",
                allowNull: false,
            },
            TEL_OBS: {
                type: Sequelize.STRING(255),
                defaultValue: "",
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
        await queryInterface.dropTable("TELEFONES");
    },
};