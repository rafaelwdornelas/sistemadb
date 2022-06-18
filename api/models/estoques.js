"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ESTOQUES extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  ESTOQUES.init(
    {
      ARMAZEM: {
        type: DataTypes.INTEGER,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo ARMAZEM deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      PRODUTO: {
        type: DataTypes.INTEGER,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PRODUTO deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      QUANTIDADE: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo QUANTIDADE deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      FABRICACAO: {
        type: DataTypes.STRING,
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo FABRICACAO deve ser uma string e não " + typeof dado
              );
            }
          },
        },
      },
      VALIDADE: {
        type: DataTypes.STRING,
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo VALIDADE deve ser uma string e não " + typeof dado
              );
            } else if (dado.length < 8 && dado.length > 0) {
              throw new Error(
                "A data de VALIDADE deve ter no mínimo 8 caracteres YYYYMMDD"
              );
            }
          },
        },
      },
      LOTE: {
        type: DataTypes.STRING,
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo LOTE deve ser uma string e não " + typeof dado
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "ESTOQUES",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      freezeTableName: true,
    }
  );
  return ESTOQUES;
};
