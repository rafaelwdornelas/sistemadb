'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FUNCIONARIOCARGOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FUNCG_NOME: {
        type: Sequelize.STRING
      },
      FUNCG_GRUPO: {
        type: Sequelize.INTEGER
      },
      FUNCG_SALARIO: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FUNCIONARIOCARGOs');
  }
};