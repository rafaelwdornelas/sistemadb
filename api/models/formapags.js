"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class FORMAPAG extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // FORMAPAG.hasMany(models.CLIENTES, {
            //     as: "TABELA_PAGAMENTO",
            //     foreignKey: "CLI_FPAGAMENTO",
            // });
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
        freezeTableName: true,
    });
    return FORMAPAG;
};