"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class FUNCIONARIOS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    FUNCIONARIOS.init({
        FUN_MSOCIAL: DataTypes.STRING,
        FUN_NOME: DataTypes.STRING,
        FUN_NOME_MAE: DataTypes.STRING,
        FUN_NOME_PAI: DataTypes.STRING,
        FUN_SEXO: DataTypes.STRING,
        FUN_NASCIMENTO: DataTypes.STRING,
        FUN_EST_CIVIL: DataTypes.INTEGER,
        FUN_NACIONALIDADE: DataTypes.INTEGER,
        FUN_EMAIL: DataTypes.STRING,
        FUN_DEFICIENTE: DataTypes.BOOLEAN,
        FUN_OBS_DEFICIENCIA: DataTypes.STRING,
        FUN_DATA_ADMISSAO: DataTypes.STRING,
        FUN_DATA_DEMISSAO: DataTypes.STRING,
        FUN_RECEB_BANCO: DataTypes.INTEGER,
        FUN_RECEB_AG: DataTypes.STRING,
        FUN_RECEB_CONTA: DataTypes.STRING,
        FUN_GRUPO: DataTypes.INTEGER,
        FUN_CARGO: DataTypes.INTEGER,
        FUN_SALARIO: DataTypes.FLOAT,
        FUN_TIPO_CONTRATO: DataTypes.INTEGER,
        FUN_DATA_FIM_CONTRATO: DataTypes.STRING,
        FUN_P_ADIANTAMENTO: DataTypes.FLOAT,
        FUN_CPF: DataTypes.STRING,
        FUN_PIS: DataTypes.STRING,
        FUN_RG: DataTypes.STRING,
        FUN_RG_EMISSAO: DataTypes.STRING,
        FUN_RG_UF: DataTypes.STRING,
        FUN_RG_OEM: DataTypes.STRING,
        FUN_END_RUA: DataTypes.STRING,
        FUN_END_NUMERO: DataTypes.STRING,
        FUN_END_BAIRRO: DataTypes.STRING,
        FUN_END_COMP: DataTypes.STRING,
        FUN_END_CIDADE: DataTypes.STRING,
        FUN_END_UF: DataTypes.STRING,
        FUN_END_CPF: DataTypes.STRING,
        FUN_TELEFONE: DataTypes.STRING,
        FUN_CELULAR: DataTypes.STRING,
        FUN_EMER_CONTATO: DataTypes.STRING,
        FUN_EMER_TELEFONE: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "FUNCIONARIOS",
    });
    return FUNCIONARIOS;
};