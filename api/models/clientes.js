"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CLIENTES extends Model {
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            CLIENTES.hasMany(models.TELEFONES, {
                foreignKey: "TEL_CLI",
                onDelete: "CASCADE",
                as: "TELEFONES",
            });
            CLIENTES.hasMany(models.ENDERECOS, {
                foreignKey: "END_CLI",
                onDelete: "CASCADE",
                as: "ENDERECOS",
            });
        }
    }
    CLIENTES.init({
        CLI_LOJA: DataTypes.STRING(1), // Código da loja
        CLI_ATIVO: { type: DataTypes.STRING(1), uppercase: true }, // N = inativo, S = true
        CLI_FAMILIA: DataTypes.INTEGER, //Familia de tipos de cliente
        CLI_FORNECEDOR: DataTypes.BOOLEAN,
        CLI_TRANSPORTADORA: DataTypes.BOOLEAN,
        CLI_NOME: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (dado.length < 3) {
                        throw new Error("O nome deve ter no mínimo 3 caracteres");
                    } else if (dado.length > 60) {
                        throw new Error("O nome deve ter no máximo 60 caracteres");
                    }
                },
            },
        }, // Nome do cliente ou da empresa
        CLI_NOME_FANTASIA: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (dado.length < 3) {
                        throw new Error(
                            "O nome fantasia deve ter no mínimo 3 caracteres"
                        );
                    } else if (dado.length > 60) {
                        throw new Error(
                            "O nome fantasia deve ter no máximo 60 caracteres"
                        );
                    }
                },
            },
        }, // Nome fansasia da empresa
        CLI_SEXO: {
            type: DataTypes.STRING(1),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (dado != "M" && dado != "F") {
                        throw new Error("O sexo deve ser M ou F");
                    }
                },
            },
        }, // Sexo do cliente
        CLI_TIPO: {
            type: DataTypes.STRING(1),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (dado != "F" && dado != "J") {
                        throw new Error("O tipo deve ser F ou J");
                    }
                },
            },
        }, // F - Fisica, J - Juridica
        CLI_CPF_CNPJ: {
            type: DataTypes.STRING(14),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (dado.length < 11) {
                        throw new Error("O CPF/CNPJ deve ter no mínimo 11 caracteres");
                    } else if (dado.length > 14) {
                        throw new Error(
                            "O nome CPF/CNPJ deve ter no máximo 14 caracteres"
                        );
                    }
                },
            },
        }, //CPF ou CNPJ
        CLI_RG: { type: DataTypes.STRING(15), uppercase: true }, // RG
        CLI_DTNASC: {
            type: DataTypes.STRING(8),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (dado.length < 8) {
                        throw new Error(
                            "A data de nascimento deve ter no mínimo 8 caracteres"
                        );
                    }
                },
            },
        }, // Data de Nascimento
        CLI_ESTRANGEIRO: DataTypes.BOOLEAN, //  Flag para avisar que ele é ou não um estrangeiro
        CLI_PASSAPORTE: { type: DataTypes.STRING(20), uppercase: true }, //  Passaporte do cliente, caso o mesmo seja estrangeiro
        CLI_EMAIL: {
            type: DataTypes.STRING(60),
            lowercase: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email inválido",
                },
            },
        }, //Email do cliente
        CLI_EMAIL_COB: {
            type: DataTypes.STRING(60),
            lowercase: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email inválido",
                },
            },
        }, //Email do cliente para cobrança e envios de faturas
        CLI_SITE: { type: DataTypes.STRING(60), uppercase: true }, //Url do site
        CLI_IE: { type: DataTypes.STRING(18), uppercase: true }, // Inscrição Estadual
        CLI_IM: { type: DataTypes.STRING(18), uppercase: true }, // Inscrição Municipal
        CLI_IR: { type: DataTypes.STRING(18), uppercase: true }, // Inscrição Rural
        CLI_CNAE: { type: DataTypes.STRING(7), uppercase: true }, // CNAE
        CLI_NATUREZA: DataTypes.INTEGER, // Natureza da Operação
        CLI_VENDEDOR: DataTypes.INTEGER, // Código do Vendedor Padrão
        CLI_COMISSAO: DataTypes.FLOAT, // Comissão do Vendedor
        CLI_FRETE_TIPO: { type: DataTypes.STRING(1), uppercase: true }, // Tipo de Frete Padrão do Cliente F - FOB , C - CIF
        CLI_AIRRF: DataTypes.FLOAT, // IRRF Alicota
        CLI_ISS_RECOLHE: DataTypes.BOOLEAN, // ISS Recolhe?
        CLI_COD_SUFRAMA: { type: DataTypes.STRING(9), uppercase: true }, // Código do Suframa
        CLI_DESC_SUFRAMA: { type: DataTypes.STRING(1), uppercase: true }, // Desconto do Suframa?
        CLI_ISS_PRECO: DataTypes.BOOLEAN, // ISS no Preço?
        CLI_INSS_RECOLHE: DataTypes.BOOLEAN, // INSS Recolhe?
        CLI_CONFINS_RECOLHE: DataTypes.BOOLEAN, // CONFINS Recolhe?
        CLI_CSLL_RECOLHE: DataTypes.BOOLEAN, // CSLL Recolhe?
        CLI_PIS_RECOLHE: DataTypes.BOOLEAN, // PIS Recolhe?
        CLI_SIMPLESSC: DataTypes.BOOLEAN, // Optante pelo Simples/SC?
        CLI_TARE: DataTypes.BOOLEAN, // Contribuinte TARE?
        CLI_FRETISS: { type: DataTypes.STRING(1), uppercase: true }, // Forma de retenção do ISS
        CLI_MABATIMENTO: DataTypes.STRING(1), // 1 - Cálculo do Sistema, 2 - Efetua Retenção,3 - Não Efetua Retenção (Modo de Abatimento de Imposto)
        CLI_IRRF: DataTypes.BOOLEAN, // Recolhe IRRF?
        CLI_ICMS: DataTypes.BOOLEAN, // Contribuinte do ICMS?
        CLI_FINAL: DataTypes.BOOLEAN, //Controle para a NFe/NFCe para saber se o cliente é consumidor final
        CLI_CERVEJA: DataTypes.BOOLEAN, //Controle para NFe/NFCe para saber se o cliente é microcervejaria
        CLI_VMIRRF: DataTypes.BOOLEAN, // Valor minimo IRRF?
        CLI_FOMEZERO: DataTypes.BOOLEAN, // Participação do Fome Zero?
        CLI_SIMPLES: DataTypes.BOOLEAN, // Optante pelo Simples Nacional?
        CLI_TPJ: { type: DataTypes.STRING(1), uppercase: true }, // 1 - ME - Micro Empresa, 2 - EPP - Empresa de Pequeno Porte,3 - MEI - Microempreendedor Individual,4 - Não Optante (Tipo de Pessoa Juridica?)
        CLI_CTRANSPORTADORA: DataTypes.INTEGER, // Código da Transportadora
        CLI_FPAGAMENTO: DataTypes.INTEGER, // Forma de Pagamento Padrão
        CLI_TABELA: DataTypes.INTEGER, // Código da Tabela de Preço Padrão
        CLI_DESCONTO: DataTypes.FLOAT, // Desconto Padrão
        CLI_SENHA: DataTypes.STRING(20), // Senha do Cliente
        CLI_OBS: DataTypes.TEXT, // Observações
    }, {
        sequelize,
        modelName: "CLIENTES",
        createdAt: "CRIADO_EM",
        updatedAt: "ATUALIZADO_EM",
        deletedAt: "DELETADO_EM",
        freezeTableName: true,
        paranoid: true,
    });
    return CLIENTES;
};