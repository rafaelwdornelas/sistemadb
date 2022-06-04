"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class FORMAPAG extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    FORMAPAG.init({
        PAG_NOME: { type: DataTypes.STRING(80), upercase: true },
        PAG_ATIVO: DataTypes.BOOLEAN,
        PAG_TIPO: DataTypes.INTEGER,
        PAG_FDIAS: DataTypes.STRING,
        PAG_FPORCENTAGEM: DataTypes.STRING,
        PAG_DESCONTO: DataTypes.FLOAT,
        PAG_ACRESSIMO: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: "FORMAPAGS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return FORMAPAG;
};