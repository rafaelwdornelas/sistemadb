"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PRODUTOS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      COD: {
        type: Sequelize.STRING(60),
        defaultValue: "",
        allowNull: false,
      }, //Código do produto
      ATIVO: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      }, //Produto ativo?
      FORMULADO: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }, //Produto é formulado?
      DESCRICAO: {
        type: Sequelize.STRING(120),
        defaultValue: "",
        allowNull: false,
      }, //Descrição do produto
      FAMILIA: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, //Família do produto
      UND: {
        type: Sequelize.STRING(3),
        allowNull: true,
      }, //Cód da Unidade do produto
      COD_BARRAS: {
        type: Sequelize.STRING(128),
        defaultValue: "",
        allowNull: false,
      },
      NCM: {
        type: Sequelize.STRING(10),
        defaultValue: "",
        allowNull: false,
      },
      PRECO_VENDA: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      PRECO_CUSTO: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      PRECO_PORCENTAGEM: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      COMISSAO: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      FORNECEDOR: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "CLIENTES",
          key: "id",
        },
      },
      MARCA: {
        type: Sequelize.STRING(120),
        defaultValue: "",
        allowNull: false,
      },
      ALIQ_ICMS: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      ALIQ_IPI: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      ALIQ_ISS: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      ALIQ_FECP: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      REDUCAO_INSS: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      REDUCAO_IRRF: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      REDUCAO_PIS: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      REDUCAO_COFINS: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      PERC_CSLL: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      PERC_COFINS: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      PERC_PIS: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      CNAE: {
        type: Sequelize.STRING(7),
        defaultValue: "",
        allowNull: false,
      },
      PESSO_BRUTO: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
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
    await queryInterface.dropTable("PRODUTOS");
  },
};
