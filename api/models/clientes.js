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
            CLIENTES.belongsTo(models.FORMAPAGS, {
                foreignKey: "CLI_FPAGAMENTO",
            });
            CLIENTES.belongsTo(models.CRI_FAMILIAS, {
                foreignKey: "CLI_FAMILIA",
            });
        }
    }
    CLIENTES.init({
        CLI_LOJA: {
            type: DataTypes.STRING(1),
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_LOJA deve ser uma string e não " + typeof dado
                        );
                    }
                },
            },
        }, // Código da loja
        CLI_ATIVO: {
            type: DataTypes.STRING(1),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    console.log(typeof dado);
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_ATIVO deve ser uma string e não " + typeof dado
                        );
                    } else if (dado != "N" && dado != "S") {
                        throw new Error("O CLI_ATIVO deve ser N ou S");
                    }
                },
            },
        }, // N = inativo, S = true
        CLI_FAMILIA: {
            type: DataTypes.INTEGER,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo CLI_FAMILIA deve ser um number e não " + typeof dado
                        );
                    }
                },
            },
        }, //Familia de tipos de cliente
        CLI_FORNECEDOR: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_FORNECEDOR deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, //Fornecedor
        CLI_TRANSPORTADORA: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_TRANSPORTADORA deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, //Transportadora
        CLI_NOME: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_NOME deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 3 && dado.length > 0) {
                        throw new Error("O CLI_NOME deve ter no mínimo 3 caracteres");
                    } else if (dado.length > 60) {
                        throw new Error("O CLI_NOME deve ter no máximo 60 caracteres");
                    }
                },
            },
        }, // Nome do cliente ou da empresa
        CLI_NOME_FANTASIA: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_NOME_FANTASIA deve ser um string e não " +
                            typeof dado
                        );
                    } else if (dado.length < 3 && dado.length > 0) {
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
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_SEXO deve ser um string e não " + typeof dado
                        );
                    } else if (dado != "M" && dado != "F" && dado != "") {
                        throw new Error("O sexo deve ser M ou F ou vazio");
                    }
                },
            },
        }, // Sexo do cliente
        CLI_TIPO: {
            type: DataTypes.STRING(1),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_TIPO deve ser um string e não " + typeof dado
                        );
                    } else if (dado != "F" && dado != "J" && dado != "") {
                        throw new Error("O tipo deve ser F ou J ou vazio");
                    }
                },
            },
        }, // F - Fisica, J - Juridica
        CLI_CPF_CNPJ: {
            type: DataTypes.STRING(14),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_CPF_CNPJ deve ser um string e não " + typeof dado
                        );
                    } else if (dado.length < 11 && dado.length > 0) {
                        throw new Error("O CPF/CNPJ deve ter no mínimo 11 caracteres");
                    } else if (dado.length > 14) {
                        throw new Error(
                            "O nome CPF/CNPJ deve ter no máximo 14 caracteres"
                        );
                    }
                },
            },
        }, //CPF ou CNPJ
        CLI_RG: {
            type: DataTypes.STRING(15),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_RG deve ser uma string e não " + typeof dado
                        );
                    } else if (dado.length < 5 && dado.length > 0) {
                        throw new Error("O CLI_RG deve ter no mínimo 5 caracteres");
                    }
                },
            },
        }, // RG
        CLI_DTNASC: {
            type: DataTypes.STRING(8),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_RG deve ser uma string e não " + typeof dado
                        );
                    } else if (dado.length < 8 && dado.length > 0) {
                        throw new Error(
                            "A data de nascimento deve ter no mínimo 8 caracteres"
                        );
                    }
                },
            },
        }, // Data de Nascimento
        CLI_ESTRANGEIRO: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_ESTRANGEIRO deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, //  Flag para avisar que ele é ou não um estrangeiro
        CLI_PASSAPORTE: {
            type: DataTypes.STRING(20),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_PASSAPORTE deve ser uma string e não " +
                            typeof dado
                        );
                    } else if (dado.length < 5 && dado.length > 0) {
                        throw new Error(
                            "A data de CLI_PASSAPORTE deve ter no mínimo 5 caracteres"
                        );
                    }
                },
            },
        }, //  Passaporte do cliente, caso o mesmo seja estrangeiro
        CLI_EMAIL: {
            type: DataTypes.STRING(60),
            lowercase: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email inválido",
                },
                funcaoValidadora: function(dado) {
                    if (dado.length < 5 && dado.length > 0) {
                        throw new Error(
                            "A data de CLI_EMAIL deve ter no mínimo 10 caracteres"
                        );
                    }
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
                funcaoValidadora: function(dado) {
                    if (dado.length < 5 && dado.length > 0) {
                        throw new Error(
                            "A data de CLI_EMAIL_COB deve ter no mínimo 10 caracteres"
                        );
                    }
                },
            },
        }, //Email do cliente para cobrança e envios de faturas
        CLI_SITE: {
            type: DataTypes.STRING(60),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_SITE deve ser uma string e não " + typeof dado
                        );
                    } else if (dado.length < 5 && dado.length > 0) {
                        throw new Error(
                            "A data de CLI_SITE deve ter no mínimo 5 caracteres"
                        );
                    }
                },
            },
        }, //Url do site
        CLI_IE: {
            type: DataTypes.STRING(18),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_IE deve ser uma string e não " + typeof dado
                        );
                    } else if (dado.length < 14 && dado.length > 0) {
                        throw new Error(
                            "O campo CLI_IE deve ter no mínimo 14 caracteres"
                        );
                    }
                },
            },
        }, // Inscrição Estadual
        CLI_IM: {
            type: DataTypes.STRING(18),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_IM deve ser uma string e não " + typeof dado
                        );
                    } else if (dado.length < 5 && dado.length > 0) {
                        throw new Error("O campo CLI_IM deve ter no mínimo 5 caracteres");
                    }
                },
            },
        }, // Inscrição Municipal
        CLI_IR: {
            type: DataTypes.STRING(18),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_IR deve ser uma string e não " + typeof dado
                        );
                    } else if (dado.length < 5 && dado.length > 0) {
                        throw new Error("O campo CLI_IR deve ter no mínimo 5 caracteres");
                    }
                },
            },
        }, // Inscrição Rural
        CLI_CNAE: {
            type: DataTypes.STRING(7),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_IR deve ser uma string e não " + typeof dado
                        );
                    } else if (dado.length != 7 && dado.length != 0) {
                        throw new Error("O campo CLI_CNAE deve ter 7 caracteres");
                    }
                },
            },
        }, // CNAE
        CLI_NATUREZA: {
            type: DataTypes.INTEGER,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo CLI_NATUREZA deve ser um number e não " + typeof dado
                        );
                    }
                },
            },
        }, // Natureza da Operação
        CLI_VENDEDOR: {
            type: DataTypes.INTEGER,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo CLI_VENDEDOR deve ser um number e não " + typeof dado
                        );
                    }
                },
            },
        }, // Código do Vendedor Padrão
        CLI_COMISSAO: {
            type: DataTypes.FLOAT,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo CLI_COMISSAO deve ser um number e não " + typeof dado
                        );
                    }
                },
            },
        }, // Comissão do Vendedor
        CLI_FRETE_TIPO: {
            type: DataTypes.STRING(1),
            uppercase: true,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "string") {
                        throw new Error(
                            "O campo CLI_TIPO deve ser um string e não " + typeof dado
                        );
                    } else if (dado != "F" && dado != "C" && dado != "") {
                        throw new Error("O tipo deve ser F ou C ou vazio");
                    }
                },
            },
        }, // Tipo de Frete Padrão do Cliente F - FOB , C - CIF
        CLI_AIRRF: {
            type: DataTypes.FLOAT,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "number") {
                        throw new Error(
                            "O campo CLI_AIRRF deve ser um number e não " + typeof dado
                        );
                    }
                },
            },
        }, // IRRF Alicota
        CLI_ISS_RECOLHE: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_ISS_RECOLHE deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, // ISS Recolhe?
        CLI_COD_SUFRAMA: { type: DataTypes.STRING(9), uppercase: true }, // Código do Suframa
        CLI_DESC_SUFRAMA: { type: DataTypes.STRING(1), uppercase: true }, // Desconto do Suframa?
        CLI_ISS_PRECO: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_ISS_PRECO deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // ISS no Preço?
        CLI_INSS_RECOLHE: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_INSS_RECOLHE deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, // INSS Recolhe?

        CLI_CONFINS_RECOLHE: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_CONFINS_RECOLHE deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, // CONFINS Recolhe?
        CLI_CSLL_RECOLHE: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_CSLL_RECOLHE deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, // CSLL Recolhe?
        CLI_PIS_RECOLHE: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_PIS_RECOLHE deve ser um boolean e não " +
                            typeof dado
                        );
                    }
                },
            },
        }, // PIS Recolhe?
        CLI_SIMPLESSC: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_SIMPLESSC deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // Optante pelo Simples/SC?
        CLI_TARE: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_TARE deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // Contribuinte TARE?
        CLI_FRETISS: { type: DataTypes.STRING(1), uppercase: true }, // Forma de retenção do ISS
        CLI_MABATIMENTO: DataTypes.STRING(1), // 1 - Cálculo do Sistema, 2 - Efetua Retenção,3 - Não Efetua Retenção (Modo de Abatimento de Imposto)
        CLI_IRRF: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_IRRF deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // Recolhe IRRF?
        CLI_ICMS: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_ICMS deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // Contribuinte do ICMS?
        CLI_FINAL: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_FINAL deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, //Controle para a NFe/NFCe para saber se o cliente é consumidor final
        CLI_CERVEJA: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_CERVEJA deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, //Controle para NFe/NFCe para saber se o cliente é microcervejaria
        CLI_VMIRRF: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_VMIRRF deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // Valor minimo IRRF?
        CLI_FOMEZERO: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_FOMEZERO deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // Participação do Fome Zero?
        CLI_SIMPLES: {
            type: DataTypes.BOOLEAN,
            validate: {
                funcaoValidadora: function(dado) {
                    if (typeof dado != "boolean") {
                        throw new Error(
                            "O campo CLI_SIMPLES deve ser um boolean e não " + typeof dado
                        );
                    }
                },
            },
        }, // Optante pelo Simples Nacional?
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