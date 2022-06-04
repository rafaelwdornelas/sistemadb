"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CRI_FAMILIA extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    CRI_FAMILIA.init({
        NOME: { type: DataTypes.STRING, uppercase: true },
        DESCONTO: DataTypes.FLOAT,
        RESTRITO: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: "CRI_FAMILIAS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return CRI_FAMILIA;
};