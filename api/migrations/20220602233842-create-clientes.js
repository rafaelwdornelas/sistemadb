"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("CLIENTES", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            CLI_LOJA: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
                references: {
                    model: "LOJAS",
                    key: "id",
                },
            }, // Código da loja
            CLI_ATIVO: {
                type: Sequelize.STRING(1),
                defaultValue: "S",
                allowNull: false,
            }, // N = inativo, S = true
            CLI_FAMILIA: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
                allowNull: false,
                references: {
                    model: "CLI_FAMILIAS",
                    key: "id",
                },
            }, // Familia de tipos de clientes
            CLI_FORNECEDOR: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // O Cadastro é de um fornecedor?
            CLI_TRANSPORTADORA: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // O cadastro é de um transportador?
            CLI_NOME: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, // Nome do cliente ou da empresa
            CLI_NOME_FANTASIA: {
                type: Sequelize.STRING(100),
                defaultValue: "",
                allowNull: false,
            }, // Nome  fantasia da empresa
            CLI_SEXO: {
                type: Sequelize.STRING(1),
                defaultValue: "",
                allowNull: false,
            }, // F - Feminino, M - Masculino
            CLI_TIPO: {
                type: Sequelize.STRING(1),
                defaultValue: "F",
                allowNull: false,
            }, // F - Fisica, J - Juridica
            CLI_CPF_CNPJ: {
                type: Sequelize.STRING(14),
                defaultValue: "",
                unique: true, //NÃO PODE TER DUPLICADO
                allowNull: false,
            }, //CPF ou CNPJ
            CLI_RG: {
                type: Sequelize.STRING(15),
                defaultValue: "",
                allowNull: false,
            }, // RG
            CLI_DTNASC: {
                type: Sequelize.STRING(8),
                defaultValue: "",
                allowNull: false,
            }, // Data de Nascimento
            CLI_ESTRANGEIRO: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //  Flag para avisar que ele é ou não um estrangeiro
            CLI_PASSAPORTE: {
                type: Sequelize.STRING(20),
                defaultValue: "",
                allowNull: false,
            }, // Passaporte do cliente, caso o mesmo seja estrangeiro
            CLI_EMAIL: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Email do cliente
            CLI_EMAIL_COB: {
                type: Sequelize.STRING(255),
                defaultValue: "",
                allowNull: false,
            }, //Email do cliente para cobrança e envios de faturas
            CLI_SITE: {
                type: Sequelize.STRING(60),
                defaultValue: "",
                allowNull: false,
            }, //Url do site
            CLI_IE: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, // Inscrição Estadual
            CLI_IM: {
                type: Sequelize.STRING(45),
                defaultValue: "",
                allowNull: false,
            }, // Inscrição Municipal
            CLI_IR: {
                type: Sequelize.STRING(20),
                defaultValue: "",
                allowNull: false,
            }, // Inscrição Rural
            CLI_CNAE: {
                type: Sequelize.STRING(7),
                defaultValue: "",
                allowNull: false,
            }, // CNAE
            CLI_NATUREZA: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
            }, // Natureza da Operação
            CLI_VENDEDOR: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
            }, // Código do Vendedor Padrão
            CLI_COMISSAO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            }, // Comissão do Vendedor
            CLI_FRETE_TIPO: {
                type: Sequelize.STRING(1),
                defaultValue: "",
                allowNull: false,
            }, // Tipo de Frete Padrão do Cliente F - FOB , C - CIF
            CLI_AIRRF: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            }, // IRRF Alicota
            CLI_ISS_RECOLHE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //  RECOLHER - ISS?
            CLI_COD_SUFRAMA: {
                type: Sequelize.STRING(9),
                defaultValue: "",
                allowNull: false, // Código do Cliente no Sistema SUFRAMA
            },
            CLI_DESC_SUFRAMA: {
                type: Sequelize.STRING(1),
                defaultValue: "",
                allowNull: false,
            }, // S: SIM, N: NÃO, I: ISMS (Desc p/ SUFRAMA)
            CLI_ISS_PRECO: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // ISS NO PREÇO?
            CLI_INSS_RECOLHE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // (Recolhe INSS?)
            CLI_CONFINS_RECOLHE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // (Recolhe CONFINS?)
            CLI_CSLL_RECOLHE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //  (Recolhe CSLL?)
            CLI_PIS_RECOLHE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //  (Recolhe PIS?)
            CLI_SIMPLESSC: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // (Optante SIMPLES/SC?)
            CLI_TARE: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, //  (Contribuinte TARE?)
            CLI_FRETISS: {
                type: Sequelize.STRING(1),
                defaultValue: "",
                allowNull: false,
            }, // 1 - Cons Vrl Mínimo, 2 - Sempre Retém (Forma de retenção do ISS)
            CLI_MABATIMENTO: {
                type: Sequelize.STRING(1),
                defaultValue: "",
                allowNull: false,
            }, // 1 - Cálculo do Sistema, 2 - Efetua Retenção,3 - Não Efetua Retenção (Modo de Abatimento de Imposto)
            CLI_IRRF: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // Recolhe IRRF?
            CLI_ICMS: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // Contribuinte do ICMS?
            CLI_FINAL: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false,
            }, // Controle para a NFe/NFCe para saber se o cliente é consumidor final
            CLI_CERVEJA: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // Controle para NFe/NFCe para saber se o cliente é microcervejaria
            CLI_VMIRRF: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // Valor minimo IRRF?
            CLI_FOMEZERO: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // Participação Fome Zero?
            CLI_SIMPLES: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }, // Participação Simples Nacional?
            CLI_TPJ: {
                type: Sequelize.STRING(1),
                defaultValue: "",
                allowNull: false,
            }, // 1 - ME - Micro Empresa, 2 - EPP - Empresa de Pequeno Porte,3 - MEI - Microempreendedor Individual,4 - Não Optante (Tipo de Pessoa Juridica?)
            CLI_CTRANSPORTADORA: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }, // Código da Transportadora Padrão
            CLI_FPAGAMENTO: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: "FORMAPAGS",
                    key: "id",
                },
            }, // Forma de Pagamento Padrão
            CLI_TABELA: {
                type: Sequelize.INTEGER,
                allowNull: true,
            }, // Código da Tabela de Preço Padrão
            CLI_DESCONTO: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false,
            }, // Desconto Padrão
            CLI_SENHA: {
                type: Sequelize.STRING(20),
                defaultValue: "",
                allowNull: false,
            }, // Senha do Cliente
            CLI_OBS: {
                type: Sequelize.TEXT,
                defaultValue: "",
                allowNull: false,
            }, // observações
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
        await queryInterface.dropTable("CLIENTES");
    },
};