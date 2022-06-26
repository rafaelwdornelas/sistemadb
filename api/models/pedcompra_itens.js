"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PEDCOMPRA_ITENS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  PEDCOMPRA_ITENS.init(
    {
      PEDCOMPRA_ID: DataTypes.INTEGER,
      PRODUTO: DataTypes.INTEGER,
      PRODUTOCOD: DataTypes.STRING(60),
      PRODUTODESC: DataTypes.STRING(120),
      PRODUTOUND: DataTypes.STRING(3),
      QUANTIDADE: DataTypes.FLOAT,
      VALORUNT: DataTypes.FLOAT,
      VALORTOTAL: DataTypes.FLOAT,
      NECESSIDADE: DataTypes.FLOAT,
      OBSITEM: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "PEDCOMPRA_ITENS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      freezeTableName: true,
    }
  );
  return PEDCOMPRA_ITENS;
};
