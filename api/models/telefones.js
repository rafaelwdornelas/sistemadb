"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TELEFONES extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {}
  }
  TELEFONES.init({
    TEL_CLI: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo TEL_CLI deve ser um number e não " + typeof dado
            );
          }
        },
      },
    },
    TEL_TIPO: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo TEL_TIPO deve ser um number e não " + typeof dado
            );
          } else if (dado != 1 && dado != 2) {
            throw new Error("O TEL_TIPO deve ser 1 (Fixo) ou 2 (Celular)");
          }
        },
      },
    }, //O tipo do telefone, Fixo (1) ou Celular (2)
    TEL_DDD: {
      type: DataTypes.STRING(2),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo TEL_DDD deve ser um string e não " + typeof dado
            );
          } else if (dado.length < 2 && dado.length > 0) {
            throw new Error("O TEL_DDD deve ter 2 caracteres");
          }
        },
      },
    },
    TEL_NUMERO: { type: DataTypes.STRING(9) },
    TEL_RAMAL: {
      type: DataTypes.STRING(45),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo TEL_RAMAL deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 45) {
            throw new Error("O TEL_RAMAL deve ter no máximo 45 caracteres");
          }
        },
      },
    },
    TEL_CONTATO: {
      type: DataTypes.STRING(80),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo TEL_CONTATO deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 80) {
            throw new Error("O TEL_CONTATO deve ter no máximo 80 caracteres");
          }
        },
      },
    },
    TEL_OBS: {
      type: DataTypes.STRING(255),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo TEL_OBS deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 255) {
            throw new Error("O TEL_OBS deve ter no máximo 255 caracteres");
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: "TELEFONES",
    createdAt: "CRIADO_EM",
    updatedAt: "ATUALIZADO_EM",
    freezeTableName: true,
  });
  return TELEFONES;
};