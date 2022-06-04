"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UNIDADES extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    UNIDADES.init({
        UN_CODIGO: DataTypes.STRING(2),
        UN_DESCRICAO: DataTypes.STRING(20),
    }, {
        sequelize,
        modelName: "UNIDADES",
        timestamps: false,
    });
    UNIDADES.removeAttribute("id");
    return UNIDADES;
};