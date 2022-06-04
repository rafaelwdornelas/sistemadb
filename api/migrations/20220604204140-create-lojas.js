"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("LOJAS", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            LJ_NOME: {
                type: Sequelize.STRING,
            }, //Nome ou razão social da empresa
            LJ_MOME_FANTASIA: {
                type: Sequelize.STRING,
            }, //Nome fantasia da empresa
            LJ_IMAGEM64: {
                type: Sequelize.STRING,
            }, //Base 64 da foto da empresa
            LJ_MATRIZ_FILIAL: {
                type: Sequelize.STRING,
            }, //Se a empresa é uma matriz (1) ou filial (2)
            LJ_TIPO: {
                type: Sequelize.STRING,
            }, //O tipo da conta, se é PF(Pessoa Física) ou PJ(Pessoa Jurídica)
            LJ_CPF_CNPJ: {
                type: Sequelize.STRING,
            }, //CPF ou CNPJ da empresa
            LJ_IE: {
                type: Sequelize.STRING,
            }, //Inscrição estadual da empresa
            LJ_IM: {
                type: Sequelize.STRING,
            }, //Inscrição municipal da empresa
            LJ_CNAE: {
                type: Sequelize.STRING,
            }, //O CNAE principal da empresa
            LJ_REGIME_TRIBUTARIO: {
                type: Sequelize.INTEGER,
            }, //Regime tributário usado na NF-e/NFC-e, referece ao C21(CRT) na documentação do SEFAZ. Onde: 1=Simples Nacional; 2=Simples Nacional, excesso sublimite de receita bruta; 3=Regime Normal.
            LJ_REGIME_ESP_TRIBUTARIO: {
                type: Sequelize.INTEGER,
            }, //Regime especial de tributação usado na NF-e/NFC-e, referece ao W22g(cRegTrib) na documentação do SEFAZ. Onde: 1=Microempresa Municipal; 2=Estimativa; 3=Sociedade de Profissionais; 4=Cooperativa; 5=Microempresário Individual (MEI); 6=Microempresário e Empresa de Pequeno Porte
            LJ_ID_CSC_PROD: {
                type: Sequelize.STRING,
            }, //ID do código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_CSC_PROD: {
                type: Sequelize.STRING,
            }, //Código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_ID_CSC_HOMOL: {
                type: Sequelize.STRING,
            }, //ID do código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_CSC_HOMOL: {
                type: Sequelize.STRING,
            }, //Código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_EMAIL: {
                type: Sequelize.STRING,
            }, //E-mail da empresa
            LJ_RESPONSAVEL: {
                type: Sequelize.STRING,
            }, //Nome do responsável da empresa
            LJ_RESPONSAVEL_TEL: {
                type: Sequelize.STRING,
            }, // Telefone do responsável da empresa
            LJ_OBS: {
                type: Sequelize.STRING,
            }, //Algumas observações internas
            LJ_SITE: {
                type: Sequelize.STRING,
            }, //Link do site da empresa
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
        await queryInterface.dropTable("LOJAS");
    },
};