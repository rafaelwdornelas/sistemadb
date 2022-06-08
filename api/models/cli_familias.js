"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CLI_FAMILIA extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    CLI_FAMILIA.init({
        NOME: {
            type: DataTypes.STRING,
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo NOME deve ser um string e não " + typeof dado
                        );
                    }
                },
            },
        },
        DESCONTO: {
            type: DataTypes.FLOAT,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo DESCONTO deve ser um número e não " + typeof dado
                        );
                    }
                },
            },
        },
        RESTRITO: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo RESTRITO deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        },
    }, {
        sequelize,
        modelName: "CLI_FAMILIAS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return CLI_FAMILIA;
};