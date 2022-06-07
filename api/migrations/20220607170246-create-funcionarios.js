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
                defaultValue: "",
                allowNull: false,
            },
            FUN_NOME: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_NOME_MAE: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_NOME_PAI: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_SEXO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_NASCIMENTO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_EST_CIVIL: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
            FUN_NACIONALIDADE: {
                type: Sequelize.INTEGER,
                defaultValue: 1058,
                allowNull: false,
            },
            FUN_EMAIL: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_DEFICIENTE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            FUN_OBS_DEFICIENCIA: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_DATA_ADMISSAO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_DATA_DEMISSAO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_RECEB_BANCO: {
                type: Sequelize.INTEGER,
                defaultValue: "",
                allowNull: false,
            },
            FUN_RECEB_AG: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_RECEB_CONTA: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_GRUPO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
            FUN_CARGO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
            FUN_SALARIO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            },
            FUN_TIPO_CONTRATO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
            FUN_DATA_FIM_CONTRATO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_P_ADIANTAMENTO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            },
            FUN_CPF: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_PIS: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_RG: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_RG_EMISSAO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_RG_UF: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_RG_OEM: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_END_RUA: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_END_NUMERO: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
            FUN_END_BAIRRO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_END_COMP: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_END_CIDADE: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_END_UF: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_END_CPF: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_TELEFONE: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_CELULAR: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_EMER_CONTATO: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            },
            FUN_EMER_TELEFONE: {
                type: Sequelize.STRING,
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
            DELETADO_EM: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("FUNCIONARIOS");
    },
};