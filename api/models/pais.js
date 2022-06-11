"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PAIS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  PAIS.init({
    PAIS_COD: DataTypes.INTEGER,
    PAIS_NOME: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "PAIS",
    freezeTableName: true,
  });
  PAIS.removeAttribute("id");
  PAIS.removeAttribute("createdAt");
  PAIS.removeAttribute("updatedAt");
  return PAIS;
};