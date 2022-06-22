"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  RolePermission.init(
    {
      role_id: DataTypes.INTEGER,
      perm_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RolePermission",
      timestamps: false,
    }
  );
  return RolePermission;
};
