"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("seeds", {
      arquivo: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("seeds");
  },
};