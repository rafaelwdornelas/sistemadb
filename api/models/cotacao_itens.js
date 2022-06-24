"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class COTACAO_ITENS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  COTACAO_ITENS.init(
    {
      COTACAO_ID: DataTypes.INTEGER,
      PRODUTO: DataTypes.INTEGER,
      PRODUTOCOD: DataTypes.STRING(60),
      PRODUTODESC: DataTypes.STRING(120),
      PRODUTOUND: DataTypes.STRING(3),
      QUANTIDADE: DataTypes.FLOAT,
      VALORORIGINAL: DataTypes.FLOAT,
      VALORUNT: DataTypes.FLOAT,
      VALORTOTAL: DataTypes.FLOAT,
      DESCONTOPERC: DataTypes.FLOAT,
      DESCONTOVALOR: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "COTACAO_ITENS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      freezeTableName: true,
    }
  );

  return COTACAO_ITENS;
};
