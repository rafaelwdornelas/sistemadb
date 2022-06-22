"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class USUARIOS extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      USUARIOS.hasMany(models.FUNCIONARIOS, {
        foreignKey: "id",
        as: "FUNCIONARIO",
      });
      USUARIOS.hasOne(models.Role, {
        foreignKey: "id",
        as: "role",
      });
    }
  }
  USUARIOS.init(
    {
      USERNAME: DataTypes.STRING,
      SENHA: DataTypes.STRING,
      COD_FUNCIONARIO: DataTypes.INTEGER,
      REFRESHTOKEN: DataTypes.TEXT,
      ROLE_ID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "USUARIOS",
      createdAt: "CRIADO_EM",
      updatedAt: "ATUALIZADO_EM",
      deletedAt: "DELETADO_EM",
      freezeTableName: true,
      paranoid: true,
    }
  );
  return USUARIOS;
};
