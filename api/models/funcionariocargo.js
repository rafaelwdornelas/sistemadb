"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class FUNCIONARIOCARGO extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    FUNCIONARIOCARGO.init({
        FUNCG_NOME: DataTypes.STRING,
        FUNCG_GRUPO: DataTypes.INTEGER,
        FUNCG_SALARIO: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: "FUNCIONARIOCARGO",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return FUNCIONARIOCARGO;
};