"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ENDERECOS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            ENDERECOS.belongsTo(models.CLIENTES, {
                foreignKey: "END_CLI",
            });
        }
    }
    ENDERECOS.init({
        END_CLI: { type: DataTypes.STRING, uppercase: true },
        END_TIPO: DataTypes.INTEGER,
        END_CEP: DataTypes.STRING(10),
        END_RUA: { type: DataTypes.STRING(80), uppercase: true },
        END_NUMERO: DataTypes.INTEGER,
        END_BAIRRO: { type: DataTypes.STRING(40), uppercase: true },
        END_EST: { type: DataTypes.STRING(2), uppercase: true },
        END_MUNICIPIO: { type: DataTypes.STRING(60), uppercase: true },
        END_COMP: { type: DataTypes.STRING(60), uppercase: true },
        END_CODMUN: { type: DataTypes.STRING(5), uppercase: true },
        END_REFERENCIA: { type: DataTypes.STRING(255), uppercase: true },
        END_REGIAO: { type: DataTypes.STRING(3), uppercase: true },
        END_CPAIS: DataTypes.INTEGER, // Código do Pais no SPED
        END_NCPAIS: { type: DataTypes.STRING(60), uppercase: true }, // Nome do País no SPED
    }, {
        sequelize,
        modelName: "ENDERECOS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return ENDERECOS;
};