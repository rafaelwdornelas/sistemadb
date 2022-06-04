"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class MUNICIPIOS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    MUNICIPIOS.init({
        MUN_COD: DataTypes.STRING(7),
        MUN_UF: DataTypes.STRING(2),
        MUN_DESC: DataTypes.STRING(80),
    }, {
        sequelize,
        modelName: "MUNICIPIOS",
        freezeTableName: true,
    });
    MUNICIPIOS.removeAttribute("id");
    MUNICIPIOS.removeAttribute("createdAt");
    MUNICIPIOS.removeAttribute("updatedAt");
    return MUNICIPIOS;
};