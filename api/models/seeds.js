"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class seeds extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  seeds.init({
    arquivo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "seeds",
    timestamps: false,
  });
  seeds.removeAttribute("id");
  return seeds;
};