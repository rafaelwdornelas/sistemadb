"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("PAIS", {
            PAIS_COD: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            PAIS_NOME: {
                type: Sequelize.STRING,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("PAIS");
    },
};