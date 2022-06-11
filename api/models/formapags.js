"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FORMAPAG extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {}
  }
  FORMAPAG.init({
    PAG_NOME: {
      type: DataTypes.STRING(80),
      upercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo PAG_NOME deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 80) {
            throw new Error("O PAG_NOME deve ter no máximo 80 caracteres");
          }
        },
      },
    },
    PAG_ATIVO: {
      type: DataTypes.BOOLEAN,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "boolean") {
            throw new Error(
              "O campo PAG_ATIVO deve ser um boolean e não " + typeof dado
            );
          }
        },
      },
    },
    PAG_TIPO: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo PAG_TIPO deve ser um number e não " + typeof dado
            );
          }
        },
      },
    },
    PAG_FDIAS: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo PAG_FDIAS deve ser um string e não " + typeof dado
            );
          }
        },
      },
    },
    PAG_FPORCENTAGEM: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo PAG_FDIAS deve ser um string e não " + typeof dado
            );
          }
        },
      },
    },
    PAG_DESCONTO: {
      type: DataTypes.FLOAT,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo PAG_DESCONTO deve ser um number e não " + typeof dado
            );
          }
        },
      },
    },
    PAG_ACRESSIMO: {
      type: DataTypes.FLOAT,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo PAG_ACRESSIMO deve ser um number e não " + typeof dado
            );
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: "FORMAPAGS",
    createdAt: "CRIADO_EM",
    updatedAt: "ATUALIZADO_EM",
    freezeTableName: true,
  });
  return FORMAPAG;
};