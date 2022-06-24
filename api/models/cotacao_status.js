"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class COTACAO_STATUS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  COTACAO_STATUS.init(
    {
      DESCRICAO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "COTACAO_STATUS",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return COTACAO_STATUS;
};
