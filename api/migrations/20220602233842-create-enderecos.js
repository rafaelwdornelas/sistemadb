"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("ENDERECOS", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            END_CLI: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            END_TIPO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            },
            END_CEP: {
                type: Sequelize.STRING(10),
                defaultValue: "",
                allowNull: false,
            },
            END_RUA: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            },
            END_NUMERO: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            END_BAIRRO: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            },
            END_EST: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            },
            END_MUNICIPIO: {
                type: Sequelize.STRING(60),
                defaultValue: "",
                allowNull: false,
            },
            END_COMP: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            },
            END_CODMUN: {
                type: Sequelize.STRING(7),
                defaultValue: "",
                allowNull: false,
            },
            END_REFERENCIA: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            },
            END_REGIAO: {
                type: Sequelize.STRING(3),
                defaultValue: "",
                allowNull: false,
            },
            END_CPAIS: {
                type: Sequelize.INTEGER,
                defaultValue: 1058,
                allowNull: false,
            }, //Código do País  1058=Brasil
            END_NCPAIS: {
                type: Sequelize.STRING(60),
                defaultValue: "BRASIL",
                allowNull: false,
            }, //Nome do País Brasil ou BRASIL
            CRIADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            ATUALIZADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            DELETADO_EM: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("ENDERECOS");
    },
};