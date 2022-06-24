"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class COTACAO_CABS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  COTACAO_CABS.init(
    {
      CLIENTE: DataTypes.INTEGER,
      LOJA: DataTypes.INTEGER,
      VENDEDOR: DataTypes.INTEGER,
      USUARIO: DataTypes.INTEGER,
      STATUS: DataTypes.INTEGER,
      VALIDADE: DataTypes.STRING,
      DESCONTOPERC: DataTypes.FLOAT,
      DESCONTOVALOR: DataTypes.FLOAT,
      TOTAL: DataTypes.FLOAT,
      OBS: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "COTACAO_CABS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      deletedAt: "DELETADO_EM",
      freezeTableName: true,
      paranoid: true,
    }
  );
  return COTACAO_CABS;
};
