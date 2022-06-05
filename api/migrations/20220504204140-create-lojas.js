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
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Nome ou razão social da empresa
            LJ_MOME_FANTASIA: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Nome fantasia da empresa
            LJ_IMAGEM64: {
                type: Sequelize.TEXT,
                defaultValue: "",
                allowNull: false,
            }, //Base 64 da foto da empresa
            LJ_MATRIZ_FILIAL: {
                type: Sequelize.STRING(1),
                defaultValue: "1",
                allowNull: false,
            }, //Se a empresa é uma matriz (1) ou filial (2)
            LJ_TIPO: {
                type: Sequelize.STRING(2),
                defaultValue: "PJ",
                allowNull: false,
            }, //O tipo da conta, se é PF(Pessoa Física) ou PJ(Pessoa Jurídica)
            LJ_CPF_CNPJ: {
                type: Sequelize.STRING(14),
                defaultValue: "",
                unique: true, //NÃO PODE TER DUPLICADO
                allowNull: false,
            }, //CPF ou CNPJ da empresa
            LJ_IE: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, //Inscrição estadual da empresa
            LJ_IM: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, //Inscrição municipal da empresa
            LJ_CNAE: {
                type: Sequelize.STRING(7),
                defaultValue: "",
                allowNull: false,
            }, //O CNAE principal da empresa
            LJ_REGIME_TRIBUTARIO: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }, //Regime tributário usado na NF-e/NFC-e, referece ao C21(CRT) na documentação do SEFAZ. Onde: 1=Simples Nacional; 2=Simples Nacional, excesso sublimite de receita bruta; 3=Regime Normal.
            LJ_REGIME_ESP_TRIBUTARIO: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }, //Regime especial de tributação usado na NF-e/NFC-e, referece ao W22g(cRegTrib) na documentação do SEFAZ. Onde: 1=Microempresa Municipal; 2=Estimativa; 3=Sociedade de Profissionais; 4=Cooperativa; 5=Microempresário Individual (MEI); 6=Microempresário e Empresa de Pequeno Porte
            LJ_ID_CSC_PROD: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            }, //ID do código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_CSC_PROD: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            }, //Código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_ID_CSC_HOMOL: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            }, //ID do código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_CSC_HOMOL: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            }, //Código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
            LJ_EMAIL: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //E-mail da empresa
            LJ_RESPONSAVEL: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Nome do responsável da empresa
            LJ_RESPONSAVEL_TEL: {
                type: Sequelize.STRING(20),
                defaultValue: "",
                allowNull: false,
            }, // Telefone do responsável da empresa
            LJ_OBS: {
                type: Sequelize.TEXT,
                defaultValue: "",
                allowNull: false,
            }, //Algumas observações internas
            LJ_SITE: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, //Link do site da empresa
            LJ_END_CEP: {
                type: Sequelize.STRING(10),
                defaultValue: "",
                allowNull: false,
            }, //CEP do endereço
            LJ_END_RUA: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Nome da rua ou avenida
            LJ_END_NUMERO: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }, //Número do endereço
            LJ_END_BAIRRO: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, //Nome do bairro
            LJ_END_EST: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            }, //Estado
            LJ_END_MUNICIPIO: {
                type: Sequelize.STRING(60),
                defaultValue: "",
                allowNull: false,
            }, //Identificação da cidade
            LJ_END_COMP: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, //Algum complemento caso possua
            LJ_END_CODMUN: {
                type: Sequelize.STRING(7),
                defaultValue: "",
                allowNull: false,
            }, //IBGE da cidade
            LJ_TEL_TIPO: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
            }, //O tipo do telefone, Fixo (1) ou Celular (2)
            LJ_TEL_DDD: {
                type: Sequelize.STRING(2),
                defaultValue: "",
                allowNull: false,
            }, //DDD do telefone
            LJ_TEL_NUMERO: {
                type: Sequelize.STRING(9),
                defaultValue: "",
                allowNull: false,
            }, //Número do telefone
            LJ_TEL_RAMAL: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, //Ramal do telefone
            LJ_SMTP_HOST: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Servidor SMTP
            LJ_SMTP_PORT: {
                type: Sequelize.INTEGER,
                defaultValue: 25,
                allowNull: false,
            }, //Porta do servidor SMTP
            LJ_SMTP_NOME: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Nome de exibição no e-mail.
            LJ_SMTP_AUTH_USER: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Usuário de autenticação
            LJ_SMTP_AUTH_PASS: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Senha de autenticação
            LJ_SMTP_SSL: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //Usar SSL?
            LJ_SMTP_TLS: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //Usar TLS?
            LJ_SMTP_AUTH: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //Usar autenticação?
            LJ_CERTIFICADO: {
                type: Sequelize.TEXT,
                defaultValue: "",
                allowNull: false,
            }, //Certificado digital
            LJ_CERTIFICADO_KEY: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            }, //Chave privada do certificado
            LJ_CERTIFICADO_PASS: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: false,
            }, //Senha do certificado
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