"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class LOJAS extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    LOJAS.init({
        LJ_NOME: {
            type: DataTypes.STRING(100),
            uppercase: true,
        }, //Nome ou razão social da empresa
        LJ_MOME_FANTASIA: {
            type: DataTypes.STRING(100),
            uppercase: true,
        }, //Nome fantasia da empresa
        LJ_IMAGEM64: {
            type: DataTypes.TEXT,
        }, //Base 64 da foto da empresa
        LJ_MATRIZ_FILIAL: {
            type: DataTypes.STRING(1),
        }, //Se a empresa é uma matriz (1) ou filial (2)
        LJ_TIPO: {
            type: DataTypes.STRING(2),
            uppercase: true,
        }, //O tipo da conta, se é PF(Pessoa Física) ou PJ(Pessoa Jurídica)
        LJ_CPF_CNPJ: {
            type: DataTypes.STRING(14),
        }, //CPF ou CNPJ da empresa
        LJ_IE: {
            type: DataTypes.STRING(45),
        }, //Inscrição estadual da empresa
        LJ_IM: {
            type: DataTypes.STRING(45),
        }, //Inscrição municipal da empresa
        LJ_CNAE: {
            type: DataTypes.STRING(7),
        }, //O CNAE principal da empresa
        LJ_REGIME_TRIBUTARIO: {
            type: DataTypes.INTEGER,
        }, //Regime tributário usado na NF-e/NFC-e, referece ao C21(CRT) na documentação do SEFAZ. Onde: 1=Simples Nacional; 2=Simples Nacional, excesso sublimite de receita bruta; 3=Regime Normal.
        LJ_REGIME_ESP_TRIBUTARIO: {
            type: DataTypes.INTEGER,
        }, //Regime especial de tributação usado na NF-e/NFC-e, referece ao W22g(cRegTrib) na documentação do SEFAZ. Onde: 1=Microempresa Municipal; 2=Estimativa; 3=Sociedade de Profissionais; 4=Cooperativa; 5=Microempresário Individual (MEI); 6=Microempresário e Empresa de Pequeno Porte
        LJ_ID_CSC_PROD: {
            type: DataTypes.STRING,
        }, //ID do código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
        LJ_CSC_PROD: {
            type: DataTypes.STRING,
        }, //Código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
        LJ_ID_CSC_HOMOL: {
            type: DataTypes.STRING,
        }, //ID do código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
        LJ_CSC_HOMOL: {
            type: DataTypes.STRING,
        }, //Código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
        LJ_EMAIL: {
            type: DataTypes.STRING(255),
        }, //E-mail da empresa
        LJ_RESPONSAVEL: {
            type: DataTypes.STRING(100),
            uppercase: true,
        }, //Nome do responsável da empresa
        LJ_RESPONSAVEL_TEL: {
            type: DataTypes.STRING(20),
        }, // Telefone do responsável da empresa
        LJ_OBS: {
            type: DataTypes.TEXT,
        }, //Algumas observações internas
        LJ_SITE: {
            type: DataTypes.STRING(100),
        }, //Link do site da empresa
        LJ_END_CEP: {
            type: DataTypes.STRING(10),
        }, //CEP do endereço
        LJ_END_RUA: {
            type: DataTypes.STRING(255),
            uppercase: true,
        }, //Nome da rua ou avenida
        LJ_END_NUMERO: {
            type: DataTypes.INTEGER,
        }, //Número do endereço
        LJ_END_BAIRRO: {
            type: DataTypes.STRING(45),
            uppercase: true,
        }, //Nome do bairro
        LJ_END_EST: {
            type: DataTypes.STRING(2),
            uppercase: true,
        }, //Estado
        LJ_END_MUNICIPIO: {
            type: DataTypes.STRING(60),
            uppercase: true,
        }, //Identificação da cidade
        LJ_END_COMP: {
            type: DataTypes.STRING(45),
            uppercase: true,
        }, //Algum complemento caso possua
        LJ_END_CODMUN: {
            type: DataTypes.STRING(7),
        }, //IBGE da cidade
        LJ_TEL_TIPO: {
            type: DataTypes.INTEGER,
        }, //O tipo do telefone, Fixo (1) ou Celular (2)
        LJ_TEL_DDD: {
            type: DataTypes.STRING(2),
        }, //DDD do telefone
        LJ_TEL_NUMERO: {
            type: DataTypes.STRING(9),
        }, //Número do telefone
        LJ_TEL_RAMAL: {
            type: DataTypes.STRING(45),
            uppercase: true,
        }, //Ramal do telefone
    }, {
        sequelize,
        modelName: "LOJAS",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return LOJAS;
};