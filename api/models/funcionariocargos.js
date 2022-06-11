"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FUNCIONARIOCARGOS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  FUNCIONARIOCARGOS.init({
    FUNCG_NOME: {
      type: DataTypes.STRING,
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo FUNCG_NOME deve ser uma string e não " + typeof dado
            );
          }
        },
      },
    },
    FUNCG_GRUPO: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo FUNCG_GRUPO deve ser uma number e não " + typeof dado
            );
          }
        },
      },
    },
    FUNCG_SALARIO: {
      type: DataTypes.FLOAT,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo FUNCG_SALARIO deve ser um number e não " + typeof dado
            );
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: "FUNCIONARIOCARGOS",
    createdAt: "CRIADO_EM",
    updatedAt: "ATUALIZADO_EM",
    deletedAt: "DELETADO_EM",
    freezeTableName: true,
    paranoid: true,
  });
  return FUNCIONARIOCARGOS;
};