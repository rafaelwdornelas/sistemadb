"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CFOPS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  CFOPS.init(
    {
      CFOP: DataTypes.INTEGER,
      DESC_SIMPLES: DataTypes.TEXT,
      DESC_APLICACAO: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "CFOPS",
      freezeTableName: true,
      timestamps: false,
    }
  );

  CFOPS.removeAttribute("id");
  CFOPS.removeAttribute("createdAt");
  CFOPS.removeAttribute("updatedAt");
  return CFOPS;
};
