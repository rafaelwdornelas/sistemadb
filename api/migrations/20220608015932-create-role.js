"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Roles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      role_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      role_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Roles");
  },
};
