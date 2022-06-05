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
        UN_CODIGO: {
            type: DataTypes.STRING(2),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo UN_CODIGO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length > 2) {
                        throw new Error("O UN_CODIGO deve ter no máximo 2 caracteres");
                    }
                },
            },
        },
        UN_DESCRICAO: {
            type: DataTypes.STRING(20),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo UN_DESCRICAO deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length > 20) {
                        throw new Error(
                            "O UN_DESCRICAO deve ter no máximo 20 caracteres"
                        );
                    }
                },
            },
        },
    }, {
        sequelize,
        modelName: "UNIDADES",
        timestamps: false,
    });
    UNIDADES.removeAttribute("id");
    return UNIDADES;
};