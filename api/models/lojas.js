"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class LOJAS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    LOJAS.init({
        LJ_NOME: DataTypes.STRING,
        LJ_MOME_FANTASIA: DataTypes.STRING,
        LJ_IMAGEM64: DataTypes.STRING,
        LJ_MATRIZ_FILIAL: DataTypes.STRING,
        LJ_TIPO: DataTypes.STRING,
        LJ_CPF_CNPJ: DataTypes.STRING,
        LJ_IE: DataTypes.STRING,
        LJ_IM: DataTypes.STRING,
        LJ_CNAE: DataTypes.STRING,
        LJ_REGIME_TRIBUTARIO: DataTypes.INTEGER,
        LJ_REGIME_ESP_TRIBUTARIO: DataTypes.INTEGER,
        LJ_ID_CSC_PROD: DataTypes.STRING,
        LJ_CSC_PROD: DataTypes.STRING,
        LJ_ID_CSC_HOMOL: DataTypes.STRING,
        LJ_CSC_HOMOL: DataTypes.STRING,
        LJ_EMAIL: DataTypes.STRING,
        LJ_RESPONSAVEL: DataTypes.STRING,
        LJ_RESPONSAVEL_TEL: DataTypes.STRING,
        LJ_OBS: DataTypes.STRING,
        LJ_SITE: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "LOJAS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return LOJAS;
};