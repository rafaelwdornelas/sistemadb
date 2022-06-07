"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("FUNCIONARIOS", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            FUN_MSOCIAL: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Numero matricula eSocial
            FUN_NOME: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Nome do funcionario
            FUN_NOME_MAE: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Nome da mae do funcionario
            FUN_NOME_PAI: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Nome do pai do funcionario
            FUN_SEXO: {
                type: Sequelize.STRING(1),
                defaultValue: "",
                allowNull: false,
            }, //Sexo do funcionario M ou F
            FUN_NASCIMENTO: {
                type: Sequelize.STRING(8),
                defaultValue: "",
                allowNull: false,
            }, //Data de nascimento do funcionario YYYYMMDD
            FUN_EST_CIVIL: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            }, //Estado civil do funcionario 1: Solteiro 2: Casado 3: Divorciado 4: Viúvo
            FUN_NACIONALIDADE: {
                type: Sequelize.INTEGER,
                defaultValue: 1058,
                allowNull: false,
            }, //Nacionalidade do funcionario
            FUN_EMAIL: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Email do funcionario
            FUN_DEFICIENTE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //Deficiente fisico do funcionario true ou false
            FUN_OBS_DEFICIENCIA: {
                type: Sequelize.TEXT,
                defaultValue: "",
                allowNull: false,
            }, //Observacoes sobre deficiencia do funcionario
            FUN_DATA_ADMISSAO: {
                type: Sequelize.STRING(8),
                defaultValue: "",
                allowNull: false,
            }, //Data de admissao do funcionario YYYYMMDD
            FUN_DATA_DEMISSAO: {
                type: Sequelize.STRING(8),
                defaultValue: "",
                allowNull: false,
            }, //Data de demissao do funcionario YYYYMMDD
            FUN_RECEB_BANCO: {
                type: Sequelize.INTEGER(80),
                defaultValue: "",
                allowNull: false,
            }, //Recebe banco do funcionario
            FUN_RECEB_AG: {
                type: Sequelize.STRING(10),
                defaultValue: "",
                allowNull: false,
            }, //Recebe agencia do funcionario
            FUN_RECEB_CONTA: {
                type: Sequelize.STRING(10),
                defaultValue: "",
                allowNull: false,
            }, //Recebe conta do funcionario
            FUN_GRUPO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
                references: {
                    model: "FUNCIONARIOGRUPOS",
                    key: "id",
                },
            }, //Grupo do funcionario
            FUN_CARGO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
                references: {
                    model: "FUNCIONARIOCARGOS",
                    key: "id",
                },
            }, //Cargo do funcionario
            FUN_SALARIO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            }, //Salario do funcionario
            FUN_TIPO_CONTRATO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            }, //Tipo de contrato do funcionario 1: CLT 2: PJ 3: PJ/CLT
            FUN_DATA_FIM_CONTRATO: {
                type: Sequelize.STRING(8),
                defaultValue: "",
                allowNull: false,
            }, //Data de fim do contrato do funcionario YYYYMMDD
            FUN_P_ADIANTAMENTO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            }, //Percentual de adiantamento do funcionario
            FUN_CPF: {
                type: Sequelize.STRING(11),
                defaultValue: "",
                allowNull: false,
            }, //CPF do funcionario
            FUN_PIS: {
                type: Sequelize.STRING(11),
                defaultValue: "",
                allowNull: false,
            }, //PIS do funcionario
            FUN_RG: {
                type: Sequelize.STRING(15),
                defaultValue: "",
                allowNull: false,
            }, //RG do funcionario
            FUN_RG_EMISSAO: {
                type: Sequelize.STRING(8),
                defaultValue: "",
                allowNull: false,
            }, //data de emissão
            FUN_RG_UF: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            }, //UF do RG
            FUN_RG_OEM: {
                type: Sequelize.STRING(3),
                defaultValue: "",
                allowNull: false,
            }, //orgão  emissor
            FUN_END_RUA: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Endereco da rua do funcionario
            FUN_END_NUMERO: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
            }, //Numero do endereco do funcionario
            FUN_END_BAIRRO: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, //Bairro do funcionario
            FUN_END_COMP: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, //Complemento do funcionario
            FUN_END_MUNICIPIO: {
                type: Sequelize.STRING(60),
                defaultValue: "",
                allowNull: false,
            }, //Municipio do funcionario
            FUN_END_EST: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            }, //Estado do funcionario
            FUN_END_CEP: {
                type: Sequelize.STRING(10),
                defaultValue: "",
                allowNull: false,
            }, //CEP do funcionario
            FUN_TEL_DDD: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            }, //DDD do telefone do funcionario
            FUN_TEL_NUMERO: {
                type: Sequelize.STRING(9),
                defaultValue: "",
                allowNull: false,
            }, //Numero do telefone do funcionario
            FUN_CELULAR_DDD: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            }, //DDD do celular do funcionario
            FUN_CELULAR_NUMERO: {
                type: Sequelize.STRING(9),
                defaultValue: "",
                allowNull: false,
            }, //Numero do celular do funcionario
            FUN_EMER_CONTATO: {
                type: Sequelize.STRING(80),
                defaultValue: "",
                allowNull: false,
            }, //nome do contato de emergencia do funcionario
            FUN_EMER_DDD: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            }, //DDD do telefone de emergencia do funcionario
            FUN_EMER_NUMERO: {
                type: Sequelize.STRING(9),
                defaultValue: "",
                allowNull: false,
            }, //Numero do telefone de emergencia do funcionario
            CRIADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            }, //Data de criacao do registro
            ATUALIZADO_EM: {
                allowNull: false,
                type: Sequelize.DATE,
            }, //Data de atualizacao do registro
            DELETADO_EM: {
                allowNull: true,
                type: Sequelize.DATE,
            }, //Data de exclusao do registro
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable("FUNCIONARIOS");
    },
};