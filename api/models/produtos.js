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
      COD: DataTypes.STRING,
      ATIVO: DataTypes.BOOLEAN,
      FORMULADO: DataTypes.BOOLEAN,
      DESCRICAO: DataTypes.STRING,
      FAMILIA: DataTypes.INTEGER,
      UND: DataTypes.INTEGER,
      LOJA: DataTypes.INTEGER,
      COD_BARRAS: DataTypes.STRING,
      NCM: DataTypes.STRING,
      PRECO_VENDA: DataTypes.FLOAT,
      PRECO_CUSTO: DataTypes.FLOAT,
      PRECO_PORCENTAGEM: DataTypes.FLOAT,
      COMISSAO: DataTypes.FLOAT,
      FORNECEDOR: DataTypes.INTEGER,
      MARCA: DataTypes.STRING,
      ALIQ_ICMS: DataTypes.FLOAT,
      ALIQ_IPI: DataTypes.FLOAT,
      ALIQ_ISS: DataTypes.FLOAT,
      ALIQ_FECP: DataTypes.FLOAT,
      REDUCAO_INSS: DataTypes.FLOAT,
      REDUCAO_IRRF: DataTypes.FLOAT,
      REDUCAO_PIS: DataTypes.FLOAT,
      REDUCAO_COFINS: DataTypes.FLOAT,
      PERC_CSLL: DataTypes.FLOAT,
      PERC_COFINS: DataTypes.FLOAT,
      PERC_PIS: DataTypes.FLOAT,
      CNAE: DataTypes.STRING,
      PESSO_BRUTO: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "PRODUTOS",
    }
  );
  return PRODUTOS;
};
