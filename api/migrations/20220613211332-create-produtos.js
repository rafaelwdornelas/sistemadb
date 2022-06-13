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
        type: Sequelize.STRING,
      },
      ATIVO: {
        type: Sequelize.BOOLEAN,
      },
      FORMULADO: {
        type: Sequelize.BOOLEAN,
      },
      DESCRICAO: {
        type: Sequelize.STRING,
      },
      FAMILIA: {
        type: Sequelize.INTEGER,
      },
      UND: {
        type: Sequelize.INTEGER,
      },
      LOJA: {
        type: Sequelize.INTEGER,
      },
      COD_BARRAS: {
        type: Sequelize.STRING,
      },
      NCM: {
        type: Sequelize.STRING,
      },
      PRECO_VENDA: {
        type: Sequelize.FLOAT,
      },
      PRECO_CUSTO: {
        type: Sequelize.FLOAT,
      },
      PRECO_PORCENTAGEM: {
        type: Sequelize.FLOAT,
      },
      COMISSAO: {
        type: Sequelize.FLOAT,
      },
      FORNECEDOR: {
        type: Sequelize.INTEGER,
      },
      MARCA: {
        type: Sequelize.STRING,
      },
      ALIQ_ICMS: {
        type: Sequelize.FLOAT,
      },
      ALIQ_IPI: {
        type: Sequelize.FLOAT,
      },
      ALIQ_ISS: {
        type: Sequelize.FLOAT,
      },
      ALIQ_FECP: {
        type: Sequelize.FLOAT,
      },
      REDUCAO_INSS: {
        type: Sequelize.FLOAT,
      },
      REDUCAO_IRRF: {
        type: Sequelize.FLOAT,
      },
      REDUCAO_PIS: {
        type: Sequelize.FLOAT,
      },
      REDUCAO_COFINS: {
        type: Sequelize.FLOAT,
      },
      PERC_CSLL: {
        type: Sequelize.FLOAT,
      },
      PERC_COFINS: {
        type: Sequelize.FLOAT,
      },
      PERC_PIS: {
        type: Sequelize.FLOAT,
      },
      CNAE: {
        type: Sequelize.STRING,
      },
      PESSO_BRUTO: {
        type: Sequelize.FLOAT,
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
