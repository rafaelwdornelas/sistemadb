"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Permissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      perm_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      perm_description: {
        type: Sequelize.STRING,
        unique: false,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Permissions");
  },
};
