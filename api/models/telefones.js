"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class TELEFONES extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            TELEFONES.belongsTo(models.CLIENTES, {
                foreignKey: "TEL_CLI",
            });
        }
    }
    TELEFONES.init({
        TEL_CLI: DataTypes.INTEGER,
        TEL_TIPO: DataTypes.INTEGER, //O tipo do telefone, Fixo (1) ou Celular (2)
        TEL_DDD: DataTypes.STRING(2),
        TEL_NUMERO: DataTypes.STRING(9),
        TEL_RAMAL: { type: DataTypes.STRING(45), uppercase: true },
        TEL_CONTATO: { type: DataTypes.STRING(80), uppercase: true },
        TEL_OBS: { type: DataTypes.STRING(255), uppercase: true },
    }, {
        sequelize,
        modelName: "TELEFONES",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        freezeTableName: true,
    });
    return TELEFONES;
};