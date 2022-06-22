"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RolePermissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      role_id: {
        type: Sequelize.INTEGER,
      },
      perm_id: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("RolePermissions");
  },
};
