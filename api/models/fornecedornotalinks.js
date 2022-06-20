"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FORNECEDORNOTALINKS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  FORNECEDORNOTALINKS.init(
    {
      FORNECEDOR: DataTypes.INTEGER,
      PRODUTO: DataTypes.INTEGER,
      COD_FORNECEDOR: DataTypes.STRING,
      MULTIPLICADOR: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "FORNECEDORNOTALINKS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      freezeTableName: true,
    }
  );
  return FORNECEDORNOTALINKS;
};
