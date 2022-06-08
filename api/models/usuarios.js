"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class USUARIOS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    USUARIOS.init({
        USERNAME: DataTypes.STRING,
        SENHA: DataTypes.STRING,
        COD_FUNCIONARIO: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: "USUARIOS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return USUARIOS;
};