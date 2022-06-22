"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      Permission.belongsToMany(models.Role, {
        through: "RolePermission",
        as: "roles",
        foreignKey: "perm_id",
      });
    }
  }
  Permission.init(
    {
      perm_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      perm_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Permission",
      timestamps: false,
    }
  );
  return Permission;
};
