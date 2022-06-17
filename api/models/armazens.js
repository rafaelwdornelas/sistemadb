"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ARMAZENS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  ARMAZENS.init(
    {
      LOJA: {
        type: DataTypes.INTEGER,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo LOJA deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      DESCRICAO: {
        type: DataTypes.STRING,
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo DESCRICAO deve ser uma string e não " + typeof dado
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "ARMAZENS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      deletedAt: "DELETADO_EM",
      freezeTableName: true,
      paranoid: true,
    }
  );
  return ARMAZENS;
};
