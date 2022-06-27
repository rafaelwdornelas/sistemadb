"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "CLIENTES",
      [
        {
          CLI_LOJA: "1",
          CLI_NOME: "ANA PAULA CIARIELLO",
          CLI_FAMILIA: 1,
          CLI_FPAGAMENTO: 1,
          CLI_SEXO: "F",
          CLI_TIPO: "F",
          CLI_CPF_CNPJ: "14714093843",
          CLI_RG: "17407884",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          CLI_LOJA: "1",
          CLI_NOME: "MAKIO SUGANO",
          CLI_FAMILIA: 1,
          CLI_FPAGAMENTO: 1,
          CLI_SEXO: "M",
          CLI_TIPO: "F",
          CLI_CPF_CNPJ: "47652250897",
          CLI_RG: "6617378",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "ENDERECOS",
      [
        {
          END_CLI: 2,
          END_TIPO: 1,
          END_RUA: "R CANDIDO VALE",
          END_NUMERO: 146,
          END_BAIRRO: "TATUAPE",
          END_EST: "SP",
          END_MUNICIPIO: "SÃO PAULO",
          END_COMP: "COMP. CONSUMIDOR",
          END_CODMUN: "3165206",
          END_CEP: "03068010",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          END_CLI: 3,
          END_TIPO: 1,
          END_RUA: "R TAUBATE",
          END_NUMERO: 30,
          END_BAIRRO: "VILA CARRAO",
          END_EST: "SP",
          END_MUNICIPIO: "SÃO PAULO",
          END_COMP: "COMP. CONSUMIDOR",
          END_CODMUN: "3165206",
          END_CEP: "03433000",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "TELEFONES",
      [
        {
          TEL_CLI: 2,
          TEL_TIPO: 2,
          TEL_DDD: "11",
          TEL_NUMERO: "981539976",
          TEL_RAMAL: "",
          TEL_CONTATO: "ANA PAULA",
          TEL_OBS: "",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          TEL_CLI: 3,
          TEL_TIPO: 2,
          TEL_DDD: "11",
          TEL_NUMERO: "967814713",
          TEL_RAMAL: "",
          TEL_CONTATO: "MAKIO",
          TEL_OBS: "",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "FUNCIONARIOS",
      [
        {
          FUN_NOME: "RAFAEL WESLEY LOPES DORNELAS",
          FUN_SEXO: "M",
          FUN_NASCIMENTO: "19850518",
          FUN_EST_CIVIL: "1",
          FUN_EMAIL: "RAFAELWDORNELASSTL@GMAIL.COM",
          FUN_GRUPO: 1,
          FUN_CARGO: 1,
          FUN_SALARIO: 6580,
          FUN_CPF: "33927287806",
          FUN_RG: "352178542",
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "USUARIOS",
      [
        {
          USERNAME: "rafael",
          SENHA: "rafael",
          COD_FUNCIONARIO: 1,
          ROLE_ID: 1,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "PRODUTOS",
      [
        {
          COD: "PD01",
          DESCRICAO: "TPH REP. 4g A1 ",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 43.6,
          PRECO_CUSTO: 28.36,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          COD: "PD12",
          DESCRICAO: "BROQUEIRO 21 F FAVA (MF162)",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 24.2,
          PRECO_CUSTO: 15,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          COD: "PD54",
          DESCRICAO: "SIGNUM 3g OS1",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 115.5,
          PRECO_CUSTO: 74.05,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          COD: "PD92",
          DESCRICAO: "IPS DSIGN DEN. 20g A3",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 118.95,
          PRECO_CUSTO: 95.16,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          COD: "PD104",
          DESCRICAO: "TETRIC N CERAM 3,5g A3",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 70,
          PRECO_CUSTO: 45.5,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          COD: "PD187",
          DESCRICAO: "PESTILO AVULSO JON",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 3.1,
          PRECO_CUSTO: 1.7,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          COD: "PD215",
          DESCRICAO: "BROCA KG FG 3083",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 4.4,
          PRECO_CUSTO: 2.77,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
        {
          COD: "PD268",
          DESCRICAO: "LAMPARINA KONNEN",
          FAMILIA: 1,
          UND: "UND",
          PRECO_VENDA: 12.2,
          PRECO_CUSTO: 7.8,
          CRIADO_EM: new Date(),
          ATUALIZADO_EM: new Date(),
        },
      ],
      {}
    );
  },
};
