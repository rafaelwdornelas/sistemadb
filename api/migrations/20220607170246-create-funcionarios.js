"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("FUNCIONARIOS", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            FUN_MSOCIAL: {
                type: Sequelize.STRING,
            },
            FUN_NOME: {
                type: Sequelize.STRING,
            },
            FUN_NOME_MAE: {
                type: Sequelize.STRING,
            },
            FUN_NOME_PAI: {
                type: Sequelize.STRING,
            },
            FUN_SEXO: {
                type: Sequelize.STRING,
            },
            FUN_NASCIMENTO: {
                type: Sequelize.STRING,
            },
            FUN_EST_CIVIL: {
                type: Sequelize.INTEGER,
            },
            FUN_NACIONALIDADE: {
                type: Sequelize.INTEGER,
            },
            FUN_EMAIL: {
                type: Sequelize.STRING,
            },
            FUN_DEFICIENTE: {
                type: Sequelize.BOOLEAN,
            },
            FUN_OBS_DEFICIENCIA: {
                type: Sequelize.STRING,
            },
            FUN_DATA_ADMISSAO: {
                type: Sequelize.STRING,
            },
            FUN_DATA_DEMISSAO: {
                type: Sequelize.STRING,
            },
            FUN_RECEB_BANCO: {
                type: Sequelize.INTEGER,
            },
            FUN_RECEB_AG: {
                type: Sequelize.STRING,
            },
            FUN_RECEB_CONTA: {
                type: Sequelize.STRING,
            },
            FUN_GRUPO: {
                type: Sequelize.INTEGER,
            },
            FUN_CARGO: {
                type: Sequelize.INTEGER,
            },
            FUN_SALARIO: {
                type: Sequelize.FLOAT,
            },
            FUN_TIPO_CONTRATO: {
                type: Sequelize.INTEGER,
            },
            FUN_DATA_FIM_CONTRATO: {
                type: Sequelize.STRING,
            },
            FUN_P_ADIANTAMENTO: {
                type: Sequelize.FLOAT,
            },
            FUN_CPF: {
                type: Sequelize.STRING,
            },
            FUN_PIS: {
                type: Sequelize.STRING,
            },
            FUN_RG: {
                type: Sequelize.STRING,
            },
            FUN_RG_EMISSAO: {
                type: Sequelize.STRING,
            },
            FUN_RG_UF: {
                type: Sequelize.STRING,
            },
            FUN_RG_OEM: {
                type: Sequelize.STRING,
            },
            FUN_END_RUA: {
                type: Sequelize.STRING,
            },
            FUN_END_NUMERO: {
                type: Sequelize.STRING,
            },
            FUN_END_BAIRRO: {
                type: Sequelize.STRING,
            },
            FUN_END_COMP: {
                type: Sequelize.STRING,
            },
            FUN_END_CIDADE: {
                type: Sequelize.STRING,
            },
            FUN_END_UF: {
                type: Sequelize.STRING,
            },
            FUN_END_CPF: {
                type: Sequelize.STRING,
            },
            FUN_TELEFONE: {
                type: Sequelize.STRING,
            },
            FUN_CELULAR: {
                type: Sequelize.STRING,
            },
            FUN_EMER_CONTATO: {
                type: Sequelize.STRING,
            },
            FUN_EMER_TELEFONE: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("FUNCIONARIOS");
    },
};