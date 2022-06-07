"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class FUNCIONARIOS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    FUNCIONARIOS.init({
        FUN_MSOCIAL: {
            type: DataTypes.STRING(100),
        }, //Numero matricula eSocial
        FUN_NOME: {
            type: DataTypes.STRING(100),
            uppercase: true,
        }, //Nome do funcionario
        FUN_NOME_MAE: {
            type: DataTypes.STRING(100),
            uppercase: true,
        }, //Nome da mae do funcionario
        FUN_NOME_PAI: {
            type: DataTypes.STRING(100),
            uppercase: true,
        }, //Nome do pai do funcionario
        FUN_SEXO: {
            type: DataTypes.STRING(1),
            uppercase: true,
        }, //Sexo do funcionario M ou F
        FUN_NASCIMENTO: {
            type: DataTypes.STRING(8),
        }, //Data de nascimento do funcionario YYYYMMDD
        FUN_EST_CIVIL: {
            type: DataTypes.INTEGER,
        }, //Estado civil do funcionario 1: Solteiro 2: Casado 3: Divorciado 4: Viúvo
        FUN_NACIONALIDADE: {
            type: DataTypes.INTEGER,
        }, //Nacionalidade do funcionario
        FUN_EMAIL: {
            type: DataTypes.STRING(255),
        }, //Email do funcionario
        FUN_DEFICIENTE: {
            type: DataTypes.BOOLEAN,
        }, //Deficiente fisico do funcionario true ou false
        FUN_OBS_DEFICIENCIA: {
            type: DataTypes.TEXT,
        }, //Observacoes sobre deficiencia do funcionario
        FUN_DATA_ADMISSAO: {
            type: DataTypes.STRING(8),
        }, //Data de admissao do funcionario YYYYMMDD
        FUN_DATA_DEMISSAO: {
            type: DataTypes.STRING(8),
        }, //Data de demissao do funcionario YYYYMMDD
        FUN_RECEB_BANCO: {
            type: DataTypes.INTEGER(80),
        }, //Recebe banco do funcionario
        FUN_RECEB_AG: {
            type: DataTypes.STRING(10),
        }, //Recebe agencia do funcionario
        FUN_RECEB_CONTA: {
            type: DataTypes.STRING(10),
        }, //Recebe conta do funcionario
        FUN_GRUPO: {
            type: DataTypes.INTEGER,
        }, //Grupo do funcionario
        FUN_CARGO: {
            type: DataTypes.INTEGER,
        }, //Cargo do funcionario
        FUN_SALARIO: {
            type: DataTypes.FLOAT,
        }, //Salario do funcionario
        FUN_TIPO_CONTRATO: {
            type: DataTypes.INTEGER,
        }, //Tipo de contrato do funcionario 1: CLT 2: PJ 3: PJ/CLT
        FUN_DATA_FIM_CONTRATO: {
            type: DataTypes.STRING(8),
        }, //Data de fim do contrato do funcionario YYYYMMDD
        FUN_P_ADIANTAMENTO: {
            type: DataTypes.FLOAT,
        }, //Percentual de adiantamento do funcionario
        FUN_CPF: {
            type: DataTypes.STRING(11),
        }, //CPF do funcionario
        FUN_PIS: {
            type: DataTypes.STRING(11),
        }, //PIS do funcionario
        FUN_RG: {
            type: DataTypes.STRING(15),
        }, //RG do funcionario
        FUN_RG_EMISSAO: {
            type: DataTypes.STRING(8),
        }, //data de emissão
        FUN_RG_UF: {
            type: DataTypes.STRING(2),
        }, //UF do RG
        FUN_RG_OEM: {
            type: DataTypes.STRING(3),
        }, //orgão  emissor
        FUN_END_RUA: {
            type: DataTypes.STRING(255),
            uppercase: true,
        }, //Endereco da rua do funcionario
        FUN_END_NUMERO: {
            type: DataTypes.INTEGER,
        }, //Numero do endereco do funcionario
        FUN_END_BAIRRO: {
            type: DataTypes.STRING(45),
            uppercase: true,
        }, //Bairro do funcionario
        FUN_END_COMP: {
            type: DataTypes.STRING(45),
            uppercase: true,
        }, //Complemento do funcionario
        FUN_END_MUNICIPIO: {
            type: DataTypes.STRING(60),
            uppercase: true,
        }, //Municipio do funcionario
        FUN_END_EST: {
            type: DataTypes.STRING(2),
            uppercase: true,
        }, //Estado do funcionario
        FUN_END_CEP: {
            type: DataTypes.STRING(10),
        }, //CEP do funcionario
        FUN_TEL_DDD: {
            type: DataTypes.STRING(2),
        }, //DDD do telefone do funcionario
        FUN_TEL_NUMERO: {
            type: DataTypes.STRING(9),
        }, //Numero do telefone do funcionario
        FUN_CELULAR_DDD: {
            type: DataTypes.STRING(2),
        }, //DDD do celular do funcionario
        FUN_CELULAR_NUMERO: {
            type: DataTypes.STRING(9),
        }, //Numero do celular do funcionario
        FUN_EMER_CONTATO: {
            type: DataTypes.STRING(80),
            uppercase: true,
        }, //nome do contato de emergencia do funcionario
        FUN_EMER_DDD: {
            type: DataTypes.STRING(2),
        }, //DDD do telefone de emergencia do funcionario
        FUN_EMER_NUMERO: {
            type: DataTypes.STRING(9),
        }, //Numero do telefone de emergencia do funcionario
    }, {
        sequelize,
        modelName: "FUNCIONARIOS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return FUNCIONARIOS;
};