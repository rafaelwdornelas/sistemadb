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
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_NOME deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 60) {
            throw new Error("O LJ_NOME deve ter no máximo 100 caracteres");
          }
        },
      },
    }, //Nome ou razão social da empresa
    LJ_MOME_FANTASIA: {
      type: DataTypes.STRING(100),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_MOME_FANTASIA deve ser um string e não " +
                            typeof dado
            );
          } else if (dado.length > 60) {
            throw new Error(
              "O LJ_MOME_FANTASIA deve ter no máximo 100 caracteres"
            );
          }
        },
      },
    }, //Nome fantasia da empresa
    LJ_IMAGEM64: {
      type: DataTypes.TEXT,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_IMAGEM64 deve ser um string e não " + typeof dado
            );
          }
        },
      },
    }, //Base 64 da foto da empresa
    LJ_MATRIZ_FILIAL: {
      type: DataTypes.STRING(1),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_MATRIZ_FILIAL deve ser uma string e não " +
                            typeof dado
            );
          } else if (dado != "1" && dado != "2") {
            throw new Error(
              "O LJ_MATRIZ_FILIAL deve ser  matriz (1) ou filial (2)"
            );
          }
        },
      },
    }, //Se a empresa é uma matriz (1) ou filial (2)
    LJ_TIPO: {
      type: DataTypes.STRING(2),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_TIPO deve ser uma string e não " + typeof dado
            );
          } else if (dado != "PF" && dado != "PJ") {
            throw new Error(
              "O LJ_TIPO deve ser PF(Pessoa Física) ou PJ(Pessoa Jurídica)"
            );
          }
        },
      },
    }, //O tipo da conta, se é PF(Pessoa Física) ou PJ(Pessoa Jurídica)
    LJ_CPF_CNPJ: {
      type: DataTypes.STRING(14),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_CPF_CNPJ deve ser um string e não " + typeof dado
            );
          } else if (dado.length < 11 && dado.length > 0) {
            throw new Error("O LJ_CPF_CNPJ deve ter no mínimo 11 caracteres");
          } else if (dado.length > 14) {
            throw new Error(
              "O campo LJ_CPF_CNPJ deve ter no máximo 14 caracteres"
            );
          }
        },
      },
    }, //CPF ou CNPJ da empresa
    LJ_IE: {
      type: DataTypes.STRING(45),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_IE deve ser uma string e não " + typeof dado
            );
          } else if (dado.length < 14 && dado.length > 0) {
            throw new Error("O campo LJ_IE deve ter no mínimo 14 caracteres");
          }
        },
      },
    }, //Inscrição estadual da empresa
    LJ_IM: {
      type: DataTypes.STRING(45),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_IM deve ser uma string e não " + typeof dado
            );
          } else if (dado.length < 5 && dado.length > 0) {
            throw new Error("O campo LJ_IM deve ter no mínimo 5 caracteres");
          }
        },
      },
    }, //Inscrição municipal da empresa
    LJ_CNAE: {
      type: DataTypes.STRING(7),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_CNAE deve ser uma string e não " + typeof dado
            );
          } else if (dado.length != 7 && dado.length != 0) {
            throw new Error("O campo LJ_CNAE deve ter 7 caracteres");
          }
        },
      },
    }, //O CNAE principal da empresa
    LJ_REGIME_TRIBUTARIO: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo LJ_REGIME_TRIBUTARIO deve ser uma number e não " +
                            typeof dado
            );
          }
        },
      },
    }, //Regime tributário usado na NF-e/NFC-e, referece ao C21(CRT) na documentação do SEFAZ. Onde: 1=Simples Nacional; 2=Simples Nacional, excesso sublimite de receita bruta; 3=Regime Normal.
    LJ_REGIME_ESP_TRIBUTARIO: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo LJ_REGIME_ESP_TRIBUTARIO deve ser uma number e não " +
                            typeof dado
            );
          }
        },
      },
    }, //Regime especial de tributação usado na NF-e/NFC-e, referece ao W22g(cRegTrib) na documentação do SEFAZ. Onde: 1=Microempresa Municipal; 2=Estimativa; 3=Sociedade de Profissionais; 4=Cooperativa; 5=Microempresário Individual (MEI); 6=Microempresário e Empresa de Pequeno Porte
    LJ_ID_CSC_PROD: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_ID_CSC_PROD deve ser uma string e não " +
                            typeof dado
            );
          }
        },
      },
    }, //ID do código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
    LJ_CSC_PROD: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_CSC_PROD deve ser uma string e não " + typeof dado
            );
          }
        },
      },
    }, //Código de segurança do contribuinte para emissão no ambiente de produção da SEFAZ, disponivél através do portal da Receita do seu estado.
    LJ_ID_CSC_HOMOL: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_ID_CSC_HOMOL deve ser uma string e não " +
                            typeof dado
            );
          }
        },
      },
    }, //ID do código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
    LJ_CSC_HOMOL: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_CSC_HOMOL deve ser uma string e não " + typeof dado
            );
          }
        },
      },
    }, //Código de segurança do contribuinte para emissão no ambiente de homologação da SEFAZ, disponivél através do portal da Receita do seu estado.
    LJ_EMAIL: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_EMAIL deve ser uma string e não " + typeof dado
            );
          }
        },
      },
    }, //E-mail da empresa
    LJ_RESPONSAVEL: {
      type: DataTypes.STRING(100),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_RESPONSAVEL deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 100) {
            throw new Error(
              "O campo LJ_RESPONSAVEL deve ter no máximo 100 caracteres"
            );
          }
        },
      },
    }, //Nome do responsável da empresa
    LJ_RESPONSAVEL_TEL: {
      type: DataTypes.STRING(20),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_RESPONSAVEL_TEL deve ser um string e não " +
                            typeof dado
            );
          } else if (dado.length > 20) {
            throw new Error(
              "O campo LJ_RESPONSAVEL_TEL deve ter no máximo 100 caracteres"
            );
          }
        },
      },
    }, // Telefone do responsável da empresa
    LJ_OBS: {
      type: DataTypes.TEXT,
    }, //Algumas observações internas
    LJ_SITE: {
      type: DataTypes.STRING(100),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_SITE deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 20) {
            throw new Error(
              "O campo LJ_SITE deve ter no máximo 100 caracteres"
            );
          }
        },
      },
    }, //Link do site da empresa
    LJ_END_CEP: {
      type: DataTypes.STRING(10),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_CEP deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 10) {
            throw new Error(
              "O campo LJ_END_CEP deve ter no máximo 100 caracteres"
            );
          }
        },
      },
    }, //CEP do endereço
    LJ_END_RUA: {
      type: DataTypes.STRING(255),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_RUA deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 255) {
            throw new Error(
              "O campo LJ_END_RUA deve ter no máximo 100 caracteres"
            );
          }
        },
      },
    }, //Nome da rua ou avenida
    LJ_END_NUMERO: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo LJ_END_NUMERO deve ser uma number e não " + typeof dado
            );
          }
        },
      },
    }, //Número do endereço
    LJ_END_BAIRRO: {
      type: DataTypes.STRING(45),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_BAIRRO deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 45) {
            throw new Error(
              "O campo LJ_END_BAIRRO deve ter no máximo 45 caracteres"
            );
          }
        },
      },
    }, //Nome do bairro
    LJ_END_EST: {
      type: DataTypes.STRING(2),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_EST deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 2) {
            throw new Error(
              "O campo LJ_END_EST deve ter no máximo 2 caracteres"
            );
          }
        },
      },
    }, //Estado
    LJ_END_MUNICIPIO: {
      type: DataTypes.STRING(60),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_MUNICIPIO deve ser um string e não " +
                            typeof dado
            );
          } else if (dado.length > 60) {
            throw new Error(
              "O campo LJ_END_MUNICIPIO deve ter no máximo 60 caracteres"
            );
          }
        },
      },
    }, //Identificação da cidade
    LJ_END_COMP: {
      type: DataTypes.STRING(45),
      uppercase: true,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_MUNICIPIO deve ser um string e não " +
                            typeof dado
            );
          } else if (dado.length > 45) {
            throw new Error(
              "O campo LJ_END_MUNICIPIO deve ter no máximo 45 caracteres"
            );
          }
        },
      },
    }, //Algum complemento caso possua
    LJ_END_CODMUN: {
      type: DataTypes.STRING(7),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_CODMUN deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 7) {
            throw new Error(
              "O campo LJ_END_CODMUN deve ter no máximo 7 caracteres"
            );
          }
        },
      },
    }, //IBGE da cidade
    LJ_TEL_TIPO: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo LJ_TEL_TIPO deve ser uma number e não " + typeof dado
            );
          }
        },
      },
    }, //O tipo do telefone, Fixo (1) ou Celular (2)
    LJ_TEL_DDD: {
      type: DataTypes.STRING(2),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_END_CODMUN deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 2) {
            throw new Error(
              "O campo LJ_END_CODMUN deve ter no máximo 2 caracteres"
            );
          }
        },
      },
    }, //DDD do telefone
    LJ_TEL_NUMERO: {
      type: DataTypes.STRING(9),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_TEL_NUMERO deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 9) {
            throw new Error(
              "O campo LJ_TEL_NUMERO deve ter no máximo 9 caracteres"
            );
          }
        },
      },
    }, //Número do telefone
    LJ_TEL_RAMAL: {
      type: DataTypes.STRING(45),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_TEL_RAMAL deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 45) {
            throw new Error(
              "O campo LJ_TEL_RAMAL deve ter no máximo 45 caracteres"
            );
          }
        },
      },
    }, //Ramal do telefone
    LJ_SMTP_HOST: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_SMTP_HOST deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 255) {
            throw new Error(
              "O campo LJ_SMTP_HOST deve ter no máximo 255 caracteres"
            );
          }
        },
      },
    }, //Servidor SMTP
    LJ_SMTP_PORT: {
      type: DataTypes.INTEGER,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "number") {
            throw new Error(
              "O campo LJ_SMTP_PORT deve ser uma number e não " + typeof dado
            );
          }
        },
      },
    }, //Porta do servidor SMTP
    LJ_SMTP_NOME: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_SMTP_NOME deve ser um string e não " + typeof dado
            );
          } else if (dado.length > 255) {
            throw new Error(
              "O campo LJ_SMTP_NOME deve ter no máximo 255 caracteres"
            );
          }
        },
      },
    }, //Nome de exibição no e-mail.
    LJ_SMTP_AUTH_USER: {
      type: DataTypes.STRING(255),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_SMTP_AUTH_USER deve ser um string e não " +
                            typeof dado
            );
          } else if (dado.length > 255) {
            throw new Error(
              "O campo LJ_SMTP_AUTH_USER deve ter no máximo 255 caracteres"
            );
          }
        },
      },
    }, //Usuário de autenticação
    LJ_SMTP_AUTH_PASS: {
      type: DataTypes.STRING(255),
    }, //Senha de autenticação
    LJ_SMTP_SSL: {
      type: DataTypes.BOOLEAN,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "boolean") {
            throw new Error(
              "O campo LJ_SMTP_SSL deve ser um boolean e não " + typeof dado
            );
          }
        },
      },
    }, //Usar SSL?
    LJ_SMTP_TLS: {
      type: DataTypes.BOOLEAN,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "boolean") {
            throw new Error(
              "O campo LJ_SMTP_TLS deve ser um boolean e não " + typeof dado
            );
          }
        },
      },
    }, //Usar TLS?
    LJ_SMTP_AUTH: {
      type: DataTypes.BOOLEAN,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "boolean") {
            throw new Error(
              "O campo LJ_SMTP_AUTH deve ser um boolean e não " + typeof dado
            );
          }
        },
      },
    }, //Usar autenticação?
    LJ_CERTIFICADO: {
      type: DataTypes.TEXT,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_CERTIFICADO deve ser um string e não " + typeof dado
            );
          }
        },
      },
    }, //Certificado digital
    LJ_CERTIFICADO_KEY: {
      type: DataTypes.STRING(80),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_CERTIFICADO_KEY deve ser um string e não " +
                            typeof dado
            );
          } else if (dado.length > 80) {
            throw new Error(
              "O campo LJ_CERTIFICADO_KEY deve ter no máximo 80 caracteres"
            );
          }
        },
      },
    }, //Chave privada do certificado
    LJ_CERTIFICADO_PASS: {
      type: DataTypes.STRING(80),
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_CERTIFICADO_PASS deve ser um string e não " +
                            typeof dado
            );
          } else if (dado.length > 80) {
            throw new Error(
              "O campo LJ_CERTIFICADO_PASS deve ter no máximo 80 caracteres"
            );
          }
        },
      },
    }, //Senha do certificado
    LJ_LICENCADEUSO: {
      type: DataTypes.TEXT,
      validate: {
        funcaoValidadora: function(dado) {
          if (typeof dado != "string") {
            throw new Error(
              "O campo LJ_LICENCADEUSO deve ser um string e não " +
                            typeof dado
            );
          }
        },
      },
    }, //Senha do certificado
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