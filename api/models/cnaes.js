"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CNAES extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {}
    }
    CNAES.init({
        CN_CODIGO: DataTypes.STRING(9),
        CN_DESCRICAO: DataTypes.STRING(255),
    }, {
        sequelize,
        modelName: "CNAES",
        timestamps: false,
    });
    return CNAES;
};