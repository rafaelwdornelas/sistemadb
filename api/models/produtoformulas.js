"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PRODUTOFORMULAS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  PRODUTOFORMULAS.init(
    {
      PRODUTO: DataTypes.INTEGER,
      ITEM: DataTypes.INTEGER,
      QUANTIDADE: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "PRODUTOFORMULAS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      freezeTableName: true,
    }
  );
  return PRODUTOFORMULAS;
};
