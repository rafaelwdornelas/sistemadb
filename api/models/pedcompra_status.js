"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PEDCOMPRA_STATUS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  PEDCOMPRA_STATUS.init(
    {
      DESCRICAO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PEDCOMPRA_STATUS",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return PEDCOMPRA_STATUS;
};
