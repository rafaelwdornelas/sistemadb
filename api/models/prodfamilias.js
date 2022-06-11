"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PRODFAMILIAS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  PRODFAMILIAS.init({
    PROD_NOME: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "PRODFAMILIAS",
    createdAt: "CRIADO_EM",
    updatedAt: "ATUALIZADO_EM",
    deletedAt: "DELETADO_EM",
    freezeTableName: true,
    paranoid: true,
  });
  return PRODFAMILIAS;
};