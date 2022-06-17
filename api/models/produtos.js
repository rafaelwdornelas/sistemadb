"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PRODUTOS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  PRODUTOS.init(
    {
      COD: {
        type: DataTypes.STRING(60),
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo COD deve ser uma string e não " + typeof dado
              );
            } else if (dado.length > 60 && dado.length > 0) {
              throw new Error("O campo COD deve ter no máximo 60 caracteres");
            }
          },
        },
      }, //Código do produto
      ATIVO: {
        type: DataTypes.BOOLEAN,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "boolean") {
              throw new Error(
                "O campo ATIVO deve ser um boolean e não " + typeof dado
              );
            }
          },
        },
      }, //Produto ativo?
      FORMULADO: {
        type: DataTypes.BOOLEAN,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "boolean") {
              throw new Error(
                "O campo FORMULADO deve ser um boolean e não " + typeof dado
              );
            }
          },
        },
      }, //Produto é formulado?
      DESCRICAO: {
        type: DataTypes.STRING(120),
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo DESCRICAO deve ser uma string e não " + typeof dado
              );
            } else if (dado.length > 120 && dado.length > 0) {
              throw new Error(
                "O campo DESCRICAO deve ter no máximo 120 caracteres"
              );
            }
          },
        },
      }, //Descrição do produto
      FAMILIA: {
        type: DataTypes.INTEGER,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo FAMILIA deve ser um number e não " + typeof dado
              );
            }
          },
        },
      }, //Família do produto
      UND: {
        type: DataTypes.STRING(3),
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo UND deve ser uma string e não " + typeof dado
              );
            } else if (dado.length > 3 && dado.length > 0) {
              throw new Error("O campo UND deve ter no máximo 3 caracteres");
            }
          },
        },
      }, //Cód da Unidade do produto
      COD_BARRAS: {
        type: DataTypes.STRING(128),
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo COD_BARRAS deve ser uma string e não " + typeof dado
              );
            } else if (dado.length > 128 && dado.length > 0) {
              throw new Error(
                "O campo COD_BARRAS deve ter no máximo 128 caracteres"
              );
            }
          },
        },
      },
      NCM: {
        type: DataTypes.STRING(10),
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo NCM deve ser uma string e não " + typeof dado
              );
            } else if (dado.length > 10 && dado.length > 0) {
              throw new Error("O campo NCM deve ter no máximo 10 caracteres");
            }
          },
        },
      },
      PRECO_VENDA: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PRECO_VENDA deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      PRECO_CUSTO: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PRECO_CUSTO deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      PRECO_PORCENTAGEM: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PRECO_PORCENTAGEM deve ser um number e não " +
                  typeof dado
              );
            }
          },
        },
      },
      COMISSAO: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo COMISSAO deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      FORNECEDOR: {
        type: DataTypes.INTEGER,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo FORNECEDOR deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      MARCA: {
        type: DataTypes.STRING(120),
        uppercase: true,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo MARCA deve ser uma string e não " + typeof dado
              );
            } else if (dado.length > 120 && dado.length > 0) {
              throw new Error(
                "O campo MARCA deve ter no máximo 120 caracteres"
              );
            }
          },
        },
      },
      ALIQ_ICMS: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo ALIQ_ICMS deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      ALIQ_IPI: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo ALIQ_IPI deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      ALIQ_ISS: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo ALIQ_ISS deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      ALIQ_FECP: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo ALIQ_FECP deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      REDUCAO_INSS: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo REDUCAO_INSS deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      REDUCAO_IRRF: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo REDUCAO_IRRF deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      REDUCAO_PIS: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo REDUCAO_PIS deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      REDUCAO_COFINS: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo REDUCAO_COFINS deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      PERC_CSLL: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PERC_CSLL deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      PERC_COFINS: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PERC_COFINS deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      PERC_PIS: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PERC_PIS deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
      CNAE: {
        type: DataTypes.STRING(7),
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "string") {
              throw new Error(
                "O campo CNAE deve ser uma string e não " + typeof dado
              );
            } else if (dado.length > 7 && dado.length > 0) {
              throw new Error("O campo CNAE deve ter no máximo 7 caracteres");
            }
          },
        },
      },
      PESSO_BRUTO: {
        type: DataTypes.FLOAT,
        validate: {
          funcaoValidadora: function (dado) {
            if (typeof dado != "number") {
              throw new Error(
                "O campo PESSO_BRUTO deve ser um number e não " + typeof dado
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "PRODUTOS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      deletedAt: "DELETADO_EM",
      freezeTableName: true,
      paranoid: true,
    }
  );
  return PRODUTOS;
};
