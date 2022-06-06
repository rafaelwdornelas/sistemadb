"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class FUNCIONARIOGRUPOS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    FUNCIONARIOGRUPOS.init({
        FUNGR_NOME: DataTypes.STRING,
        FUNGR_CENTRO_CUSTOS: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "FUNCIONARIOGRUPOS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return FUNCIONARIOGRUPOS;
};