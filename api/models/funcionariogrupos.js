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
    FUNGR_NOME: {
      type: DataTypes.STRING,
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo FUNGR_NOME deve ser uma string e não " + typeof dado
            );
          }
        },
      },
    },
    FUNGR_LOJA: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo FUNGR_CENTRO_CUSTOS deve ser uma number e não " +
                            typeof dado
            );
          }
        },
      },
    },
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