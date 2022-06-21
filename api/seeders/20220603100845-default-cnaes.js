/* eslint-disable indent */
"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "CNAES",
      [
        {
          id: "0111301",
          CN_CODIGO: "0111-3/01",
          CN_DESCRICAO: "CULTIVO DE ARROZ",
        },
        {
          id: "0111302",
          CN_CODIGO: "0111-3/02",
          CN_DESCRICAO: "CULTIVO DE MILHO",
        },
        {
          id: "0111303",
          CN_CODIGO: "0111-3/03",
          CN_DESCRICAO: "CULTIVO DE TRIGO",
        },
        {
          id: "0112101",
          CN_CODIGO: "0112-1/01",
          CN_DESCRICAO: "CULTIVO DE ALGODAO HERBACEO",
        },
        {
          id: "0113000",
          CN_CODIGO: "0113-0/00",
          CN_DESCRICAO: "CULTIVO DE CANA-DE-ACUCAR",
        },
        {
          id: "0114800",
          CN_CODIGO: "0114-8/00",
          CN_DESCRICAO: "CULTIVO DE FUMO",
        },
        {
          id: "0111399",
          CN_CODIGO: "0111-3/99",
          CN_DESCRICAO:
            "CULTIVO DE OUTROS CEREAIS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "0115600",
          CN_CODIGO: "0115-6/00",
          CN_DESCRICAO: "CULTIVO DE SOJA",
        },
        {
          id: "0112199",
          CN_CODIGO: "0112-1/99",
          CN_DESCRICAO:
            "CULTIVO DE OUTRAS FIBRAS DE LAVOURA TEMPORARIA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "0116402",
          CN_CODIGO: "0116-4/02",
          CN_DESCRICAO: "CULTIVO DE GIRASSOL",
        },
        {
          id: "0116401",
          CN_CODIGO: "0116-4/01",
          CN_DESCRICAO: "CULTIVO DE AMENDOIM",
        },
        {
          id: "0112102",
          CN_CODIGO: "0112-1/02",
          CN_DESCRICAO: "CULTIVO DE JUTA",
        },
        {
          id: "0116403",
          CN_CODIGO: "0116-4/03",
          CN_DESCRICAO: "CULTIVO DE MAMONA",
        },
        {
          id: "0119901",
          CN_CODIGO: "0119-9/01",
          CN_DESCRICAO: "CULTIVO DE ABACAXI",
        },
        {
          id: "0116499",
          CN_CODIGO: "0116-4/99",
          CN_DESCRICAO:
            "CULTIVO DE OUTRAS OLEAGINOSAS DE LAVOURA TEMPORARIA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "0119904",
          CN_CODIGO: "0119-9/04",
          CN_DESCRICAO: "CULTIVO DE CEBOLA",
        },
        {
          id: "0119903",
          CN_CODIGO: "0119-9/03",
          CN_DESCRICAO: "CULTIVO DE BATATA-INGLESA",
        },
        {
          id: "0119905",
          CN_CODIGO: "0119-9/05",
          CN_DESCRICAO: "CULTIVO DE FEIJAO",
        },
        {
          id: "0119902",
          CN_CODIGO: "0119-9/02",
          CN_DESCRICAO: "CULTIVO DE ALHO",
        },
        {
          id: "0119907",
          CN_CODIGO: "0119-9/07",
          CN_DESCRICAO: "CULTIVO DE MELAO",
        },
        {
          id: "0119906",
          CN_CODIGO: "0119-9/06",
          CN_DESCRICAO: "CULTIVO DE MANDIOCA",
        },
        {
          id: "0119909",
          CN_CODIGO: "0119-9/09",
          CN_DESCRICAO: "CULTIVO DE TOMATE RASTEIRO",
        },
        {
          id: "0119999",
          CN_CODIGO: "0119-9/99",
          CN_DESCRICAO:
            "CULTIVO DE OUTRAS PLANTAS DE LAVOURA TEMPORARIA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "0119908",
          CN_CODIGO: "0119-9/08",
          CN_DESCRICAO: "CULTIVO DE MELANCIA",
        },
        {
          id: "0121101",
          CN_CODIGO: "0121-1/01",
          CN_DESCRICAO: "HORTICULTURA, EXCETO MORANGO",
        },
        { id: "0122900", CN_CODIGO: "0122-9/00", CN_DESCRICAO: "FLORICULTURA" },
        {
          id: "0121102",
          CN_CODIGO: "0121-1/02",
          CN_DESCRICAO: "CULTIVO DE MORANGO",
        },
        {
          id: "0133401",
          CN_CODIGO: "0133-4/01",
          CN_DESCRICAO: "CULTIVO DE ACAI",
        },
        {
          id: "0131800",
          CN_CODIGO: "0131-8/00",
          CN_DESCRICAO: "CULTIVO DE LARANJA",
        },
        {
          id: "0133403",
          CN_CODIGO: "0133-4/03",
          CN_DESCRICAO: "CULTIVO DE CAJU",
        },
        {
          id: "0132600",
          CN_CODIGO: "0132-6/00",
          CN_DESCRICAO: "CULTIVO DE UVA",
        },
        {
          id: "0133404",
          CN_CODIGO: "0133-4/04",
          CN_DESCRICAO: "CULTIVO DE CITRICOS, EXCETO LARANJA",
        },
        {
          id: "0133406",
          CN_CODIGO: "0133-4/06",
          CN_DESCRICAO: "CULTIVO DE GUARANA",
        },
        {
          id: "0133402",
          CN_CODIGO: "0133-4/02",
          CN_DESCRICAO: "CULTIVO DE BANANA",
        },
        {
          id: "0133405",
          CN_CODIGO: "0133-4/05",
          CN_DESCRICAO: "CULTIVO DE COCO-DA-BAIA",
        },
        {
          id: "0133409",
          CN_CODIGO: "0133-4/09",
          CN_DESCRICAO: "CULTIVO DE MARACUJA",
        },
        {
          id: "0133408",
          CN_CODIGO: "0133-4/08",
          CN_DESCRICAO: "CULTIVO DE MAMAO",
        },
        {
          id: "0133411",
          CN_CODIGO: "0133-4/11",
          CN_DESCRICAO: "CULTIVO DE PESSEGO",
        },
        {
          id: "0133407",
          CN_CODIGO: "0133-4/07",
          CN_DESCRICAO: "CULTIVO DE MACA",
        },
        {
          id: "0133410",
          CN_CODIGO: "0133-4/10",
          CN_DESCRICAO: "CULTIVO DE MANGA",
        },
        {
          id: "0135100",
          CN_CODIGO: "0135-1/00",
          CN_DESCRICAO: "CULTIVO DE CACAU",
        },
        {
          id: "0133499",
          CN_CODIGO: "0133-4/99",
          CN_DESCRICAO:
            "CULTIVO DE FRUTAS DE LAVOURA PERMANENTE NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "0139302",
          CN_CODIGO: "0139-3/02",
          CN_DESCRICAO: "CULTIVO DE ERVA-MATE",
        },
        {
          id: "0139301",
          CN_CODIGO: "0139-3/01",
          CN_DESCRICAO: "CULTIVO DE CHA-DA-INDIA",
        },
        {
          id: "0139303",
          CN_CODIGO: "0139-3/03",
          CN_DESCRICAO: "CULTIVO DE PIMENTA-DO-REINO",
        },
        {
          id: "0134200",
          CN_CODIGO: "0134-2/00",
          CN_DESCRICAO: "CULTIVO DE CAFE",
        },
        {
          id: "0139304",
          CN_CODIGO: "0139-3/04",
          CN_DESCRICAO:
            "CULTIVO DE PLANTAS PARA CONDIMENTO, EXCETO PIMENTA-DO-REINO",
        },
        {
          id: "0139399",
          CN_CODIGO: "0139-3/99",
          CN_DESCRICAO:
            "CULTIVO DE OUTRAS PLANTAS DE LAVOURA PERMANENTE NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "0139305",
          CN_CODIGO: "0139-3/05",
          CN_DESCRICAO: "CULTIVO DE DENDE",
        },
        {
          id: "0139306",
          CN_CODIGO: "0139-3/06",
          CN_DESCRICAO: "CULTIVO DE SERINGUEIRA",
        },
        {
          id: "0142300",
          CN_CODIGO: "0142-3/00",
          CN_DESCRICAO:
            "PRODUCAO DE MUDAS E OUTRAS FORMAS DE PROPAGACAO VEGETAL, CERTIFICADAS",
        },
        {
          id: "0141501",
          CN_CODIGO: "0141-5/01",
          CN_DESCRICAO:
            "PRODUCAO DE SEMENTES CERTIFICADAS, EXCETO DE FORRAGEIRAS PARA PASTO",
        },
        {
          id: "0141502",
          CN_CODIGO: "0141-5/02",
          CN_DESCRICAO:
            "PRODUCAO DE SEMENTES CERTIFICADAS DE FORRAGEIRAS PARA FORMACAO DE PASTO",
        },
        {
          id: "0151203",
          CN_CODIGO: "0151-2/03",
          CN_DESCRICAO: "CRIACAO DE BOVINOS, EXCETO PARA CORTE E LEITE",
        },
        {
          id: "0151201",
          CN_CODIGO: "0151-2/01",
          CN_DESCRICAO: "CRIACAO DE BOVINOS PARA CORTE",
        },
        {
          id: "0151202",
          CN_CODIGO: "0151-2/02",
          CN_DESCRICAO: "CRIACAO DE BOVINOS PARA LEITE",
        },
        {
          id: "0152103",
          CN_CODIGO: "0152-1/03",
          CN_DESCRICAO: "CRIACAO DE ASININOS E MUARES",
        },
        {
          id: "0153901",
          CN_CODIGO: "0153-9/01",
          CN_DESCRICAO: "CRIACAO DE CAPRINOS",
        },
        {
          id: "0152101",
          CN_CODIGO: "0152-1/01",
          CN_DESCRICAO: "CRIACAO DE BUFALINOS",
        },
        {
          id: "0153902",
          CN_CODIGO: "0153-9/02",
          CN_DESCRICAO: "CRIACAO DE OVINOS, INCLUSIVE PARA PRODUCAO DE LA",
        },
        {
          id: "0154700",
          CN_CODIGO: "0154-7/00",
          CN_DESCRICAO: "CRIACAO DE SUINOS",
        },
        {
          id: "0152102",
          CN_CODIGO: "0152-1/02",
          CN_DESCRICAO: "CRIACAO DE EQUINOS",
        },
        {
          id: "0155502",
          CN_CODIGO: "0155-5/02",
          CN_DESCRICAO: "PRODUCAO DE PINTOS DE UM DIA",
        },
        {
          id: "0155503",
          CN_CODIGO: "0155-5/03",
          CN_DESCRICAO: "CRIACAO DE OUTROS GALINACEOS, EXCETO PARA CORTE",
        },
        {
          id: "0155505",
          CN_CODIGO: "0155-5/05",
          CN_DESCRICAO: "PRODUCAO DE OVOS",
        },
        {
          id: "0155504",
          CN_CODIGO: "0155-5/04",
          CN_DESCRICAO: "CRIACAO DE AVES, EXCETO GALINACEOS",
        },
        { id: "0159801", CN_CODIGO: "0159-8/01", CN_DESCRICAO: "APICULTURA" },
        {
          id: "0155501",
          CN_CODIGO: "0155-5/01",
          CN_DESCRICAO: "CRIACAO DE FRANGOS PARA CORTE",
        },
        {
          id: "0159802",
          CN_CODIGO: "0159-8/02",
          CN_DESCRICAO: "CRIACAO DE ANIMAIS DE ESTIMACAO",
        },
        {
          id: "0159804",
          CN_CODIGO: "0159-8/04",
          CN_DESCRICAO: "CRIACAO DE BICHO-DA-SEDA",
        },
        {
          id: "0159899",
          CN_CODIGO: "0159-8/99",
          CN_DESCRICAO:
            "CRIACAO DE OUTROS ANIMAIS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "0159803",
          CN_CODIGO: "0159-8/03",
          CN_DESCRICAO: "CRIACAO DE ESCARGO",
        },
        {
          id: "0161001",
          CN_CODIGO: "0161-0/01",
          CN_DESCRICAO:
            "SERVICO DE PULVERIZACAO E CONTROLE DE PRAGAS AGRICOLAS",
        },
        {
          id: "0161099",
          CN_CODIGO: "0161-0/99",
          CN_DESCRICAO:
            "ATIVIDADES DE APOIO … AGRICULTURA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "0161002",
          CN_CODIGO: "0161-0/02",
          CN_DESCRICAO: "SERVICO DE PODA DE ARVORES PARA LAVOURAS",
        },
        {
          id: "0161003",
          CN_CODIGO: "0161-0/03",
          CN_DESCRICAO: "SERVICO DE PREPARACAO DE TERRENO, CULTIVO E COLHEITA",
        },
        {
          id: "0162801",
          CN_CODIGO: "0162-8/01",
          CN_DESCRICAO: "SERVICO DE INSEMINACAO ARTIFICIAL DE ANIMAIS *",
        },
        {
          id: "0162899",
          CN_CODIGO: "0162-8/99",
          CN_DESCRICAO:
            "ATIVIDADES DE APOIO … PECUARIA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "0162802",
          CN_CODIGO: "0162-8/02",
          CN_DESCRICAO: "SERVICO DE TOSQUIAMENTO DE OVINOS",
        },
        {
          id: "0162803",
          CN_CODIGO: "0162-8/03",
          CN_DESCRICAO: "SERVICO DE MANEJO DE ANIMAIS",
        },
        {
          id: "0170900",
          CN_CODIGO: "0170-9/00",
          CN_DESCRICAO: "CACA E SERVICOS RELACIONADOS",
        },
        {
          id: "0210102",
          CN_CODIGO: "0210-1/02",
          CN_DESCRICAO: "CULTIVO DE ACACIA-NEGRA",
        },
        {
          id: "0163600",
          CN_CODIGO: "0163-6/00",
          CN_DESCRICAO: "ATIVIDADES DE POS-COLHEITA",
        },
        {
          id: "0210104",
          CN_CODIGO: "0210-1/04",
          CN_DESCRICAO: "CULTIVO DE TECA",
        },
        {
          id: "0210103",
          CN_CODIGO: "0210-1/03",
          CN_DESCRICAO: "CULTIVO DE PINUS",
        },
        {
          id: "0210101",
          CN_CODIGO: "0210-1/01",
          CN_DESCRICAO: "CULTIVO DE EUCALIPTO",
        },
        {
          id: "0210105",
          CN_CODIGO: "0210-1/05",
          CN_DESCRICAO:
            "CULTIVO DE ESPECIES MADEIREIRAS, EXCETO EUCALIPTO, ACACIA-NEGRA, PINUS E TECA",
        },
        {
          id: "0210107",
          CN_CODIGO: "0210-1/07",
          CN_DESCRICAO: "EXTRACAO DE MADEIRA EM FLORESTAS PLANTADAS",
        },
        {
          id: "0210108",
          CN_CODIGO: "0210-1/08",
          CN_DESCRICAO: "PRODUCAO DE CARVAO VEGETAL - FLORESTAS PLANTADAS",
        },
        {
          id: "0210109",
          CN_CODIGO: "0210-1/09",
          CN_DESCRICAO:
            "PRODUCAO DE CASCA DE ACACIA-NEGRA - FLORESTAS PLANTADAS",
        },
        {
          id: "0210199",
          CN_CODIGO: "0210-1/99",
          CN_DESCRICAO:
            "PRODUCAO DE PRODUTOS NAO-MADEIREIROS NAO ESPECIFICADOS ANTERIORMENTE EM FLORESTAS PLANTADAS",
        },
        {
          id: "0220901",
          CN_CODIGO: "0220-9/01",
          CN_DESCRICAO: "EXTRACAO DE MADEIRA EM FLORESTAS NATIVAS",
        },
        {
          id: "0220902",
          CN_CODIGO: "0220-9/02",
          CN_DESCRICAO: "PRODUCAO DE CARVAO VEGETAL - FLORESTAS NATIVAS",
        },
        {
          id: "0220903",
          CN_CODIGO: "0220-9/03",
          CN_DESCRICAO: "COLETA DE CASTANHA-DO-PARA EM FLORESTAS NATIVAS",
        },
        {
          id: "0220905",
          CN_CODIGO: "0220-9/05",
          CN_DESCRICAO: "COLETA DE PALMITO EM FLORESTAS NATIVAS",
        },
        {
          id: "0210106",
          CN_CODIGO: "0210-1/06",
          CN_DESCRICAO: "CULTIVO DE MUDAS EM VIVEIROS FLORESTAIS",
        },
        {
          id: "0220999",
          CN_CODIGO: "0220-9/99",
          CN_DESCRICAO:
            "COLETA DE PRODUTOS NAO-MADEIREIROS NAO ESPECIFICADOS ANTERIORMENTE EM FLORESTAS NATIVAS",
        },
        {
          id: "0220906",
          CN_CODIGO: "0220-9/06",
          CN_DESCRICAO: "CONSERVACAO DE FLORESTAS NATIVAS",
        },
        {
          id: "0220904",
          CN_CODIGO: "0220-9/04",
          CN_DESCRICAO: "COLETA DE LATEX EM FLORESTAS NATIVAS",
        },
        {
          id: "0311602",
          CN_CODIGO: "0311-6/02",
          CN_DESCRICAO: "PESCA DE CRUSTACEOS E MOLUSCOS EM AGUA SALGADA",
        },
        {
          id: "0311601",
          CN_CODIGO: "0311-6/01",
          CN_DESCRICAO: "PESCA DE PEIXES EM AGUA SALGADA",
        },
        {
          id: "0311603",
          CN_CODIGO: "0311-6/03",
          CN_DESCRICAO: "COLETA DE OUTROS PRODUTOS MARINHOS",
        },
        {
          id: "0311604",
          CN_CODIGO: "0311-6/04",
          CN_DESCRICAO: "ATIVIDADES DE APOIO … PESCA EM AGUA SALGADA",
        },
        {
          id: "0312402",
          CN_CODIGO: "0312-4/02",
          CN_DESCRICAO: "PESCA DE CRUSTACEOS E MOLUSCOS EM AGUA DOCE",
        },
        {
          id: "0312403",
          CN_CODIGO: "0312-4/03",
          CN_DESCRICAO: "COLETA DE OUTROS PRODUTOS AQUATICOS DE AGUA DOCE",
        },
        {
          id: "0312404",
          CN_CODIGO: "0312-4/04",
          CN_DESCRICAO: "ATIVIDADES DE APOIO … PESCA EM AGUA DOCE",
        },
        {
          id: "0321301",
          CN_CODIGO: "0321-3/01",
          CN_DESCRICAO: "CRIACAO DE PEIXES EM AGUA SALGADA E SALOBRA",
        },
        {
          id: "0321302",
          CN_CODIGO: "0321-3/02",
          CN_DESCRICAO: "CRIACAO DE CAMAROES EM AGUA SALGADA E SALOBRA",
        },
        {
          id: "0230600",
          CN_CODIGO: "0230-6/00",
          CN_DESCRICAO: "ATIVIDADES DE APOIO … PRODUCAO FLORESTAL",
        },
        {
          id: "0312401",
          CN_CODIGO: "0312-4/01",
          CN_DESCRICAO: "PESCA DE PEIXES EM AGUA DOCE",
        },
        {
          id: "0321304",
          CN_CODIGO: "0321-3/04",
          CN_DESCRICAO:
            "CRIACAO DE PEIXES ORNAMENTAIS EM AGUA SALGADA E SALOBRA",
        },
        {
          id: "0321399",
          CN_CODIGO: "0321-3/99",
          CN_DESCRICAO:
            "CULTIVOS E SEMICULTIVOS DA AQUICULTURA EM AGUA SALGADA E SALOBRA NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "0321303",
          CN_CODIGO: "0321-3/03",
          CN_DESCRICAO:
            "CRIACAO DE OSTRAS E MEXILHOES EM AGUA SALGADA E SALOBRA",
        },
        {
          id: "0321305",
          CN_CODIGO: "0321-3/05",
          CN_DESCRICAO:
            "ATIVIDADES DE APOIO … AQUICULTURA EM AGUA SALGADA E SALOBRA",
        },
        {
          id: "0322102",
          CN_CODIGO: "0322-1/02",
          CN_DESCRICAO: "CRIACAO DE CAMAROES EM AGUA DOCE",
        },
        {
          id: "0322103",
          CN_CODIGO: "0322-1/03",
          CN_DESCRICAO: "CRIACAO DE OSTRAS E MEXILHOES EM AGUA DOCE",
        },
        {
          id: "0322104",
          CN_CODIGO: "0322-1/04",
          CN_DESCRICAO: "CRIACAO DE PEIXES ORNAMENTAIS EM AGUA DOCE",
        },
        { id: "0322105", CN_CODIGO: "0322-1/05", CN_DESCRICAO: "RANICULTURA" },
        {
          id: "0322106",
          CN_CODIGO: "0322-1/06",
          CN_DESCRICAO: "CRIACAO DE JACARE",
        },
        {
          id: "0322101",
          CN_CODIGO: "0322-1/01",
          CN_DESCRICAO: "CRIACAO DE PEIXES EM AGUA DOCE",
        },
        {
          id: "0500301",
          CN_CODIGO: "0500-3/01",
          CN_DESCRICAO: "EXTRACAO DE CARVAO MINERAL",
        },
        {
          id: "0322107",
          CN_CODIGO: "0322-1/07",
          CN_DESCRICAO: "ATIVIDADES DE APOIO … AQUICULTURA EM AGUA DOCE",
        },
        {
          id: "0322199",
          CN_CODIGO: "0322-1/99",
          CN_DESCRICAO:
            "CULTIVOS E SEMICULTIVOS DA AQUICULTURA EM AGUA DOCE NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "0500302",
          CN_CODIGO: "0500-3/02",
          CN_DESCRICAO: "BENEFICIAMENTO DE CARVAO MINERAL",
        },
        {
          id: "0600001",
          CN_CODIGO: "0600-0/01",
          CN_DESCRICAO: "EXTRACAO DE PETROLEO E GAS NATURAL",
        },
        {
          id: "0600003",
          CN_CODIGO: "0600-0/03",
          CN_DESCRICAO: "EXTRACAO E BENEFICIAMENTO DE AREIAS BETUMINOSAS",
        },
        {
          id: "0600002",
          CN_CODIGO: "0600-0/02",
          CN_DESCRICAO: "EXTRACAO E BENEFICIAMENTO DE XISTO",
        },
        {
          id: "0710302",
          CN_CODIGO: "0710-3/02",
          CN_DESCRICAO:
            "PELOTIZACAO, SINTERIZACAO E OUTROS BENEFICIAMENTOS DE MINERIO DE FERRO",
        },
        {
          id: "0721902",
          CN_CODIGO: "0721-9/02",
          CN_DESCRICAO: "BENEFICIAMENTO DE MINERIO DE ALUMINIO",
        },
        {
          id: "0710301",
          CN_CODIGO: "0710-3/01",
          CN_DESCRICAO: "EXTRACAO DE MINERIO DE FERRO",
        },
        {
          id: "0721901",
          CN_CODIGO: "0721-9/01",
          CN_DESCRICAO: "EXTRACAO DE MINERIO DE ALUMINIO",
        },
        {
          id: "0723501",
          CN_CODIGO: "0723-5/01",
          CN_DESCRICAO: "EXTRACAO DE MINERIO DE MANGANES",
        },
        {
          id: "0722702",
          CN_CODIGO: "0722-7/02",
          CN_DESCRICAO: "BENEFICIAMENTO DE MINERIO DE ESTANHO",
        },
        {
          id: "0722701",
          CN_CODIGO: "0722-7/01",
          CN_DESCRICAO: "EXTRACAO DE MINERIO DE ESTANHO",
        },
        {
          id: "0723502",
          CN_CODIGO: "0723-5/02",
          CN_DESCRICAO: "BENEFICIAMENTO DE MINERIO DE MANGANES",
        },
        {
          id: "0724301",
          CN_CODIGO: "0724-3/01",
          CN_DESCRICAO: "EXTRACAO DE MINERIO DE METAIS PRECIOSOS",
        },
        {
          id: "0724302",
          CN_CODIGO: "0724-3/02",
          CN_DESCRICAO: "BENEFICIAMENTO DE MINERIO DE METAIS PRECIOSOS",
        },
        {
          id: "0729402",
          CN_CODIGO: "0729-4/02",
          CN_DESCRICAO: "EXTRACAO DE MINERIO DE TUNGSTENIO",
        },
        {
          id: "0729401",
          CN_CODIGO: "0729-4/01",
          CN_DESCRICAO: "EXTRACAO DE MINERIOS DE NIOBIO E TITANIO",
        },
        {
          id: "0729403",
          CN_CODIGO: "0729-4/03",
          CN_DESCRICAO: "EXTRACAO DE MINERIO DE NIQUEL",
        },
        {
          id: "0729404",
          CN_CODIGO: "0729-4/04",
          CN_DESCRICAO:
            "EXTRACAO DE MINERIOS DE COBRE, CHUMBO, ZINCO E OUTROS MINERAIS METALICOS NAO-FERROSOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "0729405",
          CN_CODIGO: "0729-4/05",
          CN_DESCRICAO:
            "BENEFICIAMENTO DE MINERIOS DE COBRE, CHUMBO, ZINCO E OUTROS MINERAIS METALICOS NAO-FERROSOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "0810002",
          CN_CODIGO: "0810-0/02",
          CN_DESCRICAO: "EXTRACAO DE GRANITO E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0810001",
          CN_CODIGO: "0810-0/01",
          CN_DESCRICAO: "EXTRACAO DE ARDOSIA E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0810003",
          CN_CODIGO: "0810-0/03",
          CN_DESCRICAO: "EXTRACAO DE MARMORE E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0725100",
          CN_CODIGO: "0725-1/00",
          CN_DESCRICAO: "EXTRACAO DE MINERAIS RADIOATIVOS",
        },
        {
          id: "0810004",
          CN_CODIGO: "0810-0/04",
          CN_DESCRICAO:
            "EXTRACAO DE CALCARIO E DOLOMITA E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0810007",
          CN_CODIGO: "0810-0/07",
          CN_DESCRICAO: "EXTRACAO DE ARGILA E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0810006",
          CN_CODIGO: "0810-0/06",
          CN_DESCRICAO:
            "EXTRACAO DE AREIA, CASCALHO OU PEDREGULHO E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0810008",
          CN_CODIGO: "0810-0/08",
          CN_DESCRICAO: "EXTRACAO DE SAIBRO E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0810005",
          CN_CODIGO: "0810-0/05",
          CN_DESCRICAO: "EXTRACAO DE GESSO E CAULIM",
        },
        {
          id: "0810009",
          CN_CODIGO: "0810-0/09",
          CN_DESCRICAO: "EXTRACAO DE BASALTO E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0810010",
          CN_CODIGO: "0810-0/10",
          CN_DESCRICAO: "BENEFICIAMENTO DE GESSO E CAULIM ASSOCIADO … EXTRACAO",
        },
        {
          id: "0891600",
          CN_CODIGO: "0891-6/00",
          CN_DESCRICAO:
            "EXTRACAO DE MINERAIS PARA FABRICACAO DE ADUBOS, FERTILIZANTES E OUTROS PRODUTOS QUIMICOS",
        },
        {
          id: "0810099",
          CN_CODIGO: "0810-0/99",
          CN_DESCRICAO:
            "EXTRACAO E BRITAMENTO DE PEDRAS E OUTROS MATERIAIS PARA CONSTRUCAO E BENEFICIAMENTO ASSOCIADO",
        },
        {
          id: "0892403",
          CN_CODIGO: "0892-4/03",
          CN_DESCRICAO: "REFINO E OUTROS TRATAMENTOS DO SAL",
        },
        {
          id: "0893200",
          CN_CODIGO: "0893-2/00",
          CN_DESCRICAO: "EXTRACAO DE GEMAS (PEDRAS PRECIOSAS E SEMIPRECIOSAS)",
        },
        {
          id: "0892401",
          CN_CODIGO: "0892-4/01",
          CN_DESCRICAO: "EXTRACAO DE SAL MARINHO",
        },
        {
          id: "0899101",
          CN_CODIGO: "0899-1/01",
          CN_DESCRICAO: "EXTRACAO DE GRAFITA",
        },
        {
          id: "0892402",
          CN_CODIGO: "0892-4/02",
          CN_DESCRICAO: "EXTRACAO DE SAL-GEMA",
        },
        {
          id: "0899199",
          CN_CODIGO: "0899-1/99",
          CN_DESCRICAO:
            "EXTRACAO DE OUTROS MINERAIS NAO-METALICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "0899103",
          CN_CODIGO: "0899-1/03",
          CN_DESCRICAO: "EXTRACAO DE AMIANTO",
        },
        {
          id: "0910600",
          CN_CODIGO: "0910-6/00",
          CN_DESCRICAO:
            "ATIVIDADES DE APOIO … EXTRACAO DE PETROLEO E GAS NATURAL",
        },
        {
          id: "0990402",
          CN_CODIGO: "0990-4/02",
          CN_DESCRICAO:
            "ATIVIDADES DE APOIO … EXTRACAO DE MINERAIS METALICOS NAO-FERROSOS",
        },
        {
          id: "0899102",
          CN_CODIGO: "0899-1/02",
          CN_DESCRICAO: "EXTRACAO DE QUARTZO",
        },
        {
          id: "0990401",
          CN_CODIGO: "0990-4/01",
          CN_DESCRICAO: "ATIVIDADES DE APOIO … EXTRACAO DE MINERIO DE FERRO",
        },
        {
          id: "0990403",
          CN_CODIGO: "0990-4/03",
          CN_DESCRICAO:
            "ATIVIDADES DE APOIO … EXTRACAO DE MINERAIS NAO-METALICOS",
        },
        {
          id: "1011203",
          CN_CODIGO: "1011-2/03",
          CN_DESCRICAO: "FRIGORIFICO - ABATE DE OVINOS E CAPRINOS",
        },
        {
          id: "1011202",
          CN_CODIGO: "1011-2/02",
          CN_DESCRICAO: "FRIGORIFICO - ABATE DE EQUINOS",
        },
        {
          id: "1011204",
          CN_CODIGO: "1011-2/04",
          CN_DESCRICAO: "FRIGORIFICO - ABATE DE BUFALINOS",
        },
        {
          id: "1011205",
          CN_CODIGO: "1011-2/05",
          CN_DESCRICAO:
            "MATADOURO - ABATE DE RESES SOB CONTRATO - EXCETO ABATE DE SUINOS",
        },
        {
          id: "1012102",
          CN_CODIGO: "1012-1/02",
          CN_DESCRICAO: "ABATE DE PEQUENOS ANIMAIS",
        },
        {
          id: "1012101",
          CN_CODIGO: "1012-1/01",
          CN_DESCRICAO: "ABATE DE AVES",
        },
        {
          id: "1011201",
          CN_CODIGO: "1011-2/01",
          CN_DESCRICAO: "FRIGORIFICO - ABATE DE BOVINOS",
        },
        {
          id: "1012104",
          CN_CODIGO: "1012-1/04",
          CN_DESCRICAO: "MATADOURO - ABATE DE SUINOS SOB CONTRATO",
        },
        {
          id: "1013902",
          CN_CODIGO: "1013-9/02",
          CN_DESCRICAO: "PREPARACAO DE SUBPRODUTOS DO ABATE",
        },
        {
          id: "1013901",
          CN_CODIGO: "1013-9/01",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS DE CARNE",
        },
        {
          id: "1020101",
          CN_CODIGO: "1020-1/01",
          CN_DESCRICAO: "PRESERVACAO DE PEIXES, CRUSTACEOS E MOLUSCOS",
        },
        {
          id: "1020102",
          CN_CODIGO: "1020-1/02",
          CN_DESCRICAO:
            "FABRICACAO DE CONSERVAS DE PEIXES, CRUSTACEOS E MOLUSCOS",
        },
        {
          id: "1031700",
          CN_CODIGO: "1031-7/00",
          CN_DESCRICAO: "FABRICACAO DE CONSERVAS DE FRUTAS",
        },
        {
          id: "1032501",
          CN_CODIGO: "1032-5/01",
          CN_DESCRICAO: "FABRICACAO DE CONSERVAS DE PALMITO",
        },
        {
          id: "1032599",
          CN_CODIGO: "1032-5/99",
          CN_DESCRICAO:
            "FABRICACAO DE CONSERVAS DE LEGUMES E OUTROS VEGETAIS, EXCETO PALMITO",
        },
        {
          id: "1012103",
          CN_CODIGO: "1012-1/03",
          CN_DESCRICAO: "FRIGORIFICO - ABATE DE SUINOS",
        },
        {
          id: "1033302",
          CN_CODIGO: "1033-3/02",
          CN_DESCRICAO:
            "FABRICACAO DE SUCOS DE FRUTAS, HORTALICAS E LEGUMES, EXCETO CONCENTRADOS",
        },
        {
          id: "1042200",
          CN_CODIGO: "1042-2/00",
          CN_DESCRICAO:
            "FABRICACAO DE OLEOS VEGETAIS REFINADOS, EXCETO OLEO DE MILHO",
        },
        {
          id: "1033301",
          CN_CODIGO: "1033-3/01",
          CN_DESCRICAO:
            "FABRICACAO DE SUCOS CONCENTRADOS DE FRUTAS, HORTALICAS E LEGUMES",
        },
        {
          id: "1043100",
          CN_CODIGO: "1043-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE MARGARINA E OUTRAS GORDURAS VEGETAIS E DE OLEOS NAO-COMESTIVEIS DE ANIMAIS",
        },
        {
          id: "1041400",
          CN_CODIGO: "1041-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE OLEOS VEGETAIS EM BRUTO, EXCETO OLEO DE MILHO",
        },
        {
          id: "1053800",
          CN_CODIGO: "1053-8/00",
          CN_DESCRICAO: "FABRICACAO DE SORVETES E OUTROS GELADOS COMESTIVEIS",
        },
        {
          id: "1051100",
          CN_CODIGO: "1051-1/00",
          CN_DESCRICAO: "PREPARACAO DO LEITE",
        },
        {
          id: "1052000",
          CN_CODIGO: "1052-0/00",
          CN_DESCRICAO: "FABRICACAO DE LATICINIOS",
        },
        {
          id: "1061902",
          CN_CODIGO: "1061-9/02",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS DO ARROZ",
        },
        {
          id: "1062700",
          CN_CODIGO: "1062-7/00",
          CN_DESCRICAO: "MOAGEM DE TRIGO E FABRICACAO DE DERIVADOS",
        },
        {
          id: "1063500",
          CN_CODIGO: "1063-5/00",
          CN_DESCRICAO: "FABRICACAO DE FARINHA DE MANDIOCA E DERIVADOS",
        },
        {
          id: "1065101",
          CN_CODIGO: "1065-1/01",
          CN_DESCRICAO: "FABRICACAO DE AMIDOS E FECULAS DE VEGETAIS",
        },
        {
          id: "1064300",
          CN_CODIGO: "1064-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE FARINHA DE MILHO E DERIVADOS, EXCETO OLEOS DE MILHO",
        },
        {
          id: "1061901",
          CN_CODIGO: "1061-9/01",
          CN_DESCRICAO: "BENEFICIAMENTO DE ARROZ",
        },
        {
          id: "1065102",
          CN_CODIGO: "1065-1/02",
          CN_DESCRICAO: "FABRICACAO DE OLEO DE MILHO EM BRUTO",
        },
        {
          id: "1066000",
          CN_CODIGO: "1066-0/00",
          CN_DESCRICAO: "FABRICACAO DE ALIMENTOS PARA ANIMAIS",
        },
        {
          id: "1069400",
          CN_CODIGO: "1069-4/00",
          CN_DESCRICAO:
            "MOAGEM E FABRICACAO DE PRODUTOS DE ORIGEM VEGETAL NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1065103",
          CN_CODIGO: "1065-1/03",
          CN_DESCRICAO: "FABRICACAO DE OLEO DE MILHO REFINADO",
        },
        {
          id: "1072401",
          CN_CODIGO: "1072-4/01",
          CN_DESCRICAO: "FABRICACAO DE ACUCAR DE CANA REFINADO",
        },
        {
          id: "1072402",
          CN_CODIGO: "1072-4/02",
          CN_DESCRICAO:
            "FABRICACAO DE ACUCAR DE CEREAIS (DEXTROSE) E DE BETERRABA",
        },
        {
          id: "1081301",
          CN_CODIGO: "1081-3/01",
          CN_DESCRICAO: "BENEFICIAMENTO DE CAFE",
        },
        {
          id: "1071600",
          CN_CODIGO: "1071-6/00",
          CN_DESCRICAO: "FABRICACAO DE ACUCAR EM BRUTO",
        },
        {
          id: "1082100",
          CN_CODIGO: "1082-1/00",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS … BASE DE CAFE",
        },
        {
          id: "1092900",
          CN_CODIGO: "1092-9/00",
          CN_DESCRICAO: "FABRICACAO DE BISCOITOS E BOLACHAS",
        },
        {
          id: "1091100",
          CN_CODIGO: "1091-1/00",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS DE PANIFICACAO",
        },
        {
          id: "1093701",
          CN_CODIGO: "1093-7/01",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS DERIVADOS DO CACAU E DE CHOCOLATES",
        },
        {
          id: "1093702",
          CN_CODIGO: "1093-7/02",
          CN_DESCRICAO:
            "FABRICACAO DE FRUTAS CRISTALIZADAS, BALAS E SEMELHANTES",
        },
        {
          id: "1081302",
          CN_CODIGO: "1081-3/02",
          CN_DESCRICAO: "TORREFACAO E MOAGEM DE CAFE",
        },
        {
          id: "1095300",
          CN_CODIGO: "1095-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE ESPECIARIAS, MOLHOS, TEMPEROS E CONDIMENTOS",
        },
        {
          id: "1099601",
          CN_CODIGO: "1099-6/01",
          CN_DESCRICAO: "FABRICACAO DE VINAGRES",
        },
        {
          id: "1094500",
          CN_CODIGO: "1094-5/00",
          CN_DESCRICAO: "FABRICACAO DE MASSAS ALIMENTICIAS",
        },
        {
          id: "1096100",
          CN_CODIGO: "1096-1/00",
          CN_DESCRICAO: "FABRICACAO DE ALIMENTOS E PRATOS PRONTOS",
        },
        {
          id: "1099604",
          CN_CODIGO: "1099-6/04",
          CN_DESCRICAO: "FABRICACAO DE GELO COMUM",
        },
        {
          id: "1099602",
          CN_CODIGO: "1099-6/02",
          CN_DESCRICAO: "FABRICACAO DE POS ALIMENTICIOS",
        },
        {
          id: "1099603",
          CN_CODIGO: "1099-6/03",
          CN_DESCRICAO: "FABRICACAO DE FERMENTOS E LEVEDURAS",
        },
        {
          id: "1099606",
          CN_CODIGO: "1099-6/06",
          CN_DESCRICAO: "FABRICACAO DE ADOCANTES NATURAIS E ARTIFICIAIS",
        },
        {
          id: "1099699",
          CN_CODIGO: "1099-6/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS ALIMENTICIOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1111902",
          CN_CODIGO: "1111-9/02",
          CN_DESCRICAO: "FABRICACAO DE OUTRAS AGUARDENTES E BEBIDAS DESTILADAS",
        },
        {
          id: "1111901",
          CN_CODIGO: "1111-9/01",
          CN_DESCRICAO: "FABRICACAO DE AGUARDENTE DE CANA-DE-ACUCAR",
        },
        {
          id: "1099605",
          CN_CODIGO: "1099-6/05",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS PARA INFUSAO (CHA, MATE, ETC.)",
        },
        {
          id: "1113501",
          CN_CODIGO: "1113-5/01",
          CN_DESCRICAO: "FABRICACAO DE MALTE, INCLUSIVE MALTE UISQUE",
        },
        {
          id: "1112700",
          CN_CODIGO: "1112-7/00",
          CN_DESCRICAO: "FABRICACAO DE VINHO",
        },
        {
          id: "1113502",
          CN_CODIGO: "1113-5/02",
          CN_DESCRICAO: "FABRICACAO DE CERVEJAS E CHOPES",
        },
        {
          id: "1122402",
          CN_CODIGO: "1122-4/02",
          CN_DESCRICAO:
            "FABRICACAO DE CHA MATE E OUTROS CHAS PRONTOS PARA CONSUMO",
        },
        {
          id: "1121600",
          CN_CODIGO: "1121-6/00",
          CN_DESCRICAO: "FABRICACAO DE AGUAS ENVASADAS",
        },
        {
          id: "1122403",
          CN_CODIGO: "1122-4/03",
          CN_DESCRICAO:
            "FABRICACAO DE REFRESCOS, XAROPES E POS PARA REFRESCOS, EXCETO REFRESCOS DE FRUTAS",
        },
        {
          id: "1210700",
          CN_CODIGO: "1210-7/00",
          CN_DESCRICAO: "PROCESSAMENTO INDUSTRIAL DO FUMO",
        },
        {
          id: "1122499",
          CN_CODIGO: "1122-4/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTRAS BEBIDAS NAO-ALCOOLICAS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "1220402",
          CN_CODIGO: "1220-4/02",
          CN_DESCRICAO: "FABRICACAO DE CIGARRILHAS E CHARUTOS",
        },
        {
          id: "1220401",
          CN_CODIGO: "1220-4/01",
          CN_DESCRICAO: "FABRICACAO DE CIGARROS",
        },
        {
          id: "1122401",
          CN_CODIGO: "1122-4/01",
          CN_DESCRICAO: "FABRICACAO DE REFRIGERANTES",
        },
        {
          id: "1220403",
          CN_CODIGO: "1220-4/03",
          CN_DESCRICAO: "FABRICACAO DE FILTROS PARA CIGARROS",
        },
        {
          id: "1220499",
          CN_CODIGO: "1220-4/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS DO FUMO, EXCETO CIGARROS, CIGARRILHAS E CHARUTOS",
        },
        {
          id: "1313800",
          CN_CODIGO: "1313-8/00",
          CN_DESCRICAO: "FIACAO DE FIBRAS ARTIFICIAIS E SINTETICAS",
        },
        {
          id: "1312000",
          CN_CODIGO: "1312-0/00",
          CN_DESCRICAO:
            "PREPARACAO E FIACAO DE FIBRAS TEXTEIS NATURAIS, EXCETO ALGODAO",
        },
        {
          id: "1314600",
          CN_CODIGO: "1314-6/00",
          CN_DESCRICAO: "FABRICACAO DE LINHAS PARA COSTURAR E BORDAR",
        },
        {
          id: "1311100",
          CN_CODIGO: "1311-1/00",
          CN_DESCRICAO: "PREPARACAO E FIACAO DE FIBRAS DE ALGODAO",
        },
        {
          id: "1322700",
          CN_CODIGO: "1322-7/00",
          CN_DESCRICAO:
            "TECELAGEM DE FIOS DE FIBRAS TEXTEIS NATURAIS, EXCETO ALGODAO",
        },
        {
          id: "1330800",
          CN_CODIGO: "1330-8/00",
          CN_DESCRICAO: "FABRICACAO DE TECIDOS DE MALHA",
        },
        {
          id: "1323500",
          CN_CODIGO: "1323-5/00",
          CN_DESCRICAO: "TECELAGEM DE FIOS DE FIBRAS ARTIFICIAIS E SINTETICAS",
        },
        {
          id: "1340501",
          CN_CODIGO: "1340-5/01",
          CN_DESCRICAO:
            "ESTAMPARIA E TEXTURIZACAO EM FIOS, TECIDOS, ARTEFATOS TEXTEIS E PECAS DO VESTUARIO",
        },
        {
          id: "1340502",
          CN_CODIGO: "1340-5/02",
          CN_DESCRICAO:
            "ALVEJAMENTO, TINGIMENTO E TORCAO EM FIOS, TECIDOS, ARTEFATOS TEXTEIS E PECAS DO VESTUARIO",
        },
        {
          id: "1351100",
          CN_CODIGO: "1351-1/00",
          CN_DESCRICAO: "FABRICACAO DE ARTEFATOS TEXTEIS PARA USO DOMESTICO",
        },
        {
          id: "1340599",
          CN_CODIGO: "1340-5/99",
          CN_DESCRICAO:
            "OUTROS SERVICOS DE ACABAMENTO EM FIOS, TECIDOS, ARTEFATOS TEXTEIS E PECAS DO VESTUARIO",
        },
        {
          id: "1353700",
          CN_CODIGO: "1353-7/00",
          CN_DESCRICAO: "FABRICACAO DE ARTEFATOS DE CORDOARIA",
        },
        {
          id: "1352900",
          CN_CODIGO: "1352-9/00",
          CN_DESCRICAO: "FABRICACAO DE ARTEFATOS DE TAPECARIA",
        },
        {
          id: "1321900",
          CN_CODIGO: "1321-9/00",
          CN_DESCRICAO: "TECELAGEM DE FIOS DE ALGODAO",
        },
        {
          id: "1354500",
          CN_CODIGO: "1354-5/00",
          CN_DESCRICAO: "FABRICACAO DE TECIDOS ESPECIAIS, INCLUSIVE ARTEFATOS",
        },
        {
          id: "1411802",
          CN_CODIGO: "1411-8/02",
          CN_DESCRICAO: "FACCAO DE ROUPAS INTIMAS",
        },
        {
          id: "1359600",
          CN_CODIGO: "1359-6/00",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS TEXTEIS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1412601",
          CN_CODIGO: "1412-6/01",
          CN_DESCRICAO:
            "CONFECCAO DE PECAS DO VESTUARIO, EXCETO ROUPAS INTIMAS E AS CONFECCIONADAS SOB MEDIDA",
        },
        {
          id: "1412602",
          CN_CODIGO: "1412-6/02",
          CN_DESCRICAO:
            "CONFECCAO, SOB MEDIDA, DE PECAS DO VESTUARIO, EXCETO ROUPAS INTIMAS",
        },
        {
          id: "1412603",
          CN_CODIGO: "1412-6/03",
          CN_DESCRICAO: "FACCAO DE PECAS DO VESTUARIO, EXCETO ROUPAS INTIMAS",
        },
        {
          id: "1413401",
          CN_CODIGO: "1413-4/01",
          CN_DESCRICAO: "CONFECCAO DE ROUPAS PROFISSIONAIS, EXCETO SOB MEDIDA",
        },
        {
          id: "1413402",
          CN_CODIGO: "1413-4/02",
          CN_DESCRICAO: "CONFECCAO, SOB MEDIDA, DE ROUPAS PROFISSIONAIS",
        },
        {
          id: "1413403",
          CN_CODIGO: "1413-4/03",
          CN_DESCRICAO: "FACCAO DE ROUPAS PROFISSIONAIS",
        },
        {
          id: "1414200",
          CN_CODIGO: "1414-2/00",
          CN_DESCRICAO:
            "FABRICACAO DE ACESSORIOS DO VESTUARIO, EXCETO PARA SEGURANCA E PROTECAO",
        },
        {
          id: "1411801",
          CN_CODIGO: "1411-8/01",
          CN_DESCRICAO: "CONFECCAO DE ROUPAS INTIMAS",
        },
        {
          id: "1422300",
          CN_CODIGO: "1422-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE ARTIGOS DO VESTUARIO, PRODUZIDOS EM MALHARIAS E TRICOTAGENS, EXCETO MEIAS",
        },
        {
          id: "1510600",
          CN_CODIGO: "1510-6/00",
          CN_DESCRICAO: "CURTIMENTO E OUTRAS PREPARACOES DE COURO",
        },
        {
          id: "1521100",
          CN_CODIGO: "1521-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE ARTIGOS PARA VIAGEM, BOLSAS E SEMELHANTES DE QUALQUER MATERIAL",
        },
        {
          id: "1421500",
          CN_CODIGO: "1421-5/00",
          CN_DESCRICAO: "FABRICACAO DE MEIAS",
        },
        {
          id: "1529700",
          CN_CODIGO: "1529-7/00",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE COURO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1531901",
          CN_CODIGO: "1531-9/01",
          CN_DESCRICAO: "FABRICACAO DE CALCADOS DE COURO",
        },
        {
          id: "1531902",
          CN_CODIGO: "1531-9/02",
          CN_DESCRICAO: "ACABAMENTO DE CALCADOS DE COURO SOB CONTRATO",
        },
        {
          id: "1539400",
          CN_CODIGO: "1539-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE CALCADOS DE MATERIAIS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1533500",
          CN_CODIGO: "1533-5/00",
          CN_DESCRICAO: "FABRICACAO DE CALCADOS DE MATERIAL SINTETICO",
        },
        {
          id: "1540800",
          CN_CODIGO: "1540-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE PARTES PARA CALCADOS, DE QUALQUER MATERIAL",
        },
        {
          id: "1532700",
          CN_CODIGO: "1532-7/00",
          CN_DESCRICAO: "FABRICACAO DE TENIS DE QUALQUER MATERIAL",
        },
        {
          id: "1610202",
          CN_CODIGO: "1610-2/02",
          CN_DESCRICAO: "SERRARIAS SEM DESDOBRAMENTO DE MADEIRA",
        },
        {
          id: "1621800",
          CN_CODIGO: "1621-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE MADEIRA LAMINADA E DE CHAPAS DE MADEIRA COMPENSADA, PRENSADA E AGLOMERADA",
        },
        {
          id: "1622602",
          CN_CODIGO: "1622-6/02",
          CN_DESCRICAO:
            "FABRICACAO DE ESQUADRIAS DE MADEIRA E DE PECAS DE MADEIRA PARA INSTALACOES INDUSTRIAIS E COMERCIAIS",
        },
        {
          id: "1622699",
          CN_CODIGO: "1622-6/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS ARTIGOS DE CARPINTARIA PARA CONSTRUCAO",
        },
        {
          id: "1623400",
          CN_CODIGO: "1623-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE TANOARIA E DE EMBALAGENS DE MADEIRA",
        },
        {
          id: "1629301",
          CN_CODIGO: "1629-3/01",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DIVERSOS DE MADEIRA, EXCETO MOVEIS",
        },
        {
          id: "1629302",
          CN_CODIGO: "1629-3/02",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DIVERSOS DE CORTICA, BAMBU, PALHA, VIME E OUTROS MATERIAIS TRANCADOS, EXCETO MOVEIS",
        },
        {
          id: "1622601",
          CN_CODIGO: "1622-6/01",
          CN_DESCRICAO: "FABRICACAO DE CASAS DE MADEIRA PRE-FABRICADAS",
        },
        {
          id: "1710900",
          CN_CODIGO: "1710-9/00",
          CN_DESCRICAO:
            "FABRICACAO DE CELULOSE E OUTRAS PASTAS PARA A FABRICACAO DE PAPEL",
        },
        {
          id: "1721400",
          CN_CODIGO: "1721-4/00",
          CN_DESCRICAO: "FABRICACAO DE PAPEL",
        },
        {
          id: "1722200",
          CN_CODIGO: "1722-2/00",
          CN_DESCRICAO: "FABRICACAO DE CARTOLINA E PAPEL-CARTAO",
        },
        {
          id: "1732000",
          CN_CODIGO: "1732-0/00",
          CN_DESCRICAO: "FABRICACAO DE EMBALAGENS DE CARTOLINA E PAPEL-CARTAO",
        },
        {
          id: "1731100",
          CN_CODIGO: "1731-1/00",
          CN_DESCRICAO: "FABRICACAO DE EMBALAGENS DE PAPEL",
        },
        {
          id: "1610201",
          CN_CODIGO: "1610-2/01",
          CN_DESCRICAO: "SERRARIAS COM DESDOBRAMENTO DE MADEIRA",
        },
        {
          id: "1733800",
          CN_CODIGO: "1733-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE CHAPAS E DE EMBALAGENS DE PAPELAO ONDULADO",
        },
        {
          id: "1741902",
          CN_CODIGO: "1741-9/02",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS DE PAPEL, CARTOLINA, PAPEL-CARTAO E PAPELAO ONDULADO PARA USO INDUSTRIAL, COMERCIAL E DE ESCRITORIO, EXCETO FORMULARIO CONTINUO",
        },
        {
          id: "1742702",
          CN_CODIGO: "1742-7/02",
          CN_DESCRICAO: "FABRICACAO DE ABSORVENTES HIGIENICOS",
        },
        {
          id: "1742701",
          CN_CODIGO: "1742-7/01",
          CN_DESCRICAO: "FABRICACAO DE FRALDAS DESCARTAVEIS",
        },
        {
          id: "1742799",
          CN_CODIGO: "1742-7/99",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS DE PAPEL PARA USO DOMESTICO E HIGIENICO-SANITARIO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1749400",
          CN_CODIGO: "1749-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS DE PASTAS CELULOSICAS, PAPEL, CARTOLINA, PAPEL-CARTAO E PAPELAO ONDULADO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1811301",
          CN_CODIGO: "1811-3/01",
          CN_DESCRICAO: "IMPRESSAO DE JORNAIS",
        },
        {
          id: "1811302",
          CN_CODIGO: "1811-3/02",
          CN_DESCRICAO:
            "IMPRESSAO DE LIVROS, REVISTAS E OUTRAS PUBLICACOES PERIODICAS",
        },
        {
          id: "1813001",
          CN_CODIGO: "1813-0/01",
          CN_DESCRICAO: "IMPRESSAO DE MATERIAL PARA USO PUBLICITARIO",
        },
        {
          id: "1812100",
          CN_CODIGO: "1812-1/00",
          CN_DESCRICAO: "IMPRESSAO DE MATERIAL DE SEGURANCA",
        },
        {
          id: "1741901",
          CN_CODIGO: "1741-9/01",
          CN_DESCRICAO: "FABRICACAO DE FORMULARIOS CONTINUOS",
        },
        {
          id: "1813099",
          CN_CODIGO: "1813-0/99",
          CN_DESCRICAO: "IMPRESSAO DE MATERIAL PARA OUTROS USOS",
        },
        {
          id: "1821100",
          CN_CODIGO: "1821-1/00",
          CN_DESCRICAO: "SERVICOS DE PRE-IMPRESSAO",
        },
        {
          id: "1830001",
          CN_CODIGO: "1830-0/01",
          CN_DESCRICAO: "REPRODUCAO DE SOM EM QUALQUER SUPORTE",
        },
        {
          id: "1830003",
          CN_CODIGO: "1830-0/03",
          CN_DESCRICAO: "REPRODUCAO DE SOFTWARE EM QUALQUER SUPORTE",
        },
        {
          id: "1822900",
          CN_CODIGO: "1822-9/00",
          CN_DESCRICAO: "SERVICOS DE ACABAMENTOS GRAFICOS",
        },
        {
          id: "1830002",
          CN_CODIGO: "1830-0/02",
          CN_DESCRICAO: "REPRODUCAO DE VIDEO EM QUALQUER SUPORTE",
        },
        {
          id: "1921700",
          CN_CODIGO: "1921-7/00",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS DO REFINO DE PETROLEO",
        },
        {
          id: "1922501",
          CN_CODIGO: "1922-5/01",
          CN_DESCRICAO: "FORMULACAO DE COMBUSTIVEIS",
        },
        {
          id: "1922502",
          CN_CODIGO: "1922-5/02",
          CN_DESCRICAO: "RERREFINO DE OLEOS LUBRIFICANTES",
        },
        {
          id: "1922599",
          CN_CODIGO: "1922-5/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS DERIVADOS DO PETROLEO, EXCETO PRODUTOS DO REFINO",
        },
        {
          id: "1932200",
          CN_CODIGO: "1932-2/00",
          CN_DESCRICAO: "FABRICACAO DE BIOCOMBUSTIVEIS, EXCETO ALCOOL",
        },
        { id: "1910100", CN_CODIGO: "1910-1/00", CN_DESCRICAO: "COQUERIAS" },
        {
          id: "2011800",
          CN_CODIGO: "2011-8/00",
          CN_DESCRICAO: "FABRICACAO DE CLORO E ALCALIS",
        },
        {
          id: "2013400",
          CN_CODIGO: "2013-4/00",
          CN_DESCRICAO: "FABRICACAO DE ADUBOS E FERTILIZANTES",
        },
        {
          id: "2012600",
          CN_CODIGO: "2012-6/00",
          CN_DESCRICAO: "FABRICACAO DE INTERMEDIARIOS PARA FERTILIZANTES",
        },
        {
          id: "2019301",
          CN_CODIGO: "2019-3/01",
          CN_DESCRICAO: "ELABORACAO DE COMBUSTIVEIS NUCLEARES",
        },
        {
          id: "2019399",
          CN_CODIGO: "2019-3/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS QUIMICOS INORGANICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "1931400",
          CN_CODIGO: "1931-4/00",
          CN_DESCRICAO: "FABRICACAO DE ALCOOL",
        },
        {
          id: "2014200",
          CN_CODIGO: "2014-2/00",
          CN_DESCRICAO: "FABRICACAO DE GASES INDUSTRIAIS",
        },
        {
          id: "2021500",
          CN_CODIGO: "2021-5/00",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS PETROQUIMICOS BASICOS",
        },
        {
          id: "2022300",
          CN_CODIGO: "2022-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE INTERMEDIARIOS PARA PLASTIFICANTES, RESINAS E FIBRAS",
        },
        {
          id: "2029100",
          CN_CODIGO: "2029-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS QUIMICOS ORGANICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2031200",
          CN_CODIGO: "2031-2/00",
          CN_DESCRICAO: "FABRICACAO DE RESINAS TERMOPLASTICAS",
        },
        {
          id: "2040100",
          CN_CODIGO: "2040-1/00",
          CN_DESCRICAO: "FABRICACAO DE FIBRAS ARTIFICIAIS E SINTETICAS",
        },
        {
          id: "2032100",
          CN_CODIGO: "2032-1/00",
          CN_DESCRICAO: "FABRICACAO DE RESINAS TERMOFIXAS",
        },
        {
          id: "2051700",
          CN_CODIGO: "2051-7/00",
          CN_DESCRICAO: "FABRICACAO DE DEFENSIVOS AGRICOLAS",
        },
        {
          id: "2052500",
          CN_CODIGO: "2052-5/00",
          CN_DESCRICAO: "FABRICACAO DE DESINFESTANTES DOMISSANITARIOS",
        },
        {
          id: "2061400",
          CN_CODIGO: "2061-4/00",
          CN_DESCRICAO: "FABRICACAO DE SABOES E DETERGENTES SINTETICOS",
        },
        {
          id: "2063100",
          CN_CODIGO: "2063-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE COSMETICOS, PRODUTOS DE PERFUMARIA E DE HIGIENE PESSOAL",
        },
        {
          id: "2033900",
          CN_CODIGO: "2033-9/00",
          CN_DESCRICAO: "FABRICACAO DE ELASTOMEROS",
        },
        {
          id: "2071100",
          CN_CODIGO: "2071-1/00",
          CN_DESCRICAO: "FABRICACAO DE TINTAS, VERNIZES, ESMALTES E LACAS",
        },
        {
          id: "2073800",
          CN_CODIGO: "2073-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE IMPERMEABILIZANTES, SOLVENTES E PRODUTOS AFINS",
        },
        {
          id: "2072000",
          CN_CODIGO: "2072-0/00",
          CN_DESCRICAO: "FABRICACAO DE TINTAS DE IMPRESSAO",
        },
        {
          id: "2062200",
          CN_CODIGO: "2062-2/00",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS DE LIMPEZA E POLIMENTO",
        },
        {
          id: "2092401",
          CN_CODIGO: "2092-4/01",
          CN_DESCRICAO: "FABRICACAO DE POLVORAS, EXPLOSIVOS E DETONANTES",
        },
        {
          id: "2092403",
          CN_CODIGO: "2092-4/03",
          CN_DESCRICAO: "FABRICACAO DE FOSFOROS DE SEGURANCA",
        },
        {
          id: "2092402",
          CN_CODIGO: "2092-4/02",
          CN_DESCRICAO: "FABRICACAO DE ARTIGOS PIROTECNICOS",
        },
        {
          id: "2093200",
          CN_CODIGO: "2093-2/00",
          CN_DESCRICAO: "FABRICACAO DE ADITIVOS DE USO INDUSTRIAL",
        },
        {
          id: "2099101",
          CN_CODIGO: "2099-1/01",
          CN_DESCRICAO:
            "FABRICACAO DE CHAPAS, FILMES, PAPEIS E OUTROS MATERIAIS E PRODUTOS QUIMICOS PARA FOTOGRAFIA",
        },
        {
          id: "2094100",
          CN_CODIGO: "2094-1/00",
          CN_DESCRICAO: "FABRICACAO DE CATALISADORES",
        },
        {
          id: "2091600",
          CN_CODIGO: "2091-6/00",
          CN_DESCRICAO: "FABRICACAO DE ADESIVOS E SELANTES",
        },
        {
          id: "2099199",
          CN_CODIGO: "2099-1/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS QUIMICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2121102",
          CN_CODIGO: "2121-1/02",
          CN_DESCRICAO:
            "FABRICACAO DE MEDICAMENTOS HOMEOPATICOS PARA USO HUMANO",
        },
        {
          id: "2121103",
          CN_CODIGO: "2121-1/03",
          CN_DESCRICAO:
            "FABRICACAO DE MEDICAMENTOS FITOTERAPICOS PARA USO HUMANO",
        },
        {
          id: "2122000",
          CN_CODIGO: "2122-0/00",
          CN_DESCRICAO: "FABRICACAO DE MEDICAMENTOS PARA USO VETERINARIO",
        },
        {
          id: "2110600",
          CN_CODIGO: "2110-6/00",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS FARMOQUIMICOS",
        },
        {
          id: "2121101",
          CN_CODIGO: "2121-1/01",
          CN_DESCRICAO: "FABRICACAO DE MEDICAMENTOS ALOPATICOS PARA USO HUMANO",
        },
        {
          id: "2212900",
          CN_CODIGO: "2212-9/00",
          CN_DESCRICAO: "REFORMA DE PNEUMATICOS USADOS",
        },
        {
          id: "2211100",
          CN_CODIGO: "2211-1/00",
          CN_DESCRICAO: "FABRICACAO DE PNEUMATICOS E DE CAMARAS-DE-AR",
        },
        {
          id: "2219600",
          CN_CODIGO: "2219-6/00",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE BORRACHA NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2123800",
          CN_CODIGO: "2123-8/00",
          CN_DESCRICAO: "FABRICACAO DE PREPARACOES FARMACEUTICAS",
        },
        {
          id: "2221800",
          CN_CODIGO: "2221-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE LAMINADOS PLANOS E TUBULARES DE MATERIAL PLASTICO",
        },
        {
          id: "2223400",
          CN_CODIGO: "2223-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE TUBOS E ACESSORIOS DE MATERIAL PLASTICO PARA USO NA CONSTRUCAO",
        },
        {
          id: "2229302",
          CN_CODIGO: "2229-3/02",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE MATERIAL PLASTICO PARA USOS INDUSTRIAIS",
        },
        {
          id: "2229301",
          CN_CODIGO: "2229-3/01",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE MATERIAL PLASTICO PARA USO PESSOAL E DOMESTICO",
        },
        {
          id: "2229303",
          CN_CODIGO: "2229-3/03",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE MATERIAL PLASTICO PARA USO NA CONSTRUCAO, EXCETO TUBOS E ACESSORIOS",
        },
        {
          id: "2311700",
          CN_CODIGO: "2311-7/00",
          CN_DESCRICAO: "FABRICACAO DE VIDRO PLANO E DE SEGURANCA",
        },
        {
          id: "2229399",
          CN_CODIGO: "2229-3/99",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE MATERIAL PLASTICO PARA OUTROS USOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2319200",
          CN_CODIGO: "2319-2/00",
          CN_DESCRICAO: "FABRICACAO DE ARTIGOS DE VIDRO",
        },
        {
          id: "2222600",
          CN_CODIGO: "2222-6/00",
          CN_DESCRICAO: "FABRICACAO DE EMBALAGENS DE MATERIAL PLASTICO",
        },
        {
          id: "2330301",
          CN_CODIGO: "2330-3/01",
          CN_DESCRICAO:
            "FABRICACAO DE ESTRUTURAS PRE-MOLDADAS DE CONCRETO ARMADO, EM SERIE E SOB ENCOMENDA",
        },
        {
          id: "2330302",
          CN_CODIGO: "2330-3/02",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE CIMENTO PARA USO NA CONSTRUCAO",
        },
        {
          id: "2320600",
          CN_CODIGO: "2320-6/00",
          CN_DESCRICAO: "FABRICACAO DE CIMENTO",
        },
        {
          id: "2312500",
          CN_CODIGO: "2312-5/00",
          CN_DESCRICAO: "FABRICACAO DE EMBALAGENS DE VIDRO",
        },
        {
          id: "2330303",
          CN_CODIGO: "2330-3/03",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE FIBROCIMENTO PARA USO NA CONSTRUCAO",
        },
        {
          id: "2330399",
          CN_CODIGO: "2330-3/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS ARTEFATOS E PRODUTOS DE CONCRETO, CIMENTO, FIBROCIMENTO, GESSO E MATERIAIS SEMELHANTES",
        },
        {
          id: "2330305",
          CN_CODIGO: "2330-3/05",
          CN_DESCRICAO:
            "PREPARACAO DE MASSA DE CONCRETO E ARGAMASSA PARA CONSTRUCAO",
        },
        {
          id: "2342701",
          CN_CODIGO: "2342-7/01",
          CN_DESCRICAO: "FABRICACAO DE AZULEJOS E PISOS",
        },
        {
          id: "2341900",
          CN_CODIGO: "2341-9/00",
          CN_DESCRICAO: "FABRICACAO DE PRODUTOS CERAMICOS REFRATARIOS",
        },
        {
          id: "2342702",
          CN_CODIGO: "2342-7/02",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE CERAMICA E BARRO COZIDO PARA USO NA CONSTRUCAO, EXCETO AZULEJOS E PISOS",
        },
        {
          id: "2349499",
          CN_CODIGO: "2349-4/99",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS CERAMICOS NAO-REFRATARIOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2349401",
          CN_CODIGO: "2349-4/01",
          CN_DESCRICAO: "FABRICACAO DE MATERIAL SANITARIO DE CERAMICA",
        },
        {
          id: "2391501",
          CN_CODIGO: "2391-5/01",
          CN_DESCRICAO: "BRITAMENTO DE PEDRAS, EXCETO ASSOCIADO … EXTRACAO",
        },
        {
          id: "2391503",
          CN_CODIGO: "2391-5/03",
          CN_DESCRICAO:
            "APARELHAMENTO DE PLACAS E EXECUCAO DE TRABALHOS EM MARMORE, GRANITO, ARDOSIA E OUTRAS PEDRAS",
        },
        {
          id: "2330304",
          CN_CODIGO: "2330-3/04",
          CN_DESCRICAO: "FABRICACAO DE CASAS PRE-MOLDADAS DE CONCRETO",
        },
        {
          id: "2392300",
          CN_CODIGO: "2392-3/00",
          CN_DESCRICAO: "FABRICACAO DE CAL E GESSO",
        },
        {
          id: "2391502",
          CN_CODIGO: "2391-5/02",
          CN_DESCRICAO:
            "APARELHAMENTO DE PEDRAS PARA CONSTRUCAO, EXCETO ASSOCIADO … EXTRACAO",
        },
        {
          id: "2399199",
          CN_CODIGO: "2399-1/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS DE MINERAIS NAO-METALICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2399101",
          CN_CODIGO: "2399-1/01",
          CN_DESCRICAO:
            "DECORACAO, LAPIDACAO, GRAVACAO, VITRIFICACAO E OUTROS TRABALHOS EM CERAMICA, LOUCA, VIDRO E CRISTAL",
        },
        {
          id: "2411300",
          CN_CODIGO: "2411-3/00",
          CN_DESCRICAO: "PRODUCAO DE FERRO-GUSA",
        },
        {
          id: "2421100",
          CN_CODIGO: "2421-1/00",
          CN_DESCRICAO: "PRODUCAO DE SEMI-ACABADOS DE ACO",
        },
        {
          id: "2422901",
          CN_CODIGO: "2422-9/01",
          CN_DESCRICAO:
            "PRODUCAO DE LAMINADOS PLANOS DE ACO AO CARBONO, REVESTIDOS OU NAO",
        },
        {
          id: "2423701",
          CN_CODIGO: "2423-7/01",
          CN_DESCRICAO: "PRODUCAO DE TUBOS DE ACO SEM COSTURA",
        },
        {
          id: "2422902",
          CN_CODIGO: "2422-9/02",
          CN_DESCRICAO: "PRODUCAO DE LAMINADOS PLANOS DE ACOS ESPECIAIS",
        },
        {
          id: "2423702",
          CN_CODIGO: "2423-7/02",
          CN_DESCRICAO: "PRODUCAO DE LAMINADOS LONGOS DE ACO, EXCETO TUBOS",
        },
        {
          id: "2424502",
          CN_CODIGO: "2424-5/02",
          CN_DESCRICAO:
            "PRODUCAO DE RELAMINADOS, TREFILADOS E PERFILADOS DE ACO, EXCETO ARAMES",
        },
        {
          id: "2412100",
          CN_CODIGO: "2412-1/00",
          CN_DESCRICAO: "PRODUCAO DE FERROLIGAS",
        },
        {
          id: "2424501",
          CN_CODIGO: "2424-5/01",
          CN_DESCRICAO: "PRODUCAO DE ARAMES DE ACO",
        },
        {
          id: "2431800",
          CN_CODIGO: "2431-8/00",
          CN_DESCRICAO: "PRODUCAO DE TUBOS DE ACO COM COSTURA",
        },
        {
          id: "2441501",
          CN_CODIGO: "2441-5/01",
          CN_DESCRICAO: "PRODUCAO DE ALUMINIO E SUAS LIGAS EM FORMAS PRIMARIAS",
        },
        {
          id: "2439300",
          CN_CODIGO: "2439-3/00",
          CN_DESCRICAO: "PRODUCAO DE OUTROS TUBOS DE FERRO E ACO",
        },
        {
          id: "2443100",
          CN_CODIGO: "2443-1/00",
          CN_DESCRICAO: "METALURGIA DO COBRE",
        },
        {
          id: "2442300",
          CN_CODIGO: "2442-3/00",
          CN_DESCRICAO: "METALURGIA DOS METAIS PRECIOSOS",
        },
        {
          id: "2449101",
          CN_CODIGO: "2449-1/01",
          CN_DESCRICAO: "PRODUCAO DE ZINCO EM FORMAS PRIMARIAS",
        },
        {
          id: "2449103",
          CN_CODIGO: "2449-1/03",
          CN_DESCRICAO: "PRODUCAO DE SOLDAS E ANODOS PARA GALVANOPLASTIA",
        },
        {
          id: "2449199",
          CN_CODIGO: "2449-1/99",
          CN_DESCRICAO:
            "METALURGIA DE OUTROS METAIS NAO-FERROSOS E SUAS LIGAS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2449102",
          CN_CODIGO: "2449-1/02",
          CN_DESCRICAO: "PRODUCAO DE LAMINADOS DE ZINCO",
        },
        {
          id: "2441502",
          CN_CODIGO: "2441-5/02",
          CN_DESCRICAO: "PRODUCAO DE LAMINADOS DE ALUMINIO",
        },
        {
          id: "2452100",
          CN_CODIGO: "2452-1/00",
          CN_DESCRICAO: "FUNDICAO DE METAIS NAO-FERROSOS E SUAS LIGAS",
        },
        {
          id: "2512800",
          CN_CODIGO: "2512-8/00",
          CN_DESCRICAO: "FABRICACAO DE ESQUADRIAS DE METAL",
        },
        {
          id: "2511000",
          CN_CODIGO: "2511-0/00",
          CN_DESCRICAO: "FABRICACAO DE ESTRUTURAS METALICAS",
        },
        {
          id: "2513600",
          CN_CODIGO: "2513-6/00",
          CN_DESCRICAO: "FABRICACAO DE OBRAS DE CALDEIRARIA PESADA",
        },
        {
          id: "2521700",
          CN_CODIGO: "2521-7/00",
          CN_DESCRICAO:
            "FABRICACAO DE TANQUES, RESERVATORIOS METALICOS E CALDEIRAS PARA AQUECIMENTO CENTRAL",
        },
        {
          id: "2522500",
          CN_CODIGO: "2522-5/00",
          CN_DESCRICAO:
            "FABRICACAO DE CALDEIRAS GERADORAS DE VAPOR, EXCETO PARA AQUECIMENTO CENTRAL E PARA VEICULOS",
        },
        {
          id: "2531402",
          CN_CODIGO: "2531-4/02",
          CN_DESCRICAO:
            "PRODUCAO DE FORJADOS DE METAIS NAO-FERROSOS E SUAS LIGAS",
        },
        {
          id: "2531401",
          CN_CODIGO: "2531-4/01",
          CN_DESCRICAO: "PRODUCAO DE FORJADOS DE ACO",
        },
        {
          id: "2532201",
          CN_CODIGO: "2532-2/01",
          CN_DESCRICAO: "PRODUCAO DE ARTEFATOS ESTAMPADOS DE METAL",
        },
        {
          id: "2539000",
          CN_CODIGO: "2539-0/00",
          CN_DESCRICAO:
            "SERVICOS DE USINAGEM, SOLDA, TRATAMENTO E REVESTIMENTO EM METAIS",
        },
        {
          id: "2451200",
          CN_CODIGO: "2451-2/00",
          CN_DESCRICAO: "FUNDICAO DE FERRO E ACO",
        },
        {
          id: "2541100",
          CN_CODIGO: "2541-1/00",
          CN_DESCRICAO: "FABRICACAO DE ARTIGOS DE CUTELARIA",
        },
        {
          id: "2542000",
          CN_CODIGO: "2542-0/00",
          CN_DESCRICAO:
            "FABRICACAO DE ARTIGOS DE SERRALHERIA, EXCETO ESQUADRIAS",
        },
        {
          id: "2543800",
          CN_CODIGO: "2543-8/00",
          CN_DESCRICAO: "FABRICACAO DE FERRAMENTAS",
        },
        {
          id: "2532202",
          CN_CODIGO: "2532-2/02",
          CN_DESCRICAO: "METALURGIA DO PO",
        },
        {
          id: "2550101",
          CN_CODIGO: "2550-1/01",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTO BELICO PESADO, EXCETO VEICULOS MILITARES DE COMBATE",
        },
        {
          id: "2550102",
          CN_CODIGO: "2550-1/02",
          CN_DESCRICAO: "FABRICACAO DE ARMAS DE FOGO E MUNICOES",
        },
        {
          id: "2591800",
          CN_CODIGO: "2591-8/00",
          CN_DESCRICAO: "FABRICACAO DE EMBALAGENS METALICAS",
        },
        {
          id: "2592601",
          CN_CODIGO: "2592-6/01",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS DE TREFILADOS DE METAL PADRONIZADOS",
        },
        {
          id: "2593400",
          CN_CODIGO: "2593-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE ARTIGOS DE METAL PARA USO DOMESTICO E PESSOAL",
        },
        {
          id: "2599301",
          CN_CODIGO: "2599-3/01",
          CN_DESCRICAO:
            "SERVICOS DE CONFECCAO DE ARMACOES METALICAS PARA A CONSTRUCAO",
        },
        {
          id: "2599399",
          CN_CODIGO: "2599-3/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS PRODUTOS DE METAL NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2610800",
          CN_CODIGO: "2610-8/00",
          CN_DESCRICAO: "FABRICACAO DE COMPONENTES ELETRONICOS",
        },
        {
          id: "2621300",
          CN_CODIGO: "2621-3/00",
          CN_DESCRICAO: "FABRICACAO DE EQUIPAMENTOS DE INFORMATICA",
        },
        {
          id: "2622100",
          CN_CODIGO: "2622-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE PERIFERICOS PARA EQUIPAMENTOS DE INFORMATICA",
        },
        {
          id: "2631100",
          CN_CODIGO: "2631-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTOS TRANSMISSORES DE COMUNICACAO, PECAS E ACESSORIOS",
        },
        {
          id: "2632900",
          CN_CODIGO: "2632-9/00",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS TELEFONICOS E DE OUTROS EQUIPAMENTOS DE COMUNICACAO, PECAS E ACESSORIOS",
        },
        {
          id: "2651500",
          CN_CODIGO: "2651-5/00",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS E EQUIPAMENTOS DE MEDIDA, TESTE E CONTROLE",
        },
        {
          id: "2640000",
          CN_CODIGO: "2640-0/00",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS DE RECEPCAO, REPRODUCAO, GRAVACAO E AMPLIFICACAO DE AUDIO E VIDEO",
        },
        {
          id: "2660400",
          CN_CODIGO: "2660-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS ELETROMEDICOS E ELETROTERAPEUTICOS E EQUIPAMENTOS DE IRRADIACAO",
        },
        {
          id: "2652300",
          CN_CODIGO: "2652-3/00",
          CN_DESCRICAO: "FABRICACAO DE CRONOMETROS E RELOGIOS",
        },
        {
          id: "2592602",
          CN_CODIGO: "2592-6/02",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS DE TREFILADOS DE METAL, EXCETO PADRONIZADOS",
        },
        {
          id: "2680900",
          CN_CODIGO: "2680-9/00",
          CN_DESCRICAO: "FABRICACAO DE MIDIAS VIRGENS, MAGNETICAS E OPTICAS",
        },
        {
          id: "2670101",
          CN_CODIGO: "2670-1/01",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTOS E INSTRUMENTOS OPTICOS, PECAS E ACESSORIOS",
        },
        {
          id: "2710401",
          CN_CODIGO: "2710-4/01",
          CN_DESCRICAO:
            "FABRICACAO DE GERADORES DE CORRENTE CONTINUA E ALTERNADA, PECAS E ACESSORIOS",
        },
        {
          id: "2710402",
          CN_CODIGO: "2710-4/02",
          CN_DESCRICAO:
            "FABRICACAO DE TRANSFORMADORES, INDUTORES, CONVERSORES, SINCRONIZADORES E SEMELHANTES, PECAS E ACESSORIOS",
        },
        {
          id: "2721000",
          CN_CODIGO: "2721-0/00",
          CN_DESCRICAO:
            "FABRICACAO DE PILHAS, BATERIAS E ACUMULADORES ELETRICOS, EXCETO PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "2722801",
          CN_CODIGO: "2722-8/01",
          CN_DESCRICAO:
            "FABRICACAO DE BATERIAS E ACUMULADORES PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "2670102",
          CN_CODIGO: "2670-1/02",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS FOTOGRAFICOS E CINEMATOGRAFICOS, PECAS E ACESSORIOS",
        },
        {
          id: "2731700",
          CN_CODIGO: "2731-7/00",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS E EQUIPAMENTOS PARA DISTRIBUICAO E CONTROLE DE ENERGIA ELETRICA",
        },
        {
          id: "2710403",
          CN_CODIGO: "2710-4/03",
          CN_DESCRICAO: "FABRICACAO DE MOTORES ELETRICOS, PECAS E ACESSORIOS",
        },
        {
          id: "2732500",
          CN_CODIGO: "2732-5/00",
          CN_DESCRICAO:
            "FABRICACAO DE MATERIAL ELETRICO PARA INSTALACOES EM CIRCUITO DE CONSUMO",
        },
        {
          id: "2740601",
          CN_CODIGO: "2740-6/01",
          CN_DESCRICAO: "FABRICACAO DE LAMPADAS",
        },
        {
          id: "2722802",
          CN_CODIGO: "2722-8/02",
          CN_DESCRICAO:
            "RECONDICIONAMENTO DE BATERIAS E ACUMULADORES PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "2751100",
          CN_CODIGO: "2751-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE FOGOES, REFRIGERADORES E MAQUINAS DE LAVAR E SECAR PARA USO DOMESTICO, PECAS E ACESSORIOS",
        },
        {
          id: "2740602",
          CN_CODIGO: "2740-6/02",
          CN_DESCRICAO:
            "FABRICACAO DE LUMINARIAS E OUTROS EQUIPAMENTOS DE ILUMINACAO",
        },
        {
          id: "2759701",
          CN_CODIGO: "2759-7/01",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS ELETRICOS DE USO PESSOAL, PECAS E ACESSORIOS",
        },
        {
          id: "2759799",
          CN_CODIGO: "2759-7/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS APARELHOS ELETRODOMESTICOS NAO ESPECIFICADOS ANTERIORMENTE, PECAS E ACESSORIOS",
        },
        {
          id: "2790201",
          CN_CODIGO: "2790-2/01",
          CN_DESCRICAO:
            "FABRICACAO DE ELETRODOS, CONTATOS E OUTROS ARTIGOS DE CARVAO E GRAFITA PARA USO ELETRICO, ELETROIMAS E ISOLADORES",
        },
        {
          id: "2790202",
          CN_CODIGO: "2790-2/02",
          CN_DESCRICAO: "FABRICACAO DE EQUIPAMENTOS PARA SINALIZACAO E ALARME",
        },
        {
          id: "2790299",
          CN_CODIGO: "2790-2/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS EQUIPAMENTOS E APARELHOS ELETRICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "2811900",
          CN_CODIGO: "2811-9/00",
          CN_DESCRICAO:
            "FABRICACAO DE MOTORES E TURBINAS, PECAS E ACESSORIOS, EXCETO PARA AVIOES E VEICULOS RODOVIARIOS",
        },
        {
          id: "2813500",
          CN_CODIGO: "2813-5/00",
          CN_DESCRICAO:
            "FABRICACAO DE VALVULAS, REGISTROS E DISPOSITIVOS SEMELHANTES, PECAS E ACESSORIOS",
        },
        {
          id: "2812700",
          CN_CODIGO: "2812-7/00",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTOS HIDRAULICOS E PNEUMATICOS, PECAS E ACESSORIOS, EXCETO VALVULAS",
        },
        {
          id: "2733300",
          CN_CODIGO: "2733-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE FIOS, CABOS E CONDUTORES ELETRICOS ISOLADOS",
        },
        {
          id: "2814301",
          CN_CODIGO: "2814-3/01",
          CN_DESCRICAO:
            "FABRICACAO DE COMPRESSORES PARA USO INDUSTRIAL, PECAS E ACESSORIOS",
        },
        {
          id: "2815102",
          CN_CODIGO: "2815-1/02",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTOS DE TRANSMISSAO PARA FINS INDUSTRIAIS, EXCETO ROLAMENTOS",
        },
        {
          id: "2814302",
          CN_CODIGO: "2814-3/02",
          CN_DESCRICAO:
            "FABRICACAO DE COMPRESSORES PARA USO NAO INDUSTRIAL, PECAS E ACESSORIOS",
        },
        {
          id: "2821601",
          CN_CODIGO: "2821-6/01",
          CN_DESCRICAO:
            "FABRICACAO DE FORNOS INDUSTRIAIS, APARELHOS E EQUIPAMENTOS NAO-ELETRICOS PARA INSTALACOES TERMICAS, PECAS E ACESSORIOS",
        },
        {
          id: "2815101",
          CN_CODIGO: "2815-1/01",
          CN_DESCRICAO: "FABRICACAO DE ROLAMENTOS PARA FINS INDUSTRIAIS",
        },
        {
          id: "2822401",
          CN_CODIGO: "2822-4/01",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS, EQUIPAMENTOS E APARELHOS PARA TRANSPORTE E ELEVACAO DE PESSOAS, PECAS E ACESSORIOS",
        },
        {
          id: "2823200",
          CN_CODIGO: "2823-2/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E APARELHOS DE REFRIGERACAO E VENTILACAO PARA USO INDUSTRIAL E COMERCIAL, PECAS E ACESSORIOS",
        },
        {
          id: "2821602",
          CN_CODIGO: "2821-6/02",
          CN_DESCRICAO:
            "FABRICACAO DE ESTUFAS E FORNOS ELETRICOS PARA FINS INDUSTRIAIS, PECAS E ACESSORIOS",
        },
        {
          id: "2822402",
          CN_CODIGO: "2822-4/02",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS, EQUIPAMENTOS E APARELHOS PARA TRANSPORTE E ELEVACAO DE CARGAS, PECAS E ACESSORIOS",
        },
        {
          id: "2824102",
          CN_CODIGO: "2824-1/02",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS E EQUIPAMENTOS DE AR CONDICIONADO PARA USO NAO-INDUSTRIAL",
        },
        {
          id: "2825900",
          CN_CODIGO: "2825-9/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA SANEAMENTO BASICO E AMBIENTAL, PECAS E ACESSORIOS",
        },
        {
          id: "2829101",
          CN_CODIGO: "2829-1/01",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS DE ESCREVER, CALCULAR E OUTROS EQUIPAMENTOS NAO-ELETRONICOS PARA ESCRITORIO, PECAS E ACESSORIOS",
        },
        {
          id: "2831300",
          CN_CODIGO: "2831-3/00",
          CN_DESCRICAO: "FABRICACAO DE TRATORES AGRICOLAS, PECAS E ACESSORIOS",
        },
        {
          id: "2829199",
          CN_CODIGO: "2829-1/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTRAS MAQUINAS E EQUIPAMENTOS DE USO GERAL NAO ESPECIFICADOS ANTERIORMENTE, PECAS E ACESSORIOS",
        },
        {
          id: "2833000",
          CN_CODIGO: "2833-0/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA A AGRICULTURA E PECUARIA, PECAS E ACESSORIOS, EXCETO PARA IRRIGACAO",
        },
        {
          id: "2832100",
          CN_CODIGO: "2832-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTOS PARA IRRIGACAO AGRICOLA, PECAS E ACESSORIOS",
        },
        {
          id: "2851800",
          CN_CODIGO: "2851-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA A PROSPECCAO E EXTRACAO DE PETROLEO, PECAS E ACESSORIOS",
        },
        {
          id: "2824101",
          CN_CODIGO: "2824-1/01",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS E EQUIPAMENTOS DE AR CONDICIONADO PARA USO INDUSTRIAL",
        },
        {
          id: "2852600",
          CN_CODIGO: "2852-6/00",
          CN_DESCRICAO:
            "FABRICACAO DE OUTRAS MAQUINAS E EQUIPAMENTOS PARA USO NA EXTRACAO MINERAL, PECAS E ACESSORIOS, EXCETO NA EXTRACAO DE PETROLEO",
        },
        {
          id: "2853400",
          CN_CODIGO: "2853-4/00",
          CN_DESCRICAO:
            "FABRICACAO DE TRATORES, PECAS E ACESSORIOS, EXCETO AGRICOLAS",
        },
        {
          id: "2840200",
          CN_CODIGO: "2840-2/00",
          CN_DESCRICAO: "FABRICACAO DE MAQUINAS-FERRAMENTA, PECAS E ACESSORIOS",
        },
        {
          id: "2854200",
          CN_CODIGO: "2854-2/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA TERRAPLENAGEM, PAVIMENTACAO E CONSTRUCAO, PECAS E ACESSORIOS, EXCETO TRATORES",
        },
        {
          id: "2863100",
          CN_CODIGO: "2863-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA A INDUSTRIA TEXTIL, PECAS E ACESSORIOS",
        },
        {
          id: "2861500",
          CN_CODIGO: "2861-5/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS PARA A INDUSTRIA METALURGICA, PECAS E ACESSORIOS, EXCETO MAQUINAS-FERRAMENTA",
        },
        {
          id: "2864000",
          CN_CODIGO: "2864-0/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA AS INDUSTRIAS DO VESTUARIO, DO COURO E DE CALCADOS, PECAS E ACESSORIOS",
        },
        {
          id: "2866600",
          CN_CODIGO: "2866-6/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA A INDUSTRIA DO PLASTICO, PECAS E ACESSORIOS",
        },
        {
          id: "2865800",
          CN_CODIGO: "2865-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA AS INDUSTRIAS DE CELULOSE, PAPEL E PAPELAO E ARTEFATOS, PECAS E ACESSORIOS",
        },
        {
          id: "2869100",
          CN_CODIGO: "2869-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA USO INDUSTRIAL ESPECIFICO NAO ESPECIFICADOS ANTERIORMENTE, PECAS E ACESSORIOS",
        },
        {
          id: "2862300",
          CN_CODIGO: "2862-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE MAQUINAS E EQUIPAMENTOS PARA AS INDUSTRIAS DE ALIMENTOS, BEBIDAS E FUMO, PECAS E ACESSORIOS",
        },
        {
          id: "2910703",
          CN_CODIGO: "2910-7/03",
          CN_DESCRICAO:
            "FABRICACAO DE MOTORES PARA AUTOMOVEIS, CAMIONETAS E UTILITARIOS",
        },
        {
          id: "2910702",
          CN_CODIGO: "2910-7/02",
          CN_DESCRICAO:
            "FABRICACAO DE CHASSIS COM MOTOR PARA AUTOMOVEIS, CAMIONETAS E UTILITARIOS",
        },
        {
          id: "2920401",
          CN_CODIGO: "2920-4/01",
          CN_DESCRICAO: "FABRICACAO DE CAMINHOES E ONIBUS",
        },
        {
          id: "2920402",
          CN_CODIGO: "2920-4/02",
          CN_DESCRICAO: "FABRICACAO DE MOTORES PARA CAMINHOES E ONIBUS",
        },
        {
          id: "2930101",
          CN_CODIGO: "2930-1/01",
          CN_DESCRICAO:
            "FABRICACAO DE CABINES, CARROCERIAS E REBOQUES PARA CAMINHOES",
        },
        {
          id: "2930102",
          CN_CODIGO: "2930-1/02",
          CN_DESCRICAO: "FABRICACAO DE CARROCERIAS PARA ONIBUS",
        },
        {
          id: "2930103",
          CN_CODIGO: "2930-1/03",
          CN_DESCRICAO:
            "FABRICACAO DE CABINES, CARROCERIAS E REBOQUES PARA OUTROS VEICULOS AUTOMOTORES, EXCETO CAMINHOES E ONIBUS",
        },
        {
          id: "2941700",
          CN_CODIGO: "2941-7/00",
          CN_DESCRICAO:
            "FABRICACAO DE PECAS E ACESSORIOS PARA O SISTEMA MOTOR DE VEICULOS AUTOMOTORES",
        },
        {
          id: "2942500",
          CN_CODIGO: "2942-5/00",
          CN_DESCRICAO:
            "FABRICACAO DE PECAS E ACESSORIOS PARA OS SISTEMAS DE MARCHA E TRANSMISSAO DE VEICULOS AUTOMOTORES",
        },
        {
          id: "2943300",
          CN_CODIGO: "2943-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE PECAS E ACESSORIOS PARA O SISTEMA DE FREIOS DE VEICULOS AUTOMOTORES",
        },
        {
          id: "2944100",
          CN_CODIGO: "2944-1/00",
          CN_DESCRICAO:
            "FABRICACAO DE PECAS E ACESSORIOS PARA O SISTEMA DE DIRECAO E SUSPENSAO DE VEICULOS AUTOMOTORES",
        },
        {
          id: "2945000",
          CN_CODIGO: "2945-0/00",
          CN_DESCRICAO:
            "FABRICACAO DE MATERIAL ELETRICO E ELETRONICO PARA VEICULOS AUTOMOTORES, EXCETO BATERIAS",
        },
        {
          id: "2910701",
          CN_CODIGO: "2910-7/01",
          CN_DESCRICAO: "FABRICACAO DE AUTOMOVEIS, CAMIONETAS E UTILITARIOS",
        },
        {
          id: "2949299",
          CN_CODIGO: "2949-2/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTRAS PECAS E ACESSORIOS PARA VEICULOS AUTOMOTORES NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "2949201",
          CN_CODIGO: "2949-2/01",
          CN_DESCRICAO:
            "FABRICACAO DE BANCOS E ESTOFADOS PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "3011301",
          CN_CODIGO: "3011-3/01",
          CN_DESCRICAO: "CONSTRUCAO DE EMBARCACOES DE GRANDE PORTE",
        },
        {
          id: "2950600",
          CN_CODIGO: "2950-6/00",
          CN_DESCRICAO:
            "RECONDICIONAMENTO E RECUPERACAO DE MOTORES PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "3011302",
          CN_CODIGO: "3011-3/02",
          CN_DESCRICAO:
            "CONSTRUCAO DE EMBARCACOES PARA USO COMERCIAL E PARA USOS ESPECIAIS, EXCETO DE GRANDE PORTE",
        },
        {
          id: "3022900",
          CN_CODIGO: "3022-9/00",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE EMBARCACOES PARA ESPORTE E LAZER",
        },
        {
          id: "3021100",
          CN_CODIGO: "3021-1/00",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE EMBARCACOES E ESTRUTURAS FLUTUANTES",
        },
        {
          id: "3032600",
          CN_CODIGO: "3032-6/00",
          CN_DESCRICAO:
            "FABRICACAO DE PECAS E ACESSORIOS PARA VEICULOS FERROVIARIOS",
        },
        {
          id: "3031800",
          CN_CODIGO: "3031-8/00",
          CN_DESCRICAO:
            "FABRICACAO DE LOCOMOTIVAS, VAGOES E OUTROS MATERIAIS RODANTES",
        },
        {
          id: "3042300",
          CN_CODIGO: "3042-3/00",
          CN_DESCRICAO:
            "FABRICACAO DE TURBINAS, MOTORES E OUTROS COMPONENTES E PECAS PARA AERONAVES",
        },
        {
          id: "3012100",
          CN_CODIGO: "3012-1/00",
          CN_DESCRICAO: "CONSTRUCAO DE EMBARCACOES PARA ESPORTE E LAZER",
        },
        {
          id: "3041500",
          CN_CODIGO: "3041-5/00",
          CN_DESCRICAO: "FABRICACAO DE AERONAVES",
        },
        {
          id: "3091100",
          CN_CODIGO: "3091-1/00",
          CN_DESCRICAO: "FABRICACAO DE MOTOCICLETAS, PECAS E ACESSORIOS",
        },
        {
          id: "3092000",
          CN_CODIGO: "3092-0/00",
          CN_DESCRICAO:
            "FABRICACAO DE BICICLETAS E TRICICLOS NAO-MOTORIZADOS, PECAS E ACESSORIOS",
        },
        {
          id: "3101200",
          CN_CODIGO: "3101-2/00",
          CN_DESCRICAO: "FABRICACAO DE MOVEIS COM PREDOMINANCIA DE MADEIRA",
        },
        {
          id: "3099700",
          CN_CODIGO: "3099-7/00",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTOS DE TRANSPORTE NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3103900",
          CN_CODIGO: "3103-9/00",
          CN_DESCRICAO:
            "FABRICACAO DE MOVEIS DE OUTROS MATERIAIS, EXCETO MADEIRA E METAL",
        },
        {
          id: "3050400",
          CN_CODIGO: "3050-4/00",
          CN_DESCRICAO: "FABRICACAO DE VEICULOS MILITARES DE COMBATE",
        },
        {
          id: "3102100",
          CN_CODIGO: "3102-1/00",
          CN_DESCRICAO: "FABRICACAO DE MOVEIS COM PREDOMINANCIA DE METAL",
        },
        {
          id: "3211601",
          CN_CODIGO: "3211-6/01",
          CN_DESCRICAO: "LAPIDACAO DE GEMAS",
        },
        {
          id: "3104700",
          CN_CODIGO: "3104-7/00",
          CN_DESCRICAO: "FABRICACAO DE COLCHOES",
        },
        {
          id: "3211602",
          CN_CODIGO: "3211-6/02",
          CN_DESCRICAO: "FABRICACAO DE ARTEFATOS DE JOALHERIA E OURIVESARIA",
        },
        {
          id: "3220500",
          CN_CODIGO: "3220-5/00",
          CN_DESCRICAO:
            "FABRICACAO DE INSTRUMENTOS MUSICAIS, PECAS E ACESSORIOS",
        },
        {
          id: "3211603",
          CN_CODIGO: "3211-6/03",
          CN_DESCRICAO: "CUNHAGEM DE MOEDAS E MEDALHAS",
        },
        {
          id: "3212400",
          CN_CODIGO: "3212-4/00",
          CN_DESCRICAO: "FABRICACAO DE BIJUTERIAS E ARTEFATOS SEMELHANTES",
        },
        {
          id: "3240002",
          CN_CODIGO: "3240-0/02",
          CN_DESCRICAO:
            "FABRICACAO DE MESAS DE BILHAR, DE SINUCA E ACESSORIOS NAO ASSOCIADA … LOCACAO",
        },
        {
          id: "3240003",
          CN_CODIGO: "3240-0/03",
          CN_DESCRICAO:
            "FABRICACAO DE MESAS DE BILHAR, DE SINUCA E ACESSORIOS ASSOCIADA … LOCACAO",
        },
        {
          id: "3230200",
          CN_CODIGO: "3230-2/00",
          CN_DESCRICAO: "FABRICACAO DE ARTEFATOS PARA PESCA E ESPORTE",
        },
        {
          id: "3240099",
          CN_CODIGO: "3240-0/99",
          CN_DESCRICAO:
            "FABRICACAO DE OUTROS BRINQUEDOS E JOGOS RECREATIVOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3250701",
          CN_CODIGO: "3250-7/01",
          CN_DESCRICAO:
            "FABRICACAO DE INSTRUMENTOS NAO-ELETRONICOS E UTENSILIOS PARA USO MEDICO, CIRURGICO, ODONTOLOGICO E DE LABORATORIO",
        },
        {
          id: "3250703",
          CN_CODIGO: "3250-7/03",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS E UTENSILIOS PARA CORRECAO DE DEFEITOS FISICOS E APARELHOS ORTOPEDICOS EM GERAL SOB ENCOMENDA",
        },
        {
          id: "3250704",
          CN_CODIGO: "3250-7/04",
          CN_DESCRICAO:
            "FABRICACAO DE APARELHOS E UTENSILIOS PARA CORRECAO DE DEFEITOS FISICOS E APARELHOS ORTOPEDICOS EM GERAL, EXCETO SOB ENCOMENDA",
        },
        {
          id: "3250702",
          CN_CODIGO: "3250-7/02",
          CN_DESCRICAO:
            "FABRICACAO DE MOBILIARIO PARA USO MEDICO, CIRURGICO, ODONTOLOGICO E DE LABORATORIO",
        },
        {
          id: "3240001",
          CN_CODIGO: "3240-0/01",
          CN_DESCRICAO: "FABRICACAO DE JOGOS ELETRONICOS",
        },
        {
          id: "3250705",
          CN_CODIGO: "3250-7/05",
          CN_DESCRICAO: "FABRICACAO DE MATERIAIS PARA MEDICINA E ODONTOLOGIA",
        },
        {
          id: "3250708",
          CN_CODIGO: "3250-7/08",
          CN_DESCRICAO:
            "FABRICACAO DE ARTEFATOS DE TECIDO NAO TECIDO PARA USO ODONTO-MEDICO-HOSPITALAR",
        },
        {
          id: "3250707",
          CN_CODIGO: "3250-7/07",
          CN_DESCRICAO: "FABRICACAO DE ARTIGOS OPTICOS",
        },
        {
          id: "3291400",
          CN_CODIGO: "3291-4/00",
          CN_DESCRICAO: "FABRICACAO DE ESCOVAS, PINCEIS E VASSOURAS",
        },
        {
          id: "3292201",
          CN_CODIGO: "3292-2/01",
          CN_DESCRICAO:
            "FABRICACAO DE ROUPAS DE PROTECAO E SEGURANCA E RESISTENTES A FOGO",
        },
        {
          id: "3292202",
          CN_CODIGO: "3292-2/02",
          CN_DESCRICAO:
            "FABRICACAO DE EQUIPAMENTOS E ACESSORIOS PARA SEGURANCA PESSOAL E PROFISSIONAL",
        },
        {
          id: "3299001",
          CN_CODIGO: "3299-0/01",
          CN_DESCRICAO: "FABRICACAO DE GUARDA-CHUVAS E SIMILARES",
        },
        {
          id: "3299002",
          CN_CODIGO: "3299-0/02",
          CN_DESCRICAO:
            "FABRICACAO DE CANETAS, LAPIS E OUTROS ARTIGOS PARA ESCRITORIO",
        },
        {
          id: "3299003",
          CN_CODIGO: "3299-0/03",
          CN_DESCRICAO:
            "FABRICACAO DE LETRAS, LETREIROS E PLACAS DE QUALQUER MATERIAL, EXCETO LUMINOSOS",
        },
        {
          id: "3299005",
          CN_CODIGO: "3299-0/05",
          CN_DESCRICAO: "FABRICACAO DE AVIAMENTOS PARA COSTURA",
        },
        {
          id: "3299004",
          CN_CODIGO: "3299-0/04",
          CN_DESCRICAO: "FABRICACAO DE PAINEIS E LETREIROS LUMINOSOS",
        },
        {
          id: "3299099",
          CN_CODIGO: "3299-0/99",
          CN_DESCRICAO:
            "FABRICACAO DE PRODUTOS DIVERSOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3311200",
          CN_CODIGO: "3311-2/00",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE TANQUES, RESERVATORIOS METALICOS E CALDEIRAS, EXCETO PARA VEICULOS",
        },
        {
          id: "3312101",
          CN_CODIGO: "3312-1/01",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE EQUIPAMENTOS TRANSMISSORES DE COMUNICACAO",
        },
        {
          id: "3312102",
          CN_CODIGO: "3312-1/02",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE APARELHOS E INSTRUMENTOS DE MEDIDA, TESTE E CONTROLE",
        },
        {
          id: "3312103",
          CN_CODIGO: "3312-1/03",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE APARELHOS ELETROMEDICOS E ELETROTERAPEUTICOS E EQUIPAMENTOS DE IRRADIACAO",
        },
        {
          id: "3313901",
          CN_CODIGO: "3313-9/01",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE GERADORES, TRANSFORMADORES E MOTORES ELETRICOS",
        },
        {
          id: "3250706",
          CN_CODIGO: "3250-7/06",
          CN_DESCRICAO: "SERVICOS DE PROTESE DENTARIA",
        },
        {
          id: "3312104",
          CN_CODIGO: "3312-1/04",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE EQUIPAMENTOS E INSTRUMENTOS OPTICOS",
        },
        {
          id: "3313999",
          CN_CODIGO: "3313-9/99",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS, APARELHOS E MATERIAIS ELETRICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3314702",
          CN_CODIGO: "3314-7/02",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE EQUIPAMENTOS HIDRAULICOS E PNEUMATICOS, EXCETO VALVULAS",
        },
        {
          id: "3314701",
          CN_CODIGO: "3314-7/01",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS MOTRIZES NAO-ELETRICAS",
        },
        {
          id: "3313902",
          CN_CODIGO: "3313-9/02",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE BATERIAS E ACUMULADORES ELETRICOS, EXCETO PARA VEICULOS",
        },
        {
          id: "3314705",
          CN_CODIGO: "3314-7/05",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE EQUIPAMENTOS DE TRANSMISSAO PARA FINS INDUSTRIAIS",
        },
        {
          id: "3314703",
          CN_CODIGO: "3314-7/03",
          CN_DESCRICAO: "MANUTENCAO E REPARACAO DE VALVULAS INDUSTRIAIS",
        },
        {
          id: "3314706",
          CN_CODIGO: "3314-7/06",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS, APARELHOS E EQUIPAMENTOS PARA INSTALACOES TERMICAS",
        },
        {
          id: "3314707",
          CN_CODIGO: "3314-7/07",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E APARELHOS DE REFRIGERACAO E VENTILACAO PARA USO INDUSTRIAL E COMERCIAL",
        },
        {
          id: "3314709",
          CN_CODIGO: "3314-7/09",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS DE ESCREVER, CALCULAR E DE OUTROS EQUIPAMENTOS NAO-ELETRONICOS PARA ESCRITORIO",
        },
        {
          id: "3314708",
          CN_CODIGO: "3314-7/08",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS, EQUIPAMENTOS E APARELHOS PARA TRANSPORTE E ELEVACAO DE CARGAS",
        },
        {
          id: "3314710",
          CN_CODIGO: "3314-7/10",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E EQUIPAMENTOS PARA USO GERAL NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3314711",
          CN_CODIGO: "3314-7/11",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E EQUIPAMENTOS PARA AGRICULTURA E PECUARIA",
        },
        {
          id: "3314704",
          CN_CODIGO: "3314-7/04",
          CN_DESCRICAO: "MANUTENCAO E REPARACAO DE COMPRESSORES",
        },
        {
          id: "3314712",
          CN_CODIGO: "3314-7/12",
          CN_DESCRICAO: "MANUTENCAO E REPARACAO DE TRATORES AGRICOLAS",
        },
        {
          id: "3314713",
          CN_CODIGO: "3314-7/13",
          CN_DESCRICAO: "MANUTENCAO E REPARACAO DE MAQUINAS-FERRAMENTA",
        },
        {
          id: "3314715",
          CN_CODIGO: "3314-7/15",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E EQUIPAMENTOS PARA USO NA EXTRACAO MINERAL, EXCETO NA EXTRACAO DE PETROLEO",
        },
        {
          id: "3314717",
          CN_CODIGO: "3314-7/17",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E EQUIPAMENTOS DE TERRAPLENAGEM, PAVIMENTACAO E CONSTRUCAO, EXCETO TRATORES",
        },
        {
          id: "3314714",
          CN_CODIGO: "3314-7/14",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E EQUIPAMENTOS PARA A PROSPECCAO E EXTRACAO DE PETROLEO",
        },
        {
          id: "3314718",
          CN_CODIGO: "3314-7/18",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS PARA A INDUSTRIA METALURGICA, EXCETO MAQUINAS-FERRAMENTA",
        },
        {
          id: "3314720",
          CN_CODIGO: "3314-7/20",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E EQUIPAMENTOS PARA A INDUSTRIA TEXTIL, DO VESTUARIO, DO COURO E CALCADOS",
        },
        {
          id: "3314719",
          CN_CODIGO: "3314-7/19",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E EQUIPAMENTOS PARA AS INDUSTRIAS DE ALIMENTOS, BEBIDAS E FUMO",
        },
        {
          id: "3314721",
          CN_CODIGO: "3314-7/21",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E APARELHOS PARA A INDUSTRIA DE CELULOSE, PAPEL E PAPELAO E ARTEFATOS",
        },
        {
          id: "3314799",
          CN_CODIGO: "3314-7/99",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE OUTRAS MAQUINAS E EQUIPAMENTOS PARA USOS INDUSTRIAIS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3314722",
          CN_CODIGO: "3314-7/22",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE MAQUINAS E APARELHOS PARA A INDUSTRIA DO PLASTICO",
        },
        {
          id: "3315500",
          CN_CODIGO: "3315-5/00",
          CN_DESCRICAO: "MANUTENCAO E REPARACAO DE VEICULOS FERROVIARIOS",
        },
        {
          id: "3316301",
          CN_CODIGO: "3316-3/01",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE AERONAVES, EXCETO A MANUTENCAO NA PISTA",
        },
        {
          id: "3319800",
          CN_CODIGO: "3319-8/00",
          CN_DESCRICAO:
            "MANUTENCAO E REPARACAO DE EQUIPAMENTOS E PRODUTOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3314716",
          CN_CODIGO: "3314-7/16",
          CN_DESCRICAO: "MANUTENCAO E REPARACAO DE TRATORES, EXCETO AGRICOLAS",
        },
        {
          id: "3321000",
          CN_CODIGO: "3321-0/00",
          CN_DESCRICAO: "INSTALACAO DE MAQUINAS E EQUIPAMENTOS INDUSTRIAIS",
        },
        {
          id: "3329501",
          CN_CODIGO: "3329-5/01",
          CN_DESCRICAO: "SERVICOS DE MONTAGEM DE MOVEIS DE QUALQUER MATERIAL",
        },
        {
          id: "3329599",
          CN_CODIGO: "3329-5/99",
          CN_DESCRICAO:
            "INSTALACAO DE OUTROS EQUIPAMENTOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3316302",
          CN_CODIGO: "3316-3/02",
          CN_DESCRICAO: "MANUTENCAO DE AERONAVES NA PISTA *",
        },
        {
          id: "3513100",
          CN_CODIGO: "3513-1/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE ENERGIA ELETRICA",
        },
        {
          id: "3514000",
          CN_CODIGO: "3514-0/00",
          CN_DESCRICAO: "DISTRIBUICAO DE ENERGIA ELETRICA",
        },
        {
          id: "3511500",
          CN_CODIGO: "3511-5/00",
          CN_DESCRICAO: "GERACAO DE ENERGIA ELETRICA",
        },
        {
          id: "3512300",
          CN_CODIGO: "3512-3/00",
          CN_DESCRICAO: "TRANSMISSAO DE ENERGIA ELETRICA",
        },
        {
          id: "3520402",
          CN_CODIGO: "3520-4/02",
          CN_DESCRICAO:
            "DISTRIBUICAO DE COMBUSTIVEIS GASOSOS POR REDES URBANAS",
        },
        {
          id: "3530100",
          CN_CODIGO: "3530-1/00",
          CN_DESCRICAO:
            "PRODUCAO E DISTRIBUICAO DE VAPOR, AGUA QUENTE E AR CONDICIONADO",
        },
        {
          id: "3520401",
          CN_CODIGO: "3520-4/01",
          CN_DESCRICAO: "PRODUCAO DE GAS; PROCESSAMENTO DE GAS NATURAL",
        },
        {
          id: "3600601",
          CN_CODIGO: "3600-6/01",
          CN_DESCRICAO: "CAPTACAO, TRATAMENTO E DISTRIBUICAO DE AGUA",
        },
        {
          id: "3702900",
          CN_CODIGO: "3702-9/00",
          CN_DESCRICAO:
            "ATIVIDADES RELACIONADAS A ESGOTO, EXCETO A GESTAO DE REDES",
        },
        {
          id: "3600602",
          CN_CODIGO: "3600-6/02",
          CN_DESCRICAO: "DISTRIBUICAO DE AGUA POR CAMINHOES",
        },
        {
          id: "3701100",
          CN_CODIGO: "3701-1/00",
          CN_DESCRICAO: "GESTAO DE REDES DE ESGOTO",
        },
        {
          id: "3811400",
          CN_CODIGO: "3811-4/00",
          CN_DESCRICAO: "COLETA DE RESIDUOS NAO-PERIGOSOS",
        },
        {
          id: "3821100",
          CN_CODIGO: "3821-1/00",
          CN_DESCRICAO: "TRATAMENTO E DISPOSICAO DE RESIDUOS NAO-PERIGOSOS",
        },
        {
          id: "3812200",
          CN_CODIGO: "3812-2/00",
          CN_DESCRICAO: "COLETA DE RESIDUOS PERIGOSOS",
        },
        {
          id: "3831901",
          CN_CODIGO: "3831-9/01",
          CN_DESCRICAO: "RECUPERACAO DE SUCATAS DE ALUMINIO",
        },
        {
          id: "3822000",
          CN_CODIGO: "3822-0/00",
          CN_DESCRICAO: "TRATAMENTO E DISPOSICAO DE RESIDUOS PERIGOSOS",
        },
        {
          id: "3831999",
          CN_CODIGO: "3831-9/99",
          CN_DESCRICAO: "RECUPERACAO DE MATERIAIS METALICOS, EXCETO ALUMINIO",
        },
        {
          id: "3839499",
          CN_CODIGO: "3839-4/99",
          CN_DESCRICAO:
            "RECUPERACAO DE MATERIAIS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "3900500",
          CN_CODIGO: "3900-5/00",
          CN_DESCRICAO:
            "DESCONTAMINACAO E OUTROS SERVICOS DE GESTAO DE RESIDUOS",
        },
        {
          id: "3839401",
          CN_CODIGO: "3839-4/01",
          CN_DESCRICAO: "USINAS DE COMPOSTAGEM",
        },
        {
          id: "4110700",
          CN_CODIGO: "4110-7/00",
          CN_DESCRICAO: "INCORPORACAO DE EMPREENDIMENTOS IMOBILIARIOS",
        },
        {
          id: "3832700",
          CN_CODIGO: "3832-7/00",
          CN_DESCRICAO: "RECUPERACAO DE MATERIAIS PLASTICOS",
        },
        {
          id: "4120400",
          CN_CODIGO: "4120-4/00",
          CN_DESCRICAO: "CONSTRUCAO DE EDIFICIOS",
        },
        {
          id: "4211101",
          CN_CODIGO: "4211-1/01",
          CN_DESCRICAO: "CONSTRUCAO DE RODOVIAS E FERROVIAS",
        },
        {
          id: "4211102",
          CN_CODIGO: "4211-1/02",
          CN_DESCRICAO:
            "PINTURA PARA SINALIZACAO EM PISTAS RODOVIARIAS E AEROPORTOS",
        },
        {
          id: "4221901",
          CN_CODIGO: "4221-9/01",
          CN_DESCRICAO:
            "CONSTRUCAO DE BARRAGENS E REPRESAS PARA GERACAO DE ENERGIA ELETRICA",
        },
        {
          id: "4212000",
          CN_CODIGO: "4212-0/00",
          CN_DESCRICAO: "CONSTRUCAO DE OBRAS DE ARTE ESPECIAIS",
        },
        {
          id: "4221902",
          CN_CODIGO: "4221-9/02",
          CN_DESCRICAO:
            "CONSTRUCAO DE ESTACOES E REDES DE DISTRIBUICAO DE ENERGIA ELETRICA",
        },
        {
          id: "4221904",
          CN_CODIGO: "4221-9/04",
          CN_DESCRICAO: "CONSTRUCAO DE ESTACOES E REDES DE TELECOMUNICACOES",
        },
        {
          id: "4221903",
          CN_CODIGO: "4221-9/03",
          CN_DESCRICAO:
            "MANUTENCAO DE REDES DE DISTRIBUICAO DE ENERGIA ELETRICA",
        },
        {
          id: "4222701",
          CN_CODIGO: "4222-7/01",
          CN_DESCRICAO:
            "CONSTRUCAO DE REDES DE ABASTECIMENTO DE AGUA, COLETA DE ESGOTO E CONSTRUCOES CORRELATAS, EXCETO OBRAS DE IRRIGACAO",
        },
        {
          id: "4221905",
          CN_CODIGO: "4221-9/05",
          CN_DESCRICAO: "MANUTENCAO DE ESTACOES E REDES DE TELECOMUNICACOES",
        },
        {
          id: "4223500",
          CN_CODIGO: "4223-5/00",
          CN_DESCRICAO:
            "CONSTRUCAO DE REDES DE TRANSPORTES POR DUTOS, EXCETO PARA AGUA E ESGOTO",
        },
        {
          id: "4213800",
          CN_CODIGO: "4213-8/00",
          CN_DESCRICAO: "OBRAS DE URBANIZACAO - RUAS, PRACAS E CALCADAS",
        },
        {
          id: "4292801",
          CN_CODIGO: "4292-8/01",
          CN_DESCRICAO: "MONTAGEM DE ESTRUTURAS METALICAS",
        },
        {
          id: "4291000",
          CN_CODIGO: "4291-0/00",
          CN_DESCRICAO: "OBRAS PORTUARIAS, MARITIMAS E FLUVIAIS",
        },
        {
          id: "4222702",
          CN_CODIGO: "4222-7/02",
          CN_DESCRICAO: "OBRAS DE IRRIGACAO",
        },
        {
          id: "4299501",
          CN_CODIGO: "4299-5/01",
          CN_DESCRICAO: "CONSTRUCAO DE INSTALACOES ESPORTIVAS E RECREATIVAS",
        },
        {
          id: "4299599",
          CN_CODIGO: "4299-5/99",
          CN_DESCRICAO:
            "OUTRAS OBRAS DE ENGENHARIA CIVIL NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "4311801",
          CN_CODIGO: "4311-8/01",
          CN_DESCRICAO: "DEMOLICAO DE EDIFICIOS E OUTRAS ESTRUTURAS",
        },
        {
          id: "4311802",
          CN_CODIGO: "4311-8/02",
          CN_DESCRICAO: "PREPARACAO DE CANTEIRO E LIMPEZA DE TERRENO",
        },
        {
          id: "4313400",
          CN_CODIGO: "4313-4/00",
          CN_DESCRICAO: "OBRAS DE TERRAPLENAGEM",
        },
        {
          id: "4312600",
          CN_CODIGO: "4312-6/00",
          CN_DESCRICAO: "PERFURACOES E SONDAGENS",
        },
        {
          id: "4292802",
          CN_CODIGO: "4292-8/02",
          CN_DESCRICAO: "OBRAS DE MONTAGEM INDUSTRIAL",
        },
        {
          id: "4319300",
          CN_CODIGO: "4319-3/00",
          CN_DESCRICAO:
            "SERVICOS DE PREPARACAO DO TERRENO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4322302",
          CN_CODIGO: "4322-3/02",
          CN_DESCRICAO:
            "INSTALACAO E MANUTENCAO DE SISTEMAS CENTRAIS DE AR CONDICIONADO, DE VENTILACAO E REFRIGERACAO",
        },
        {
          id: "4321500",
          CN_CODIGO: "4321-5/00",
          CN_DESCRICAO: "INSTALACAO E MANUTENCAO ELETRICA",
        },
        {
          id: "4322301",
          CN_CODIGO: "4322-3/01",
          CN_DESCRICAO: "INSTALACOES HIDRAULICAS, SANITARIAS E DE GAS",
        },
        {
          id: "4329102",
          CN_CODIGO: "4329-1/02",
          CN_DESCRICAO:
            "INSTALACAO DE EQUIPAMENTOS PARA ORIENTACAO … NAVEGACAO MARITIMA, FLUVIAL E LACUSTRE",
        },
        {
          id: "4329103",
          CN_CODIGO: "4329-1/03",
          CN_DESCRICAO:
            "INSTALACAO, MANUTENCAO E REPARACAO DE ELEVADORES, ESCADAS E ESTEIRAS ROLANTES, EXCETO DE FABRICACAO PROPRIA",
        },
        {
          id: "4329101",
          CN_CODIGO: "4329-1/01",
          CN_DESCRICAO: "INSTALACAO DE PAINEIS PUBLICITARIOS",
        },
        {
          id: "4322303",
          CN_CODIGO: "4322-3/03",
          CN_DESCRICAO: "INSTALACOES DE SISTEMA DE PREVENCAO CONTRA INCENDIO",
        },
        {
          id: "4329199",
          CN_CODIGO: "4329-1/99",
          CN_DESCRICAO:
            "OUTRAS OBRAS DE INSTALACOES EM CONSTRUCOES NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "4329104",
          CN_CODIGO: "4329-1/04",
          CN_DESCRICAO:
            "MONTAGEM E INSTALACAO DE SISTEMAS E EQUIPAMENTOS DE ILUMINACAO E SINALIZACAO EM VIAS PUBLICAS, PORTOS E AEROPORTOS",
        },
        {
          id: "4330402",
          CN_CODIGO: "4330-4/02",
          CN_DESCRICAO:
            "INSTALACAO DE PORTAS, JANELAS, TETOS, DIVISORIAS E ARMARIOS EMBUTIDOS DE QUALQUER MATERIAL",
        },
        {
          id: "4330403",
          CN_CODIGO: "4330-4/03",
          CN_DESCRICAO: "OBRAS DE ACABAMENTO EM GESSO E ESTUQUE",
        },
        {
          id: "4330401",
          CN_CODIGO: "4330-4/01",
          CN_DESCRICAO: "IMPERMEABILIZACAO EM OBRAS DE ENGENHARIA CIVIL",
        },
        {
          id: "4330405",
          CN_CODIGO: "4330-4/05",
          CN_DESCRICAO:
            "APLICACAO DE REVESTIMENTOS E DE RESINAS EM INTERIORES E EXTERIORES",
        },
        {
          id: "4330499",
          CN_CODIGO: "4330-4/99",
          CN_DESCRICAO: "OUTRAS OBRAS DE ACABAMENTO DA CONSTRUCAO",
        },
        {
          id: "4330404",
          CN_CODIGO: "4330-4/04",
          CN_DESCRICAO: "SERVICOS DE PINTURA DE EDIFICIOS EM GERAL",
        },
        {
          id: "4329105",
          CN_CODIGO: "4329-1/05",
          CN_DESCRICAO: "TRATAMENTOS TERMICOS, ACUSTICOS OU DE VIBRACAO",
        },
        {
          id: "4399102",
          CN_CODIGO: "4399-1/02",
          CN_DESCRICAO:
            "MONTAGEM E DESMONTAGEM DE ANDAIMES E OUTRAS ESTRUTURAS TEMPORARIAS",
        },
        {
          id: "4391600",
          CN_CODIGO: "4391-6/00",
          CN_DESCRICAO: "OBRAS DE FUNDACOES",
        },
        {
          id: "4399101",
          CN_CODIGO: "4399-1/01",
          CN_DESCRICAO: "ADMINISTRACAO DE OBRAS",
        },
        {
          id: "4399104",
          CN_CODIGO: "4399-1/04",
          CN_DESCRICAO:
            "SERVICOS DE OPERACAO E FORNECIMENTO DE EQUIPAMENTOS PARA TRANSPORTE E ELEVACAO DE CARGAS E PESSOAS PARA USO EM OBRAS",
        },
        {
          id: "4399199",
          CN_CODIGO: "4399-1/99",
          CN_DESCRICAO:
            "SERVICOS ESPECIALIZADOS PARA CONSTRUCAO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4399105",
          CN_CODIGO: "4399-1/05",
          CN_DESCRICAO: "PERFURACAO E CONSTRUCAO DE POCOS DE AGUA",
        },
        {
          id: "4511101",
          CN_CODIGO: "4511-1/01",
          CN_DESCRICAO:
            "COMERCIO A VAREJO DE AUTOMOVEIS, CAMIONETAS E UTILITARIOS NOVOS",
        },
        {
          id: "4511103",
          CN_CODIGO: "4511-1/03",
          CN_DESCRICAO:
            "COMERCIO POR ATACADO DE AUTOMOVEIS, CAMIONETAS E UTILITARIOS NOVOS E USADOS",
        },
        {
          id: "4399103",
          CN_CODIGO: "4399-1/03",
          CN_DESCRICAO: "OBRAS DE ALVENARIA",
        },
        {
          id: "4511104",
          CN_CODIGO: "4511-1/04",
          CN_DESCRICAO: "COMERCIO POR ATACADO DE CAMINHOES NOVOS E USADOS",
        },
        {
          id: "4511106",
          CN_CODIGO: "4511-1/06",
          CN_DESCRICAO:
            "COMERCIO POR ATACADO DE ONIBUS E MICROONIBUS NOVOS E USADOS",
        },
        {
          id: "4511102",
          CN_CODIGO: "4511-1/02",
          CN_DESCRICAO:
            "COMERCIO A VAREJO DE AUTOMOVEIS, CAMIONETAS E UTILITARIOS USADOS",
        },
        {
          id: "4512901",
          CN_CODIGO: "4512-9/01",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE VEICULOS AUTOMOTORES",
        },
        {
          id: "4512902",
          CN_CODIGO: "4512-9/02",
          CN_DESCRICAO: "COMERCIO SOB CONSIGNACAO DE VEICULOS AUTOMOTORES",
        },
        {
          id: "4520001",
          CN_CODIGO: "4520-0/01",
          CN_DESCRICAO:
            "SERVICOS DE MANUTENCAO E REPARACAO MECANICA DE VEICULOS AUTOMOTORES",
        },
        {
          id: "4520002",
          CN_CODIGO: "4520-0/02",
          CN_DESCRICAO:
            "SERVICOS DE LANTERNAGEM OU FUNILARIA E PINTURA DE VEICULOS AUTOMOTORES",
        },
        {
          id: "4520004",
          CN_CODIGO: "4520-0/04",
          CN_DESCRICAO:
            "SERVICOS DE ALINHAMENTO E BALANCEAMENTO DE VEICULOS AUTOMOTORES",
        },
        {
          id: "4520003",
          CN_CODIGO: "4520-0/03",
          CN_DESCRICAO:
            "SERVICOS DE MANUTENCAO E REPARACAO ELETRICA DE VEICULOS AUTOMOTORES",
        },
        {
          id: "4520005",
          CN_CODIGO: "4520-0/05",
          CN_DESCRICAO:
            "SERVICOS DE LAVAGEM, LUBRIFICACAO E POLIMENTO DE VEICULOS AUTOMOTORES",
        },
        {
          id: "4520007",
          CN_CODIGO: "4520-0/07",
          CN_DESCRICAO:
            "SERVICOS DE INSTALACAO, MANUTENCAO E REPARACAO DE ACESSORIOS PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "4530701",
          CN_CODIGO: "4530-7/01",
          CN_DESCRICAO:
            "COMERCIO POR ATACADO DE PECAS E ACESSORIOS NOVOS PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "4520006",
          CN_CODIGO: "4520-0/06",
          CN_DESCRICAO: "SERVICOS DE BORRACHARIA PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "4511105",
          CN_CODIGO: "4511-1/05",
          CN_DESCRICAO:
            "COMERCIO POR ATACADO DE REBOQUES E SEMI-REBOQUES NOVOS E USADOS",
        },
        {
          id: "4530703",
          CN_CODIGO: "4530-7/03",
          CN_DESCRICAO:
            "COMERCIO A VAREJO DE PECAS E ACESSORIOS NOVOS PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "4530704",
          CN_CODIGO: "4530-7/04",
          CN_DESCRICAO:
            "COMERCIO A VAREJO DE PECAS E ACESSORIOS USADOS PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "4530705",
          CN_CODIGO: "4530-7/05",
          CN_DESCRICAO: "COMERCIO A VAREJO DE PNEUMATICOS E CAMARAS-DE-AR",
        },
        {
          id: "4530706",
          CN_CODIGO: "4530-7/06",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE PECAS E ACESSORIOS NOVOS E USADOS PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "4541201",
          CN_CODIGO: "4541-2/01",
          CN_DESCRICAO: "COMERCIO POR ATACADO DE MOTOCICLETAS E MOTONETAS",
        },
        {
          id: "4530702",
          CN_CODIGO: "4530-7/02",
          CN_DESCRICAO: "COMERCIO POR ATACADO DE PNEUMATICOS E CAMARAS-DE-AR",
        },
        {
          id: "4541204",
          CN_CODIGO: "4541-2/04",
          CN_DESCRICAO: "COMERCIO A VAREJO DE MOTOCICLETAS E MOTONETAS USADAS",
        },
        {
          id: "4541202",
          CN_CODIGO: "4541-2/02",
          CN_DESCRICAO:
            "COMERCIO POR ATACADO DE PECAS E ACESSORIOS PARA MOTOCICLETAS E MOTONETAS",
        },
        {
          id: "4542101",
          CN_CODIGO: "4542-1/01",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE MOTOCICLETAS E MOTONETAS, PECAS E ACESSORIOS",
        },
        {
          id: "4542102",
          CN_CODIGO: "4542-1/02",
          CN_DESCRICAO: "COMERCIO SOB CONSIGNACAO DE MOTOCICLETAS E MOTONETAS",
        },
        {
          id: "4541203",
          CN_CODIGO: "4541-2/03",
          CN_DESCRICAO: "COMERCIO A VAREJO DE MOTOCICLETAS E MOTONETAS NOVAS",
        },
        {
          id: "4541205",
          CN_CODIGO: "4541-2/05",
          CN_DESCRICAO:
            "COMERCIO A VAREJO DE PECAS E ACESSORIOS PARA MOTOCICLETAS E MOTONETAS",
        },
        {
          id: "4611700",
          CN_CODIGO: "4611-7/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE MATERIAS-PRIMAS AGRICOLAS E ANIMAIS VIVOS",
        },
        {
          id: "4612500",
          CN_CODIGO: "4612-5/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE COMBUSTIVEIS, MINERAIS, PRODUTOS SIDERURGICOS E QUIMICOS",
        },
        {
          id: "4613300",
          CN_CODIGO: "4613-3/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE MADEIRA, MATERIAL DE CONSTRUCAO E FERRAGENS",
        },
        {
          id: "4614100",
          CN_CODIGO: "4614-1/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE MAQUINAS, EQUIPAMENTOS, EMBARCACOES E AERONAVES",
        },
        {
          id: "4616800",
          CN_CODIGO: "4616-8/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE TEXTEIS, VESTUARIO, CALCADOS E ARTIGOS DE VIAGEM",
        },
        {
          id: "4615000",
          CN_CODIGO: "4615-0/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE ELETRODOMESTICOS, MOVEIS E ARTIGOS DE USO DOMESTICO",
        },
        {
          id: "4543900",
          CN_CODIGO: "4543-9/00",
          CN_DESCRICAO: "MANUTENCAO E REPARACAO DE MOTOCICLETAS E MOTONETAS",
        },
        {
          id: "4617600",
          CN_CODIGO: "4617-6/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE PRODUTOS ALIMENTICIOS, BEBIDAS E FUMO",
        },
        {
          id: "4618402",
          CN_CODIGO: "4618-4/02",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE INSTRUMENTOS E MATERIAIS ODONTO-MEDICO-HOSPITALARES",
        },
        {
          id: "4618499",
          CN_CODIGO: "4618-4/99",
          CN_DESCRICAO:
            "OUTROS REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO ESPECIALIZADO EM PRODUTOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4618401",
          CN_CODIGO: "4618-4/01",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE MEDICAMENTOS, COSMETICOS E PRODUTOS DE PERFUMARIA",
        },
        {
          id: "4618403",
          CN_CODIGO: "4618-4/03",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE JORNAIS, REVISTAS E OUTRAS PUBLICACOES",
        },
        {
          id: "4619200",
          CN_CODIGO: "4619-2/00",
          CN_DESCRICAO:
            "REPRESENTANTES COMERCIAIS E AGENTES DO COMERCIO DE MERCADORIAS EM GERAL NAO ESPECIALIZADO",
        },
        {
          id: "4623101",
          CN_CODIGO: "4623-1/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE ANIMAIS VIVOS",
        },
        {
          id: "4623102",
          CN_CODIGO: "4623-1/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE COUROS, LAS, PELES E OUTROS SUBPRODUTOS NAO-COMESTIVEIS DE ORIGEM ANIMAL",
        },
        {
          id: "4623103",
          CN_CODIGO: "4623-1/03",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE ALGODAO",
        },
        {
          id: "4621400",
          CN_CODIGO: "4621-4/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE CAFE EM GRAO",
        },
        {
          id: "4623104",
          CN_CODIGO: "4623-1/04",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE FUMO EM FOLHA NAO BENEFICIADO",
        },
        {
          id: "4623106",
          CN_CODIGO: "4623-1/06",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE SEMENTES, FLORES, PLANTAS E GRAMAS",
        },
        {
          id: "4623105",
          CN_CODIGO: "4623-1/05",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE CACAU *",
        },
        {
          id: "4622200",
          CN_CODIGO: "4622-2/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE SOJA",
        },
        {
          id: "4623107",
          CN_CODIGO: "4623-1/07",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE SISAL",
        },
        {
          id: "4623108",
          CN_CODIGO: "4623-1/08",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MATERIAS-PRIMAS AGRICOLAS COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
        },
        {
          id: "4623109",
          CN_CODIGO: "4623-1/09",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE ALIMENTOS PARA ANIMAIS",
        },
        {
          id: "4623199",
          CN_CODIGO: "4623-1/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MATERIAS-PRIMAS AGRICOLAS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "4631100",
          CN_CODIGO: "4631-1/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE LEITE E LATICINIOS",
        },
        {
          id: "4632001",
          CN_CODIGO: "4632-0/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE CEREAIS E LEGUMINOSAS BENEFICIADOS",
        },
        {
          id: "4632003",
          CN_CODIGO: "4632-0/03",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE CEREAIS E LEGUMINOSAS BENEFICIADOS, FARINHAS, AMIDOS E FECULAS, COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
        },
        {
          id: "4633802",
          CN_CODIGO: "4633-8/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE AVES VIVAS E OVOS",
        },
        {
          id: "4633801",
          CN_CODIGO: "4633-8/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE FRUTAS, VERDURAS, RAIZES, TUBERCULOS, HORTALICAS E LEGUMES FRESCOS",
        },
        {
          id: "4634601",
          CN_CODIGO: "4634-6/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE CARNES BOVINAS E SUINAS E DERIVADOS",
        },
        {
          id: "4633803",
          CN_CODIGO: "4633-8/03",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE COELHOS E OUTROS PEQUENOS ANIMAIS VIVOS PARA ALIMENTACAO",
        },
        {
          id: "4634602",
          CN_CODIGO: "4634-6/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE AVES ABATIDAS E DERIVADOS",
        },
        {
          id: "4632002",
          CN_CODIGO: "4632-0/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE FARINHAS, AMIDOS E FECULAS",
        },
        {
          id: "4635401",
          CN_CODIGO: "4635-4/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE AGUA MINERAL",
        },
        {
          id: "4634699",
          CN_CODIGO: "4634-6/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE CARNES E DERIVADOS DE OUTROS ANIMAIS",
        },
        {
          id: "4635403",
          CN_CODIGO: "4635-4/03",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE BEBIDAS COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
        },
        {
          id: "4635499",
          CN_CODIGO: "4635-4/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE BEBIDAS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "4634603",
          CN_CODIGO: "4634-6/03",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE PESCADOS E FRUTOS DO MAR",
        },
        {
          id: "4635402",
          CN_CODIGO: "4635-4/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE CERVEJA, CHOPE E REFRIGERANTE",
        },
        {
          id: "4636202",
          CN_CODIGO: "4636-2/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE CIGARROS, CIGARRILHAS E CHARUTOS",
        },
        {
          id: "4637102",
          CN_CODIGO: "4637-1/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE ACUCAR",
        },
        {
          id: "4637101",
          CN_CODIGO: "4637-1/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE CAFE TORRADO, MOIDO E SOLUVEL",
        },
        {
          id: "4637104",
          CN_CODIGO: "4637-1/04",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE PAES, BOLOS, BISCOITOS E SIMILARES",
        },
        {
          id: "4637103",
          CN_CODIGO: "4637-1/03",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE OLEOS E GORDURAS",
        },
        {
          id: "4637105",
          CN_CODIGO: "4637-1/05",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE MASSAS ALIMENTICIAS",
        },
        {
          id: "4637107",
          CN_CODIGO: "4637-1/07",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE CHOCOLATES, CONFEITOS, BALAS, BOMBONS E SEMELHANTES",
        },
        {
          id: "4637199",
          CN_CODIGO: "4637-1/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA ESPECIALIZADO EM OUTROS PRODUTOS ALIMENTICIOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4636201",
          CN_CODIGO: "4636-2/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE FUMO BENEFICIADO",
        },
        {
          id: "4639702",
          CN_CODIGO: "4639-7/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE PRODUTOS ALIMENTICIOS EM GERAL, COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
        },
        {
          id: "4639701",
          CN_CODIGO: "4639-7/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE PRODUTOS ALIMENTICIOS EM GERAL",
        },
        {
          id: "4641901",
          CN_CODIGO: "4641-9/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE TECIDOS",
        },
        {
          id: "4637106",
          CN_CODIGO: "4637-1/06",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE SORVETES",
        },
        {
          id: "4641903",
          CN_CODIGO: "4641-9/03",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE ARTIGOS DE ARMARINHO",
        },
        {
          id: "4642701",
          CN_CODIGO: "4642-7/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE ARTIGOS DO VESTUARIO E ACESSORIOS, EXCETO PROFISSIONAIS E DE SEGURANCA",
        },
        {
          id: "4643501",
          CN_CODIGO: "4643-5/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE CALCADOS",
        },
        {
          id: "4642702",
          CN_CODIGO: "4642-7/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE ROUPAS E ACESSORIOS PARA USO PROFISSIONAL E DE SEGURANCA DO TRABALHO",
        },
        {
          id: "4644301",
          CN_CODIGO: "4644-3/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MEDICAMENTOS E DROGAS DE USO HUMANO",
        },
        {
          id: "4644302",
          CN_CODIGO: "4644-3/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MEDICAMENTOS E DROGAS DE USO VETERINARIO",
        },
        {
          id: "4641902",
          CN_CODIGO: "4641-9/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE ARTIGOS DE CAMA, MESA E BANHO",
        },
        {
          id: "4643502",
          CN_CODIGO: "4643-5/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE BOLSAS, MALAS E ARTIGOS DE VIAGEM",
        },
        {
          id: "4645103",
          CN_CODIGO: "4645-1/03",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE PRODUTOS ODONTOLOGICOS",
        },
        {
          id: "4645101",
          CN_CODIGO: "4645-1/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE INSTRUMENTOS E MATERIAIS PARA USO MEDICO, CIRURGICO, HOSPITALAR E DE LABORATORIOS",
        },
        {
          id: "4646002",
          CN_CODIGO: "4646-0/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE PRODUTOS DE HIGIENE PESSOAL",
        },
        {
          id: "4646001",
          CN_CODIGO: "4646-0/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE COSMETICOS E PRODUTOS DE PERFUMARIA",
        },
        {
          id: "4647801",
          CN_CODIGO: "4647-8/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE ARTIGOS DE ESCRITORIO E DE PAPELARIA",
        },
        {
          id: "4647802",
          CN_CODIGO: "4647-8/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE LIVROS, JORNAIS E OUTRAS PUBLICACOES",
        },
        {
          id: "4645102",
          CN_CODIGO: "4645-1/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE PROTESES E ARTIGOS DE ORTOPEDIA",
        },
        {
          id: "4649401",
          CN_CODIGO: "4649-4/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE EQUIPAMENTOS ELETRICOS DE USO PESSOAL E DOMESTICO",
        },
        {
          id: "4649403",
          CN_CODIGO: "4649-4/03",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE BICICLETAS, TRICICLOS E OUTROS VEICULOS RECREATIVOS",
        },
        {
          id: "4649404",
          CN_CODIGO: "4649-4/04",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE MOVEIS E ARTIGOS DE COLCHOARIA",
        },
        {
          id: "4649402",
          CN_CODIGO: "4649-4/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE APARELHOS ELETRONICOS DE USO PESSOAL E DOMESTICO",
        },
        {
          id: "4649406",
          CN_CODIGO: "4649-4/06",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE LUSTRES, LUMINARIAS E ABAJURES",
        },
        {
          id: "4649405",
          CN_CODIGO: "4649-4/05",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE ARTIGOS DE TAPECARIA; PERSIANAS E CORTINAS",
        },
        {
          id: "4649408",
          CN_CODIGO: "4649-4/08",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE PRODUTOS DE HIGIENE, LIMPEZA E CONSERVACAO DOMICILIAR",
        },
        {
          id: "4649409",
          CN_CODIGO: "4649-4/09",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE PRODUTOS DE HIGIENE, LIMPEZA E CONSERVACAO DOMICILIAR, COM ATIVIDADE DE FRACIONAMENTO E ACONDICIONAMENTO ASSOCIADA",
        },
        {
          id: "4649499",
          CN_CODIGO: "4649-4/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE OUTROS EQUIPAMENTOS E ARTIGOS DE USO PESSOAL E DOMESTICO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4651601",
          CN_CODIGO: "4651-6/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE EQUIPAMENTOS DE INFORMATICA",
        },
        {
          id: "4649410",
          CN_CODIGO: "4649-4/10",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE JOIAS, RELOGIOS E BIJUTERIAS, INCLUSIVE PEDRAS PRECIOSAS E SEMIPRECIOSAS LAPIDADAS",
        },
        {
          id: "4651602",
          CN_CODIGO: "4651-6/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE SUPRIMENTOS PARA INFORMATICA",
        },
        {
          id: "4649407",
          CN_CODIGO: "4649-4/07",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE FILMES, CDS, DVDS, FITAS E DISCOS",
        },
        {
          id: "4661300",
          CN_CODIGO: "4661-3/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MAQUINAS, APARELHOS E EQUIPAMENTOS PARA USO AGROPECUARIO; PARTES E PECAS",
        },
        {
          id: "4662100",
          CN_CODIGO: "4662-1/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MAQUINAS, EQUIPAMENTOS PARA TERRAPLENAGEM, MINERACAO E CONSTRUCAO; PARTES E PECAS",
        },
        {
          id: "4664800",
          CN_CODIGO: "4664-8/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MAQUINAS, APARELHOS E EQUIPAMENTOS PARA USO ODONTO-MEDICO-HOSPITALAR; PARTES E PECAS",
        },
        {
          id: "4663000",
          CN_CODIGO: "4663-0/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MAQUINAS E EQUIPAMENTOS PARA USO INDUSTRIAL; PARTES E PECAS",
        },
        {
          id: "4652400",
          CN_CODIGO: "4652-4/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE COMPONENTES ELETRONICOS E EQUIPAMENTOS DE TELEFONIA E COMUNICACAO",
        },
        {
          id: "4669999",
          CN_CODIGO: "4669-9/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE OUTRAS MAQUINAS E EQUIPAMENTOS NAO ESPECIFICADOS ANTERIORMENTE; PARTES E PECAS",
        },
        {
          id: "4669901",
          CN_CODIGO: "4669-9/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE BOMBAS E COMPRESSORES; PARTES E PECAS",
        },
        {
          id: "4665600",
          CN_CODIGO: "4665-6/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MAQUINAS E EQUIPAMENTOS PARA USO COMERCIAL; PARTES E PECAS",
        },
        {
          id: "4673700",
          CN_CODIGO: "4673-7/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE MATERIAL ELETRICO",
        },
        {
          id: "4671100",
          CN_CODIGO: "4671-1/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE MADEIRA E PRODUTOS DERIVADOS",
        },
        {
          id: "4674500",
          CN_CODIGO: "4674-5/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE CIMENTO",
        },
        {
          id: "4679601",
          CN_CODIGO: "4679-6/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE TINTAS, VERNIZES E SIMILARES",
        },
        {
          id: "4679603",
          CN_CODIGO: "4679-6/03",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE VIDROS, ESPELHOS E VITRAIS",
        },
        {
          id: "4672900",
          CN_CODIGO: "4672-9/00",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE FERRAGENS E FERRAMENTAS",
        },
        {
          id: "4679604",
          CN_CODIGO: "4679-6/04",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA ESPECIALIZADO DE MATERIAIS DE CONSTRUCAO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4679699",
          CN_CODIGO: "4679-6/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MATERIAIS DE CONSTRUCAO EM GERAL",
        },
        {
          id: "4681801",
          CN_CODIGO: "4681-8/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE ALCOOL CARBURANTE, BIODIESEL, GASOLINA E DEMAIS DERIVADOS DE PETROLEO, EXCETO LUBRIFICANTES, NAO REALIZADO POR TRANSPORTADOR RETALHISTA (TRR)",
        },
        {
          id: "4681802",
          CN_CODIGO: "4681-8/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE COMBUSTIVEIS REALIZADO POR TRANSPORTADOR RETALHISTA (TRR)",
        },
        {
          id: "4679602",
          CN_CODIGO: "4679-6/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE MARMORES E GRANITOS",
        },
        {
          id: "4681804",
          CN_CODIGO: "4681-8/04",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE COMBUSTIVEIS DE ORIGEM MINERAL EM BRUTO",
        },
        {
          id: "4681803",
          CN_CODIGO: "4681-8/03",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE COMBUSTIVEIS DE ORIGEM VEGETAL, EXCETO ALCOOL CARBURANTE",
        },
        {
          id: "4683400",
          CN_CODIGO: "4683-4/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE DEFENSIVOS AGRICOLAS, ADUBOS, FERTILIZANTES E CORRETIVOS DO SOLO",
        },
        {
          id: "4682600",
          CN_CODIGO: "4682-6/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE GAS LIQUEFEITO DE PETROLEO (GLP)",
        },
        {
          id: "4681805",
          CN_CODIGO: "4681-8/05",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE LUBRIFICANTES",
        },
        {
          id: "4684201",
          CN_CODIGO: "4684-2/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE RESINAS E ELASTOMEROS",
        },
        {
          id: "4684299",
          CN_CODIGO: "4684-2/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE OUTROS PRODUTOS QUIMICOS E PETROQUIMICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4686901",
          CN_CODIGO: "4686-9/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE PAPEL E PAPELAO EM BRUTO",
        },
        {
          id: "4685100",
          CN_CODIGO: "4685-1/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE PRODUTOS SIDERURGICOS E METALURGICOS, EXCETO PARA CONSTRUCAO",
        },
        {
          id: "4686902",
          CN_CODIGO: "4686-9/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE EMBALAGENS",
        },
        {
          id: "4684202",
          CN_CODIGO: "4684-2/02",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE SOLVENTES",
        },
        {
          id: "4687701",
          CN_CODIGO: "4687-7/01",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE RESIDUOS DE PAPEL E PAPELAO",
        },
        {
          id: "4687703",
          CN_CODIGO: "4687-7/03",
          CN_DESCRICAO: "COMERCIO ATACADISTA DE RESIDUOS E SUCATAS METALICOS",
        },
        {
          id: "4689301",
          CN_CODIGO: "4689-3/01",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE PRODUTOS DA EXTRACAO MINERAL, EXCETO COMBUSTIVEIS",
        },
        {
          id: "4687702",
          CN_CODIGO: "4687-7/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE RESIDUOS E SUCATAS NAO-METALICOS, EXCETO DE PAPEL E PAPELAO",
        },
        {
          id: "4691500",
          CN_CODIGO: "4691-5/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE PRODUTOS ALIMENTICIOS",
        },
        {
          id: "4689302",
          CN_CODIGO: "4689-3/02",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE FIOS E FIBRAS TEXTEIS BENEFICIADOS *",
        },
        {
          id: "4692300",
          CN_CODIGO: "4692-3/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE INSUMOS AGROPECUARIOS",
        },
        {
          id: "4693100",
          CN_CODIGO: "4693-1/00",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA DE MERCADORIAS EM GERAL, SEM PREDOMINANCIA DE ALIMENTOS OU DE INSUMOS AGROPECUARIOS",
        },
        {
          id: "4711302",
          CN_CODIGO: "4711-3/02",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE PRODUTOS ALIMENTICIOS - SUPERMERCADOS",
        },
        {
          id: "4712100",
          CN_CODIGO: "4712-1/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE PRODUTOS ALIMENTICIOS - MINIMERCADOS, MERCEARIAS E ARMAZENS",
        },
        {
          id: "4713001",
          CN_CODIGO: "4713-0/01",
          CN_DESCRICAO: "LOJAS DE DEPARTAMENTOS OU MAGAZINES",
        },
        {
          id: "4689399",
          CN_CODIGO: "4689-3/99",
          CN_DESCRICAO:
            "COMERCIO ATACADISTA ESPECIALIZADO EM OUTROS PRODUTOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4713003",
          CN_CODIGO: "4713-0/03",
          CN_DESCRICAO: "LOJAS DUTY FREE DE AEROPORTOS INTERNACIONAIS",
        },
        {
          id: "4721101",
          CN_CODIGO: "4721-1/01",
          CN_DESCRICAO:
            "PADARIA E CONFEITARIA COM PREDOMINANCIA DE PRODUCAO PROPRIA",
        },
        {
          id: "4711301",
          CN_CODIGO: "4711-3/01",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE MERCADORIAS EM GERAL, COM PREDOMINANCIA DE PRODUTOS ALIMENTICIOS - HIPERMERCADOS",
        },
        {
          id: "4721102",
          CN_CODIGO: "4721-1/02",
          CN_DESCRICAO: "PADARIA E CONFEITARIA COM PREDOMINANCIA DE REVENDA",
        },
        {
          id: "4713002",
          CN_CODIGO: "4713-0/02",
          CN_DESCRICAO:
            "LOJAS DE VARIEDADES, EXCETO LOJAS DE DEPARTAMENTOS OU MAGAZINES",
        },
        {
          id: "4721103",
          CN_CODIGO: "4721-1/03",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE LATICINIOS E FRIOS",
        },
        {
          id: "4721104",
          CN_CODIGO: "4721-1/04",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE DOCES, BALAS, BOMBONS E SEMELHANTES",
        },
        { id: "4722902", CN_CODIGO: "4722-9/02", CN_DESCRICAO: "PEIXARIA" },
        {
          id: "4722901",
          CN_CODIGO: "4722-9/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE CARNES - ACOUGUES",
        },
        {
          id: "4724500",
          CN_CODIGO: "4724-5/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE HORTIFRUTIGRANJEIROS",
        },
        { id: "4729601", CN_CODIGO: "4729-6/01", CN_DESCRICAO: "TABACARIA" },
        {
          id: "4729699",
          CN_CODIGO: "4729-6/99",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE PRODUTOS ALIMENTICIOS EM GERAL OU ESPECIALIZADO EM PRODUTOS ALIMENTICIOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4731800",
          CN_CODIGO: "4731-8/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE COMBUSTIVEIS PARA VEICULOS AUTOMOTORES",
        },
        {
          id: "4732600",
          CN_CODIGO: "4732-6/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE LUBRIFICANTES",
        },
        {
          id: "4741500",
          CN_CODIGO: "4741-5/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE TINTAS E MATERIAIS PARA PINTURA",
        },
        {
          id: "4723700",
          CN_CODIGO: "4723-7/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE BEBIDAS",
        },
        {
          id: "4742300",
          CN_CODIGO: "4742-3/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE MATERIAL ELETRICO",
        },
        {
          id: "4744001",
          CN_CODIGO: "4744-0/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE FERRAGENS E FERRAMENTAS",
        },
        {
          id: "4743100",
          CN_CODIGO: "4743-1/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE VIDROS",
        },
        {
          id: "4744003",
          CN_CODIGO: "4744-0/03",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE MATERIAIS HIDRAULICOS",
        },
        {
          id: "4744005",
          CN_CODIGO: "4744-0/05",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE MATERIAIS DE CONSTRUCAO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4744099",
          CN_CODIGO: "4744-0/99",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE MATERIAIS DE CONSTRUCAO EM GERAL",
        },
        {
          id: "4751200",
          CN_CODIGO: "4751-2/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA ESPECIALIZADO DE EQUIPAMENTOS E SUPRIMENTOS DE INFORMATICA",
        },
        {
          id: "4752100",
          CN_CODIGO: "4752-1/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA ESPECIALIZADO DE EQUIPAMENTOS DE TELEFONIA E COMUNICACAO",
        },
        {
          id: "4753900",
          CN_CODIGO: "4753-9/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA ESPECIALIZADO DE ELETRODOMESTICOS E EQUIPAMENTOS DE AUDIO E VIDEO",
        },
        {
          id: "4744002",
          CN_CODIGO: "4744-0/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE MADEIRA E ARTEFATOS",
        },
        {
          id: "4744004",
          CN_CODIGO: "4744-0/04",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE CAL, AREIA, PEDRA BRITADA, TIJOLOS E TELHAS",
        },
        {
          id: "4754701",
          CN_CODIGO: "4754-7/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE MOVEIS",
        },
        {
          id: "4754703",
          CN_CODIGO: "4754-7/03",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE ILUMINACAO",
        },
        {
          id: "4755502",
          CN_CODIGO: "4755-5/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE ARMARINHO",
        },
        {
          id: "4754702",
          CN_CODIGO: "4754-7/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE COLCHOARIA",
        },
        {
          id: "4755503",
          CN_CODIGO: "4755-5/03",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE CAMA, MESA E BANHO",
        },
        {
          id: "4757100",
          CN_CODIGO: "4757-1/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA ESPECIALIZADO DE PECAS E ACESSORIOS PARA APARELHOS ELETROELETRONICOS PARA USO DOMESTICO, EXCETO INFORMATICA E COMUNICACAO",
        },
        {
          id: "4756300",
          CN_CODIGO: "4756-3/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA ESPECIALIZADO DE INSTRUMENTOS MUSICAIS E ACESSORIOS",
        },
        {
          id: "4759801",
          CN_CODIGO: "4759-8/01",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE ARTIGOS DE TAPECARIA, CORTINAS E PERSIANAS",
        },
        {
          id: "4761001",
          CN_CODIGO: "4761-0/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE LIVROS",
        },
        {
          id: "4759899",
          CN_CODIGO: "4759-8/99",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE OUTROS ARTIGOS DE USO DOMESTICO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4761002",
          CN_CODIGO: "4761-0/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE JORNAIS E REVISTAS",
        },
        {
          id: "4761003",
          CN_CODIGO: "4761-0/03",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE PAPELARIA",
        },
        {
          id: "4762800",
          CN_CODIGO: "4762-8/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE DISCOS, CDS, DVDS E FITAS",
        },
        {
          id: "4763601",
          CN_CODIGO: "4763-6/01",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE BRINQUEDOS E ARTIGOS RECREATIVOS",
        },
        {
          id: "4763603",
          CN_CODIGO: "4763-6/03",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE BICICLETAS E TRICICLOS; PECAS E ACESSORIOS",
        },
        {
          id: "4763604",
          CN_CODIGO: "4763-6/04",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE ARTIGOS DE CACA, PESCA E CAMPING",
        },
        {
          id: "4763602",
          CN_CODIGO: "4763-6/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS ESPORTIVOS",
        },
        {
          id: "4763605",
          CN_CODIGO: "4763-6/05",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE EMBARCACOES E OUTROS VEICULOS RECREATIVOS; PECAS E ACESSORIOS",
        },
        {
          id: "4755501",
          CN_CODIGO: "4755-5/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE TECIDOS",
        },
        {
          id: "4771702",
          CN_CODIGO: "4771-7/02",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE PRODUTOS FARMACEUTICOS, COM MANIPULACAO DE FORMULAS",
        },
        {
          id: "4771704",
          CN_CODIGO: "4771-7/04",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE MEDICAMENTOS VETERINARIOS",
        },
        {
          id: "4771701",
          CN_CODIGO: "4771-7/01",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE PRODUTOS FARMACEUTICOS, SEM MANIPULACAO DE FORMULAS",
        },
        {
          id: "4772500",
          CN_CODIGO: "4772-5/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE COSMETICOS, PRODUTOS DE PERFUMARIA E DE HIGIENE PESSOAL",
        },
        {
          id: "4773300",
          CN_CODIGO: "4773-3/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS MEDICOS E ORTOPEDICOS",
        },
        {
          id: "4771703",
          CN_CODIGO: "4771-7/03",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE PRODUTOS FARMACEUTICOS HOMEOPATICOS",
        },
        {
          id: "4774100",
          CN_CODIGO: "4774-1/00",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE OPTICA",
        },
        {
          id: "4781400",
          CN_CODIGO: "4781-4/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE ARTIGOS DO VESTUARIO E ACESSORIOS",
        },
        {
          id: "4782202",
          CN_CODIGO: "4782-2/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE VIAGEM",
        },
        {
          id: "4783101",
          CN_CODIGO: "4783-1/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE JOALHERIA",
        },
        {
          id: "4784900",
          CN_CODIGO: "4784-9/00",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE GAS LIQUEFEITO DE PETROLEO (GLP)",
        },
        {
          id: "4783102",
          CN_CODIGO: "4783-1/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARTIGOS DE RELOJOARIA",
        },
        {
          id: "4782201",
          CN_CODIGO: "4782-2/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE CALCADOS",
        },
        {
          id: "4785701",
          CN_CODIGO: "4785-7/01",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ANTIGUIDADES",
        },
        {
          id: "4785799",
          CN_CODIGO: "4785-7/99",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE OUTROS ARTIGOS USADOS",
        },
        {
          id: "4789002",
          CN_CODIGO: "4789-0/02",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE PLANTAS E FLORES NATURAIS",
        },
        {
          id: "4789003",
          CN_CODIGO: "4789-0/03",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE OBJETOS DE ARTE",
        },
        {
          id: "4789001",
          CN_CODIGO: "4789-0/01",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE SUVENIRES, BIJUTERIAS E ARTESANATOS",
        },
        {
          id: "4789006",
          CN_CODIGO: "4789-0/06",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE FOGOS DE ARTIFICIO E ARTIGOS PIROTECNICOS",
        },
        {
          id: "4789004",
          CN_CODIGO: "4789-0/04",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE ANIMAIS VIVOS E DE ARTIGOS E ALIMENTOS PARA ANIMAIS DE ESTIMACAO",
        },
        {
          id: "4789005",
          CN_CODIGO: "4789-0/05",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE PRODUTOS SANEANTES DOMISSANITARIOS",
        },
        {
          id: "4789007",
          CN_CODIGO: "4789-0/07",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE EQUIPAMENTOS PARA ESCRITORIO",
        },
        {
          id: "4789008",
          CN_CODIGO: "4789-0/08",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE ARTIGOS FOTOGRAFICOS E PARA FILMAGEM",
        },
        {
          id: "4789009",
          CN_CODIGO: "4789-0/09",
          CN_DESCRICAO: "COMERCIO VAREJISTA DE ARMAS E MUNICOES",
        },
        {
          id: "4789099",
          CN_CODIGO: "4789-0/99",
          CN_DESCRICAO:
            "COMERCIO VAREJISTA DE OUTROS PRODUTOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4912402",
          CN_CODIGO: "4912-4/02",
          CN_DESCRICAO:
            "TRANSPORTE FERROVIARIO DE PASSAGEIROS MUNICIPAL E EM REGIAO METROPOLITANA",
        },
        {
          id: "4912403",
          CN_CODIGO: "4912-4/03",
          CN_DESCRICAO: "TRANSPORTE METROVIARIO",
        },
        {
          id: "4912401",
          CN_CODIGO: "4912-4/01",
          CN_DESCRICAO:
            "TRANSPORTE FERROVIARIO DE PASSAGEIROS INTERMUNICIPAL E INTERESTADUAL",
        },
        {
          id: "4921301",
          CN_CODIGO: "4921-3/01",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO COLETIVO DE PASSAGEIROS, COM ITINERARIO FIXO, MUNICIPAL",
        },
        {
          id: "4921302",
          CN_CODIGO: "4921-3/02",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO COLETIVO DE PASSAGEIROS, COM ITINERARIO FIXO, INTERMUNICIPAL EM REGIAO METROPOLITANA",
        },
        {
          id: "4922101",
          CN_CODIGO: "4922-1/01",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO COLETIVO DE PASSAGEIROS, COM ITINERARIO FIXO, INTERMUNICIPAL, EXCETO EM REGIAO METROPOLITANA",
        },
        {
          id: "4922103",
          CN_CODIGO: "4922-1/03",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO COLETIVO DE PASSAGEIROS, COM ITINERARIO FIXO, INTERNACIONAL",
        },
        {
          id: "4911600",
          CN_CODIGO: "4911-6/00",
          CN_DESCRICAO: "TRANSPORTE FERROVIARIO DE CARGA",
        },
        {
          id: "4922102",
          CN_CODIGO: "4922-1/02",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO COLETIVO DE PASSAGEIROS, COM ITINERARIO FIXO, INTERESTADUAL",
        },
        {
          id: "4924800",
          CN_CODIGO: "4924-8/00",
          CN_DESCRICAO: "TRANSPORTE ESCOLAR",
        },
        {
          id: "4923002",
          CN_CODIGO: "4923-0/02",
          CN_DESCRICAO:
            "SERVICO DE TRANSPORTE DE PASSAGEIROS - LOCACAO DE AUTOMOVEIS COM MOTORISTA",
        },
        {
          id: "4929901",
          CN_CODIGO: "4929-9/01",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO COLETIVO DE PASSAGEIROS, SOB REGIME DE FRETAMENTO, MUNICIPAL",
        },
        {
          id: "4929903",
          CN_CODIGO: "4929-9/03",
          CN_DESCRICAO:
            "ORGANIZACAO DE EXCURSOES EM VEICULOS RODOVIARIOS PROPRIOS, MUNICIPAL",
        },
        {
          id: "4929902",
          CN_CODIGO: "4929-9/02",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO COLETIVO DE PASSAGEIROS, SOB REGIME DE FRETAMENTO, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
        },
        {
          id: "4929904",
          CN_CODIGO: "4929-9/04",
          CN_DESCRICAO:
            "ORGANIZACAO DE EXCURSOES EM VEICULOS RODOVIARIOS PROPRIOS, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
        },
        {
          id: "4923001",
          CN_CODIGO: "4923-0/01",
          CN_DESCRICAO: "SERVICO DE TAXI",
        },
        {
          id: "4929999",
          CN_CODIGO: "4929-9/99",
          CN_DESCRICAO:
            "OUTROS TRANSPORTES RODOVIARIOS DE PASSAGEIROS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "4930203",
          CN_CODIGO: "4930-2/03",
          CN_DESCRICAO: "TRANSPORTE RODOVIARIO DE PRODUTOS PERIGOSOS",
        },
        {
          id: "4930201",
          CN_CODIGO: "4930-2/01",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO DE CARGA, EXCETO PRODUTOS PERIGOSOS E MUDANCAS, MUNICIPAL",
        },
        {
          id: "4930202",
          CN_CODIGO: "4930-2/02",
          CN_DESCRICAO:
            "TRANSPORTE RODOVIARIO DE CARGA, EXCETO PRODUTOS PERIGOSOS E MUDANCAS, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL",
        },
        {
          id: "4940000",
          CN_CODIGO: "4940-0/00",
          CN_DESCRICAO: "TRANSPORTE DUTOVIARIO",
        },
        {
          id: "4930204",
          CN_CODIGO: "4930-2/04",
          CN_DESCRICAO: "TRANSPORTE RODOVIARIO DE MUDANCAS",
        },
        {
          id: "4950700",
          CN_CODIGO: "4950-7/00",
          CN_DESCRICAO: "TRENS TURISTICOS, TELEFERICOS E SIMILARES",
        },
        {
          id: "5012201",
          CN_CODIGO: "5012-2/01",
          CN_DESCRICAO: "TRANSPORTE MARITIMO DE LONGO CURSO - CARGA",
        },
        {
          id: "5011401",
          CN_CODIGO: "5011-4/01",
          CN_DESCRICAO: "TRANSPORTE MARITIMO DE CABOTAGEM - CARGA",
        },
        {
          id: "5011402",
          CN_CODIGO: "5011-4/02",
          CN_DESCRICAO: "TRANSPORTE MARITIMO DE CABOTAGEM - PASSAGEIROS",
        },
        {
          id: "5021101",
          CN_CODIGO: "5021-1/01",
          CN_DESCRICAO:
            "TRANSPORTE POR NAVEGACAO INTERIOR DE CARGA, MUNICIPAL, EXCETO TRAVESSIA",
        },
        {
          id: "5012202",
          CN_CODIGO: "5012-2/02",
          CN_DESCRICAO: "TRANSPORTE MARITIMO DE LONGO CURSO - PASSAGEIROS",
        },
        {
          id: "5021102",
          CN_CODIGO: "5021-1/02",
          CN_DESCRICAO:
            "TRANSPORTE POR NAVEGACAO INTERIOR DE CARGA, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL, EXCETO TRAVESSIA",
        },
        {
          id: "5030101",
          CN_CODIGO: "5030-1/01",
          CN_DESCRICAO: "NAVEGACAO DE APOIO MARITIMO",
        },
        {
          id: "5022001",
          CN_CODIGO: "5022-0/01",
          CN_DESCRICAO:
            "TRANSPORTE POR NAVEGACAO INTERIOR DE PASSAGEIROS EM LINHAS REGULARES, MUNICIPAL, EXCETO TRAVESSIA",
        },
        {
          id: "5022002",
          CN_CODIGO: "5022-0/02",
          CN_DESCRICAO:
            "TRANSPORTE POR NAVEGACAO INTERIOR DE PASSAGEIROS EM LINHAS REGULARES, INTERMUNICIPAL, INTERESTADUAL E INTERNACIONAL, EXCETO TRAVESSIA",
        },
        {
          id: "5091202",
          CN_CODIGO: "5091-2/02",
          CN_DESCRICAO: "TRANSPORTE POR NAVEGACAO DE TRAVESSIA, INTERMUNICIPAL",
        },
        {
          id: "5099801",
          CN_CODIGO: "5099-8/01",
          CN_DESCRICAO: "TRANSPORTE AQUAVIARIO PARA PASSEIOS TURISTICOS",
        },
        {
          id: "5091201",
          CN_CODIGO: "5091-2/01",
          CN_DESCRICAO: "TRANSPORTE POR NAVEGACAO DE TRAVESSIA, MUNICIPAL",
        },
        {
          id: "5099899",
          CN_CODIGO: "5099-8/99",
          CN_DESCRICAO:
            "OUTROS TRANSPORTES AQUAVIARIOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "5112901",
          CN_CODIGO: "5112-9/01",
          CN_DESCRICAO:
            "SERVICO DE TAXI AEREO E LOCACAO DE AERONAVES COM TRIPULACAO",
        },
        {
          id: "5030102",
          CN_CODIGO: "5030-1/02",
          CN_DESCRICAO: "NAVEGACAO DE APOIO PORTUARIO",
        },
        {
          id: "5111100",
          CN_CODIGO: "5111-1/00",
          CN_DESCRICAO: "TRANSPORTE AEREO DE PASSAGEIROS REGULAR",
        },
        {
          id: "5130700",
          CN_CODIGO: "5130-7/00",
          CN_DESCRICAO: "TRANSPORTE ESPACIAL",
        },
        {
          id: "5112999",
          CN_CODIGO: "5112-9/99",
          CN_DESCRICAO:
            "OUTROS SERVICOS DE TRANSPORTE AEREO DE PASSAGEIROS NAO-REGULAR",
        },
        {
          id: "5120000",
          CN_CODIGO: "5120-0/00",
          CN_DESCRICAO: "TRANSPORTE AEREO DE CARGA",
        },
        {
          id: "5211701",
          CN_CODIGO: "5211-7/01",
          CN_DESCRICAO: "ARMAZENS GERAIS - EMISSAO DE WARRANT",
        },
        {
          id: "5211799",
          CN_CODIGO: "5211-7/99",
          CN_DESCRICAO:
            "DEPOSITOS DE MERCADORIAS PARA TERCEIROS, EXCETO ARMAZENS GERAIS E GUARDA-MOVEIS",
        },
        {
          id: "5221400",
          CN_CODIGO: "5221-4/00",
          CN_DESCRICAO:
            "CONCESSIONARIAS DE RODOVIAS, PONTES, TUNEIS E SERVICOS RELACIONADOS",
        },
        {
          id: "5212500",
          CN_CODIGO: "5212-5/00",
          CN_DESCRICAO: "CARGA E DESCARGA",
        },
        {
          id: "5222200",
          CN_CODIGO: "5222-2/00",
          CN_DESCRICAO: "TERMINAIS RODOVIARIOS E FERROVIARIOS",
        },
        {
          id: "5229001",
          CN_CODIGO: "5229-0/01",
          CN_DESCRICAO:
            "SERVICOS DE APOIO AO TRANSPORTE POR TAXI, INCLUSIVE CENTRAIS DE CHAMADA",
        },
        {
          id: "5223100",
          CN_CODIGO: "5223-1/00",
          CN_DESCRICAO: "ESTACIONAMENTO DE VEICULOS",
        },
        {
          id: "5229002",
          CN_CODIGO: "5229-0/02",
          CN_DESCRICAO: "SERVICOS DE REBOQUE DE VEICULOS",
        },
        {
          id: "5231101",
          CN_CODIGO: "5231-1/01",
          CN_DESCRICAO: "ADMINISTRACAO DA INFRA-ESTRUTURA PORTUARIA",
        },
        {
          id: "5229099",
          CN_CODIGO: "5229-0/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES AUXILIARES DOS TRANSPORTES TERRESTRES NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "5231102",
          CN_CODIGO: "5231-1/02",
          CN_DESCRICAO: "OPERACOES DE TERMINAIS",
        },
        {
          id: "5232000",
          CN_CODIGO: "5232-0/00",
          CN_DESCRICAO: "ATIVIDADES DE AGENCIAMENTO MARITIMO",
        },
        {
          id: "5239700",
          CN_CODIGO: "5239-7/00",
          CN_DESCRICAO:
            "ATIVIDADES AUXILIARES DOS TRANSPORTES AQUAVIARIOS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "5211702",
          CN_CODIGO: "5211-7/02",
          CN_DESCRICAO: "GUARDA-MOVEIS",
        },
        {
          id: "5240199",
          CN_CODIGO: "5240-1/99",
          CN_DESCRICAO:
            "ATIVIDADES AUXILIARES DOS TRANSPORTES AEREOS, EXCETO OPERACAO DOS AEROPORTOS E CAMPOS DE ATERRISSAGEM",
        },
        {
          id: "5250801",
          CN_CODIGO: "5250-8/01",
          CN_DESCRICAO: "COMISSARIA DE DESPACHOS",
        },
        {
          id: "5250802",
          CN_CODIGO: "5250-8/02",
          CN_DESCRICAO: "ATIVIDADES DE DESPACHANTES ADUANEIROS",
        },
        {
          id: "5240101",
          CN_CODIGO: "5240-1/01",
          CN_DESCRICAO: "OPERACAO DOS AEROPORTOS E CAMPOS DE ATERRISSAGEM",
        },
        {
          id: "5250803",
          CN_CODIGO: "5250-8/03",
          CN_DESCRICAO:
            "AGENCIAMENTO DE CARGAS, EXCETO PARA O TRANSPORTE MARITIMO",
        },
        {
          id: "5310501",
          CN_CODIGO: "5310-5/01",
          CN_DESCRICAO: "ATIVIDADES DO CORREIO NACIONAL",
        },
        {
          id: "5250804",
          CN_CODIGO: "5250-8/04",
          CN_DESCRICAO: "ORGANIZACAO LOGISTICA DO TRANSPORTE DE CARGA",
        },
        {
          id: "5310502",
          CN_CODIGO: "5310-5/02",
          CN_DESCRICAO:
            "ATIVIDADES DE ŸFRANQUEADAS E PERMISSIONARIAS DO CORREIO NACIONAL",
        },
        {
          id: "5320202",
          CN_CODIGO: "5320-2/02",
          CN_DESCRICAO: "SERVICOS DE ENTREGA RAPIDA",
        },
        {
          id: "5320201",
          CN_CODIGO: "5320-2/01",
          CN_DESCRICAO:
            "SERVICOS DE MALOTE NAO REALIZADOS PELO CORREIO NACIONAL",
        },
        { id: "5510802", CN_CODIGO: "5510-8/02", CN_DESCRICAO: "APART-HOTEIS" },
        {
          id: "5250805",
          CN_CODIGO: "5250-8/05",
          CN_DESCRICAO: "OPERADOR DE TRANSPORTE MULTIMODAL - OTM",
        },
        { id: "5510803", CN_CODIGO: "5510-8/03", CN_DESCRICAO: "MOTEIS" },
        {
          id: "5590601",
          CN_CODIGO: "5590-6/01",
          CN_DESCRICAO: "ALBERGUES, EXCETO ASSISTENCIAIS",
        },
        { id: "5590602", CN_CODIGO: "5590-6/02", CN_DESCRICAO: "CAMPINGS" },
        {
          id: "5590699",
          CN_CODIGO: "5590-6/99",
          CN_DESCRICAO: "OUTROS ALOJAMENTOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        { id: "5510801", CN_CODIGO: "5510-8/01", CN_DESCRICAO: "HOTEIS" },
        { id: "5590603", CN_CODIGO: "5590-6/03", CN_DESCRICAO: "PENSOES" },
        {
          id: "5611201",
          CN_CODIGO: "5611-2/01",
          CN_DESCRICAO: "RESTAURANTES E SIMILARES",
        },
        {
          id: "5611203",
          CN_CODIGO: "5611-2/03",
          CN_DESCRICAO: "LANCHONETES, CASAS DE CHA, DE SUCOS E SIMILARES",
        },
        {
          id: "5611202",
          CN_CODIGO: "5611-2/02",
          CN_DESCRICAO:
            "BARES E OUTROS ESTABELECIMENTOS ESPECIALIZADOS EM SERVIR BEBIDAS",
        },
        {
          id: "5620101",
          CN_CODIGO: "5620-1/01",
          CN_DESCRICAO:
            "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA EMPRESAS",
        },
        {
          id: "5620103",
          CN_CODIGO: "5620-1/03",
          CN_DESCRICAO: "CANTINAS - SERVICOS DE ALIMENTACAO PRIVATIVOS",
        },
        {
          id: "5620102",
          CN_CODIGO: "5620-1/02",
          CN_DESCRICAO:
            "SERVICOS DE ALIMENTACAO PARA EVENTOS E RECEPCOES - BUFE",
        },
        {
          id: "5620104",
          CN_CODIGO: "5620-1/04",
          CN_DESCRICAO:
            "FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA CONSUMO DOMICILIAR",
        },
        {
          id: "5612100",
          CN_CODIGO: "5612-1/00",
          CN_DESCRICAO: "SERVICOS AMBULANTES DE ALIMENTACAO",
        },
        {
          id: "5811500",
          CN_CODIGO: "5811-5/00",
          CN_DESCRICAO: "EDICAO DE LIVROS",
        },
        {
          id: "5812300",
          CN_CODIGO: "5812-3/00",
          CN_DESCRICAO: "EDICAO DE JORNAIS",
        },
        {
          id: "5819100",
          CN_CODIGO: "5819-1/00",
          CN_DESCRICAO:
            "EDICAO DE CADASTROS, LISTAS E DE OUTROS PRODUTOS GRAFICOS",
        },
        {
          id: "5822100",
          CN_CODIGO: "5822-1/00",
          CN_DESCRICAO: "EDICAO INTEGRADA … IMPRESSAO DE JORNAIS",
        },
        {
          id: "5823900",
          CN_CODIGO: "5823-9/00",
          CN_DESCRICAO: "EDICAO INTEGRADA … IMPRESSAO DE REVISTAS",
        },
        {
          id: "5821200",
          CN_CODIGO: "5821-2/00",
          CN_DESCRICAO: "EDICAO INTEGRADA … IMPRESSAO DE LIVROS",
        },
        {
          id: "5813100",
          CN_CODIGO: "5813-1/00",
          CN_DESCRICAO: "EDICAO DE REVISTAS",
        },
        {
          id: "5829800",
          CN_CODIGO: "5829-8/00",
          CN_DESCRICAO:
            "EDICAO INTEGRADA … IMPRESSAO DE CADASTROS, LISTAS E DE OUTROS PRODUTOS GRAFICOS",
        },
        {
          id: "5911199",
          CN_CODIGO: "5911-1/99",
          CN_DESCRICAO:
            "ATIVIDADES DE PRODUCAO CINEMATOGRAFICA, DE VIDEOS E DE PROGRAMAS DE TELEVISAO NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "5911101",
          CN_CODIGO: "5911-1/01",
          CN_DESCRICAO: "ESTUDIOS CINEMATOGRAFICOS",
        },
        {
          id: "5911102",
          CN_CODIGO: "5911-1/02",
          CN_DESCRICAO: "PRODUCAO DE FILMES PARA PUBLICIDADE",
        },
        {
          id: "5912099",
          CN_CODIGO: "5912-0/99",
          CN_DESCRICAO:
            "ATIVIDADES DE POS-PRODUCAO CINEMATOGRAFICA, DE VIDEOS E DE PROGRAMAS DE TELEVISAO NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "5912002",
          CN_CODIGO: "5912-0/02",
          CN_DESCRICAO: "SERVICOS DE MIXAGEM SONORA",
        },
        {
          id: "5913800",
          CN_CODIGO: "5913-8/00",
          CN_DESCRICAO:
            "DISTRIBUICAO CINEMATOGRAFICA, DE VIDEO E DE PROGRAMAS DE TELEVISAO",
        },
        {
          id: "5912001",
          CN_CODIGO: "5912-0/01",
          CN_DESCRICAO: "SERVICOS DE DUBLAGEM",
        },
        {
          id: "5920100",
          CN_CODIGO: "5920-1/00",
          CN_DESCRICAO: "ATIVIDADES DE GRAVACAO DE SOM E DE EDICAO DE MUSICA",
        },
        {
          id: "6021700",
          CN_CODIGO: "6021-7/00",
          CN_DESCRICAO: "ATIVIDADES DE TELEVISAO ABERTA",
        },
        {
          id: "5914600",
          CN_CODIGO: "5914-6/00",
          CN_DESCRICAO: "ATIVIDADES DE EXIBICAO CINEMATOGRAFICA",
        },
        {
          id: "6022502",
          CN_CODIGO: "6022-5/02",
          CN_DESCRICAO:
            "ATIVIDADES RELACIONADAS … TELEVISAO POR ASSINATURA, EXCETO PROGRAMADORAS",
        },
        {
          id: "6010100",
          CN_CODIGO: "6010-1/00",
          CN_DESCRICAO: "ATIVIDADES DE RADIO",
        },
        {
          id: "6110801",
          CN_CODIGO: "6110-8/01",
          CN_DESCRICAO: "SERVICOS DE TELEFONIA FIXA COMUTADA - STFC",
        },
        {
          id: "6110802",
          CN_CODIGO: "6110-8/02",
          CN_DESCRICAO:
            "SERVICOS DE REDES DE TRANSPORTES DE TELECOMUNICACOES - SRTT",
        },
        {
          id: "6110899",
          CN_CODIGO: "6110-8/99",
          CN_DESCRICAO:
            "SERVICOS DE TELECOMUNICACOES POR FIO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "6022501",
          CN_CODIGO: "6022-5/01",
          CN_DESCRICAO: "PROGRAMADORAS",
        },
        {
          id: "6110803",
          CN_CODIGO: "6110-8/03",
          CN_DESCRICAO: "SERVICOS DE COMUNICACAO MULTIMIDIA - SMC",
        },
        {
          id: "6120599",
          CN_CODIGO: "6120-5/99",
          CN_DESCRICAO:
            "SERVICOS DE TELECOMUNICACOES SEM FIO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "6130200",
          CN_CODIGO: "6130-2/00",
          CN_DESCRICAO: "TELECOMUNICACOES POR SATELITE",
        },
        {
          id: "6120502",
          CN_CODIGO: "6120-5/02",
          CN_DESCRICAO: "SERVICO MOVEL ESPECIALIZADO - SME",
        },
        {
          id: "6141800",
          CN_CODIGO: "6141-8/00",
          CN_DESCRICAO: "OPERADORAS DE TELEVISAO POR ASSINATURA POR CABO",
        },
        {
          id: "6142600",
          CN_CODIGO: "6142-6/00",
          CN_DESCRICAO: "OPERADORAS DE TELEVISAO POR ASSINATURA POR MICROONDAS",
        },
        {
          id: "6190601",
          CN_CODIGO: "6190-6/01",
          CN_DESCRICAO: "PROVEDORES DE ACESSO …S REDES DE COMUNICACOES",
        },
        {
          id: "6143400",
          CN_CODIGO: "6143-4/00",
          CN_DESCRICAO: "OPERADORAS DE TELEVISAO POR ASSINATURA POR SATELITE",
        },
        {
          id: "6190602",
          CN_CODIGO: "6190-6/02",
          CN_DESCRICAO: "PROVEDORES DE VOZ SOBRE PROTOCOLO INTERNET - VOIP",
        },
        {
          id: "6190699",
          CN_CODIGO: "6190-6/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE TELECOMUNICACOES NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "6202300",
          CN_CODIGO: "6202-3/00",
          CN_DESCRICAO:
            "DESENVOLVIMENTO E LICENCIAMENTO DE PROGRAMAS DE COMPUTADOR CUSTOMIZAVEIS",
        },
        {
          id: "6201500",
          CN_CODIGO: "6201-5/00",
          CN_DESCRICAO:
            "DESENVOLVIMENTO DE PROGRAMAS DE COMPUTADOR SOB ENCOMENDA",
        },
        {
          id: "6203100",
          CN_CODIGO: "6203-1/00",
          CN_DESCRICAO:
            "DESENVOLVIMENTO E LICENCIAMENTO DE PROGRAMAS DE COMPUTADOR NAO-CUSTOMIZAVEIS",
        },
        {
          id: "6204000",
          CN_CODIGO: "6204-0/00",
          CN_DESCRICAO: "CONSULTORIA EM TECNOLOGIA DA INFORMACAO",
        },
        {
          id: "6209100",
          CN_CODIGO: "6209-1/00",
          CN_DESCRICAO:
            "SUPORTE TECNICO, MANUTENCAO E OUTROS SERVICOS EM TECNOLOGIA DA INFORMACAO",
        },
        {
          id: "6311900",
          CN_CODIGO: "6311-9/00",
          CN_DESCRICAO:
            "TRATAMENTO DE DADOS, PROVEDORES DE SERVICOS DE APLICACAO E SERVICOS DE HOSPEDAGEM NA INTERNET",
        },
        {
          id: "6319400",
          CN_CODIGO: "6319-4/00",
          CN_DESCRICAO:
            "PORTAIS, PROVEDORES DE CONTEUDO E OUTROS SERVICOS DE INFORMACAO NA INTERNET",
        },
        {
          id: "6391700",
          CN_CODIGO: "6391-7/00",
          CN_DESCRICAO: "AGENCIAS DE NOTICIAS",
        },
        {
          id: "6120501",
          CN_CODIGO: "6120-5/01",
          CN_DESCRICAO: "TELEFONIA MOVEL CELULAR",
        },
        {
          id: "6410700",
          CN_CODIGO: "6410-7/00",
          CN_DESCRICAO: "BANCO CENTRAL",
        },
        {
          id: "6421200",
          CN_CODIGO: "6421-2/00",
          CN_DESCRICAO: "BANCOS COMERCIAIS",
        },
        {
          id: "6399200",
          CN_CODIGO: "6399-2/00",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE PRESTACAO DE SERVICOS DE INFORMACAO NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "6424701",
          CN_CODIGO: "6424-7/01",
          CN_DESCRICAO: "BANCOS COOPERATIVOS",
        },
        {
          id: "6422100",
          CN_CODIGO: "6422-1/00",
          CN_DESCRICAO: "BANCOS MULTIPLOS, COM CARTEIRA COMERCIAL",
        },
        {
          id: "6424703",
          CN_CODIGO: "6424-7/03",
          CN_DESCRICAO: "COOPERATIVAS DE CREDITO MUTUO",
        },
        {
          id: "6423900",
          CN_CODIGO: "6423-9/00",
          CN_DESCRICAO: "CAIXAS ECONOMICAS",
        },
        {
          id: "6424704",
          CN_CODIGO: "6424-7/04",
          CN_DESCRICAO: "COOPERATIVAS DE CREDITO RURAL",
        },
        {
          id: "6431000",
          CN_CODIGO: "6431-0/00",
          CN_DESCRICAO: "BANCOS MULTIPLOS, SEM CARTEIRA COMERCIAL",
        },
        {
          id: "6433600",
          CN_CODIGO: "6433-6/00",
          CN_DESCRICAO: "BANCOS DE DESENVOLVIMENTO",
        },
        {
          id: "6424702",
          CN_CODIGO: "6424-7/02",
          CN_DESCRICAO: "COOPERATIVAS CENTRAIS DE CREDITO",
        },
        {
          id: "6434400",
          CN_CODIGO: "6434-4/00",
          CN_DESCRICAO: "AGENCIAS DE FOMENTO",
        },
        {
          id: "6435201",
          CN_CODIGO: "6435-2/01",
          CN_DESCRICAO: "SOCIEDADES DE CREDITO IMOBILIARIO",
        },
        {
          id: "6435202",
          CN_CODIGO: "6435-2/02",
          CN_DESCRICAO: "ASSOCIACOES DE POUPANCA E EMPRESTIMO",
        },
        {
          id: "6432800",
          CN_CODIGO: "6432-8/00",
          CN_DESCRICAO: "BANCOS DE INVESTIMENTO",
        },
        {
          id: "6435203",
          CN_CODIGO: "6435-2/03",
          CN_DESCRICAO: "COMPANHIAS HIPOTECARIAS",
        },
        {
          id: "6436100",
          CN_CODIGO: "6436-1/00",
          CN_DESCRICAO:
            "SOCIEDADES DE CREDITO, FINANCIAMENTO E INVESTIMENTO - FINANCEIRAS",
        },
        {
          id: "6450600",
          CN_CODIGO: "6450-6/00",
          CN_DESCRICAO: "SOCIEDADES DE CAPITALIZACAO",
        },
        {
          id: "6437900",
          CN_CODIGO: "6437-9/00",
          CN_DESCRICAO: "SOCIEDADES DE CREDITO AO MICROEMPREENDEDOR",
        },
        {
          id: "6440900",
          CN_CODIGO: "6440-9/00",
          CN_DESCRICAO: "ARRENDAMENTO MERCANTIL",
        },
        {
          id: "6461100",
          CN_CODIGO: "6461-1/00",
          CN_DESCRICAO: "HOLDINGS DE INSTITUICOES FINANCEIRAS",
        },
        {
          id: "6462000",
          CN_CODIGO: "6462-0/00",
          CN_DESCRICAO: "HOLDINGS DE INSTITUICOES NAO-FINANCEIRAS",
        },
        {
          id: "6470101",
          CN_CODIGO: "6470-1/01",
          CN_DESCRICAO:
            "FUNDOS DE INVESTIMENTO, EXCETO PREVIDENCIARIOS E IMOBILIARIOS",
        },
        {
          id: "6470103",
          CN_CODIGO: "6470-1/03",
          CN_DESCRICAO: "FUNDOS DE INVESTIMENTO IMOBILIARIOS",
        },
        {
          id: "6470102",
          CN_CODIGO: "6470-1/02",
          CN_DESCRICAO: "FUNDOS DE INVESTIMENTO PREVIDENCIARIOS",
        },
        {
          id: "6491300",
          CN_CODIGO: "6491-3/00",
          CN_DESCRICAO: "SOCIEDADES DE FOMENTO MERCANTIL - FACTORING",
        },
        {
          id: "6493000",
          CN_CODIGO: "6493-0/00",
          CN_DESCRICAO:
            "ADMINISTRACAO DE CONSORCIOS PARA AQUISICAO DE BENS E DIREITOS",
        },
        {
          id: "6463800",
          CN_CODIGO: "6463-8/00",
          CN_DESCRICAO: "OUTRAS SOCIEDADES DE PARTICIPACAO, EXCETO HOLDINGS",
        },
        {
          id: "6499902",
          CN_CODIGO: "6499-9/02",
          CN_DESCRICAO: "SOCIEDADES DE INVESTIMENTO",
        },
        {
          id: "6499901",
          CN_CODIGO: "6499-9/01",
          CN_DESCRICAO: "CLUBES DE INVESTIMENTO",
        },
        {
          id: "6499903",
          CN_CODIGO: "6499-9/03",
          CN_DESCRICAO: "FUNDO GARANTIDOR DE CREDITO",
        },
        {
          id: "6499904",
          CN_CODIGO: "6499-9/04",
          CN_DESCRICAO: "CAIXAS DE FINANCIAMENTO DE CORPORACOES",
        },
        {
          id: "6499905",
          CN_CODIGO: "6499-9/05",
          CN_DESCRICAO: "CONCESSAO DE CREDITO PELAS OSCIP",
        },
        {
          id: "6499999",
          CN_CODIGO: "6499-9/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE SERVICOS FINANCEIROS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "6511102",
          CN_CODIGO: "6511-1/02",
          CN_DESCRICAO: "PLANOS DE AUXILIO-FUNERAL",
        },
        {
          id: "6492100",
          CN_CODIGO: "6492-1/00",
          CN_DESCRICAO: "SECURITIZACAO DE CREDITOS",
        },
        {
          id: "6512000",
          CN_CODIGO: "6512-0/00",
          CN_DESCRICAO: "SEGUROS NAO-VIDA",
        },
        {
          id: "6520100",
          CN_CODIGO: "6520-1/00",
          CN_DESCRICAO: "SEGUROS-SAUDE",
        },
        {
          id: "6511101",
          CN_CODIGO: "6511-1/01",
          CN_DESCRICAO: "SEGUROS DE VIDA",
        },
        {
          id: "6541300",
          CN_CODIGO: "6541-3/00",
          CN_DESCRICAO: "PREVIDENCIA COMPLEMENTAR FECHADA",
        },
        {
          id: "6550200",
          CN_CODIGO: "6550-2/00",
          CN_DESCRICAO: "PLANOS DE SAUDE",
        },
        { id: "6530800", CN_CODIGO: "6530-8/00", CN_DESCRICAO: "RESSEGUROS" },
        {
          id: "6542100",
          CN_CODIGO: "6542-1/00",
          CN_DESCRICAO: "PREVIDENCIA COMPLEMENTAR ABERTA",
        },
        {
          id: "6611801",
          CN_CODIGO: "6611-8/01",
          CN_DESCRICAO: "BOLSA DE VALORES",
        },
        {
          id: "6611802",
          CN_CODIGO: "6611-8/02",
          CN_DESCRICAO: "BOLSA DE MERCADORIAS",
        },
        {
          id: "6611803",
          CN_CODIGO: "6611-8/03",
          CN_DESCRICAO: "BOLSA DE MERCADORIAS E FUTUROS",
        },
        {
          id: "6612602",
          CN_CODIGO: "6612-6/02",
          CN_DESCRICAO: "DISTRIBUIDORAS DE TITULOS E VALORES MOBILIARIOS",
        },
        {
          id: "6612603",
          CN_CODIGO: "6612-6/03",
          CN_DESCRICAO: "CORRETORAS DE CAMBIO",
        },
        {
          id: "6611804",
          CN_CODIGO: "6611-8/04",
          CN_DESCRICAO: "ADMINISTRACAO DE MERCADOS DE BALCAO ORGANIZADOS",
        },
        {
          id: "6612605",
          CN_CODIGO: "6612-6/05",
          CN_DESCRICAO: "AGENTES DE INVESTIMENTOS EM APLICACOES FINANCEIRAS",
        },
        {
          id: "6612604",
          CN_CODIGO: "6612-6/04",
          CN_DESCRICAO: "CORRETORAS DE CONTRATOS DE MERCADORIAS",
        },
        {
          id: "6612601",
          CN_CODIGO: "6612-6/01",
          CN_DESCRICAO: "CORRETORAS DE TITULOS E VALORES MOBILIARIOS",
        },
        {
          id: "6619301",
          CN_CODIGO: "6619-3/01",
          CN_DESCRICAO: "SERVICOS DE LIQUIDACAO E CUSTODIA",
        },
        {
          id: "6613400",
          CN_CODIGO: "6613-4/00",
          CN_DESCRICAO: "ADMINISTRACAO DE CARTOES DE CREDITO",
        },
        {
          id: "6619302",
          CN_CODIGO: "6619-3/02",
          CN_DESCRICAO: "CORRESPONDENTES DE INSTITUICOES FINANCEIRAS",
        },
        {
          id: "6619304",
          CN_CODIGO: "6619-3/04",
          CN_DESCRICAO: "CAIXAS ELETRONICOS",
        },
        {
          id: "6619305",
          CN_CODIGO: "6619-3/05",
          CN_DESCRICAO: "OPERADORAS DE CARTOES DE DEBITO",
        },
        {
          id: "6619399",
          CN_CODIGO: "6619-3/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES AUXILIARES DOS SERVICOS FINANCEIROS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "6621502",
          CN_CODIGO: "6621-5/02",
          CN_DESCRICAO: "AUDITORIA E CONSULTORIA ATUARIAL",
        },
        {
          id: "6619303",
          CN_CODIGO: "6619-3/03",
          CN_DESCRICAO: "REPRESENTACOES DE BANCOS ESTRANGEIROS",
        },
        {
          id: "6621501",
          CN_CODIGO: "6621-5/01",
          CN_DESCRICAO: "PERITOS E AVALIADORES DE SEGUROS",
        },
        {
          id: "6622300",
          CN_CODIGO: "6622-3/00",
          CN_DESCRICAO:
            "CORRETORES E AGENTES DE SEGUROS, DE PLANOS DE PREVIDENCIA COMPLEMENTAR E DE SAUDE",
        },
        {
          id: "6810201",
          CN_CODIGO: "6810-2/01",
          CN_DESCRICAO: "COMPRA E VENDA DE IMOVEIS PROPRIOS",
        },
        {
          id: "6629100",
          CN_CODIGO: "6629-1/00",
          CN_DESCRICAO:
            "ATIVIDADES AUXILIARES DOS SEGUROS, DA PREVIDENCIA COMPLEMENTAR E DOS PLANOS DE SAUDE NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "6630400",
          CN_CODIGO: "6630-4/00",
          CN_DESCRICAO:
            "ATIVIDADES DE ADMINISTRACAO DE FUNDOS POR CONTRATO OU COMISSAO",
        },
        {
          id: "6821802",
          CN_CODIGO: "6821-8/02",
          CN_DESCRICAO: "CORRETAGEM NO ALUGUEL DE IMOVEIS",
        },
        {
          id: "6810202",
          CN_CODIGO: "6810-2/02",
          CN_DESCRICAO: "ALUGUEL DE IMOVEIS PROPRIOS",
        },
        {
          id: "6822600",
          CN_CODIGO: "6822-6/00",
          CN_DESCRICAO: "GESTAO E ADMINISTRACAO DA PROPRIEDADE IMOBILIARIA*",
        },
        {
          id: "6821801",
          CN_CODIGO: "6821-8/01",
          CN_DESCRICAO: "CORRETAGEM NA COMPRA E VENDA E AVALIACAO DE IMOVEIS",
        },
        {
          id: "6911703",
          CN_CODIGO: "6911-7/03",
          CN_DESCRICAO: "AGENTE DE PROPRIEDADE INDUSTRIAL",
        },
        {
          id: "6911702",
          CN_CODIGO: "6911-7/02",
          CN_DESCRICAO: "ATIVIDADES AUXILIARES DA JUSTICA",
        },
        {
          id: "6920601",
          CN_CODIGO: "6920-6/01",
          CN_DESCRICAO: "ATIVIDADES DE CONTABILIDADE",
        },
        { id: "6912500", CN_CODIGO: "6912-5/00", CN_DESCRICAO: "CARTORIOS" },
        {
          id: "6920602",
          CN_CODIGO: "6920-6/02",
          CN_DESCRICAO:
            "ATIVIDADES DE CONSULTORIA E AUDITORIA CONTABIL E TRIBUTARIA",
        },
        {
          id: "7020400",
          CN_CODIGO: "7020-4/00",
          CN_DESCRICAO:
            "ATIVIDADES DE CONSULTORIA EM GESTAO EMPRESARIAL, EXCETO CONSULTORIA TECNICA ESPECIFICA",
        },
        {
          id: "7112000",
          CN_CODIGO: "7112-0/00",
          CN_DESCRICAO: "SERVICOS DE ENGENHARIA",
        },
        {
          id: "6911701",
          CN_CODIGO: "6911-7/01",
          CN_DESCRICAO: "SERVICOS ADVOCATICIOS",
        },
        {
          id: "7119701",
          CN_CODIGO: "7119-7/01",
          CN_DESCRICAO: "SERVICOS DE CARTOGRAFIA, TOPOGRAFIA E GEODESIA",
        },
        {
          id: "7119703",
          CN_CODIGO: "7119-7/03",
          CN_DESCRICAO:
            "SERVICOS DE DESENHO TECNICO RELACIONADOS … ARQUITETURA E ENGENHARIA",
        },
        {
          id: "7111100",
          CN_CODIGO: "7111-1/00",
          CN_DESCRICAO: "SERVICOS DE ARQUITETURA",
        },
        {
          id: "7119702",
          CN_CODIGO: "7119-7/02",
          CN_DESCRICAO: "ATIVIDADES DE ESTUDOS GEOLOGICOS",
        },
        {
          id: "7120100",
          CN_CODIGO: "7120-1/00",
          CN_DESCRICAO: "TESTES E ANALISES TECNICAS",
        },
        {
          id: "7119799",
          CN_CODIGO: "7119-7/99",
          CN_DESCRICAO:
            "ATIVIDADES TECNICAS RELACIONADAS … ENGENHARIA E ARQUITETURA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "7210000",
          CN_CODIGO: "7210-0/00",
          CN_DESCRICAO:
            "PESQUISA E DESENVOLVIMENTO EXPERIMENTAL EM CIENCIAS FISICAS E NATURAIS",
        },
        {
          id: "7311400",
          CN_CODIGO: "7311-4/00",
          CN_DESCRICAO: "AGENCIAS DE PUBLICIDADE",
        },
        {
          id: "7220700",
          CN_CODIGO: "7220-7/00",
          CN_DESCRICAO:
            "PESQUISA E DESENVOLVIMENTO EXPERIMENTAL EM CIENCIAS SOCIAIS E HUMANAS",
        },
        {
          id: "7312200",
          CN_CODIGO: "7312-2/00",
          CN_DESCRICAO:
            "AGENCIAMENTO DE ESPACOS PARA PUBLICIDADE, EXCETO EM VEICULOS DE COMUNICACAO",
        },
        {
          id: "7319002",
          CN_CODIGO: "7319-0/02",
          CN_DESCRICAO: "PROMOCAO DE VENDAS",
        },
        {
          id: "7319001",
          CN_CODIGO: "7319-0/01",
          CN_DESCRICAO:
            "CRIACAO E MONTAGEM DE ESTANDES PARA FEIRAS E EXPOSICOES",
        },
        {
          id: "7119704",
          CN_CODIGO: "7119-7/04",
          CN_DESCRICAO:
            "SERVICOS DE PERICIA TECNICA RELACIONADOS … SEGURANCA DO TRABALHO",
        },
        {
          id: "7319099",
          CN_CODIGO: "7319-0/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE PUBLICIDADE NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "7319004",
          CN_CODIGO: "7319-0/04",
          CN_DESCRICAO: "CONSULTORIA EM PUBLICIDADE",
        },
        {
          id: "7320300",
          CN_CODIGO: "7320-3/00",
          CN_DESCRICAO: "PESQUISAS DE MERCADO E DE OPINIAO PUBLICA",
        },
        {
          id: "7410202",
          CN_CODIGO: "7410-2/02",
          CN_DESCRICAO: "DECORACAO DE INTERIORES",
        },
        { id: "7410201", CN_CODIGO: "7410-2/01", CN_DESCRICAO: "DESIGN" },
        {
          id: "7319003",
          CN_CODIGO: "7319-0/03",
          CN_DESCRICAO: "MARKETING DIRETO",
        },
        {
          id: "7420001",
          CN_CODIGO: "7420-0/01",
          CN_DESCRICAO:
            "ATIVIDADES DE PRODUCAO DE FOTOGRAFIAS, EXCETO AEREA E SUBMARINA",
        },
        {
          id: "7420004",
          CN_CODIGO: "7420-0/04",
          CN_DESCRICAO: "FILMAGEM DE FESTAS E EVENTOS",
        },
        {
          id: "7420002",
          CN_CODIGO: "7420-0/02",
          CN_DESCRICAO:
            "ATIVIDADES DE PRODUCAO DE FOTOGRAFIAS AEREAS E SUBMARINAS",
        },
        {
          id: "7420003",
          CN_CODIGO: "7420-0/03",
          CN_DESCRICAO: "LABORATORIOS FOTOGRAFICOS",
        },
        {
          id: "7420005",
          CN_CODIGO: "7420-0/05",
          CN_DESCRICAO: "SERVICOS DE MICROFILMAGEM",
        },
        {
          id: "7490101",
          CN_CODIGO: "7490-1/01",
          CN_DESCRICAO: "SERVICOS DE TRADUCAO, INTERPRETACAO E SIMILARES",
        },
        {
          id: "7490103",
          CN_CODIGO: "7490-1/03",
          CN_DESCRICAO:
            "SERVICOS DE AGRONOMIA E DE CONSULTORIA …S ATIVIDADES AGRICOLAS E PECUARIAS",
        },
        {
          id: "7490105",
          CN_CODIGO: "7490-1/05",
          CN_DESCRICAO:
            "AGENCIAMENTO DE PROFISSIONAIS PARA ATIVIDADES ESPORTIVAS, CULTURAIS E ARTISTICAS",
        },
        {
          id: "7490104",
          CN_CODIGO: "7490-1/04",
          CN_DESCRICAO:
            "ATIVIDADES DE INTERMEDIACAO E AGENCIAMENTO DE SERVICOS E NEGOCIOS EM GERAL, EXCETO IMOBILIARIOS",
        },
        {
          id: "7490102",
          CN_CODIGO: "7490-1/02",
          CN_DESCRICAO: "ESCAFANDRIA E MERGULHO",
        },
        {
          id: "7490199",
          CN_CODIGO: "7490-1/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES PROFISSIONAIS, CIENTIFICAS E TECNICAS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "7711000",
          CN_CODIGO: "7711-0/00",
          CN_DESCRICAO: "LOCACAO DE AUTOMOVEIS SEM CONDUTOR",
        },
        {
          id: "7500100",
          CN_CODIGO: "7500-1/00",
          CN_DESCRICAO: "ATIVIDADES VETERINARIAS",
        },
        {
          id: "7719502",
          CN_CODIGO: "7719-5/02",
          CN_DESCRICAO: "LOCACAO DE AERONAVES SEM TRIPULACAO",
        },
        {
          id: "7721700",
          CN_CODIGO: "7721-7/00",
          CN_DESCRICAO: "ALUGUEL DE EQUIPAMENTOS RECREATIVOS E ESPORTIVOS",
        },
        {
          id: "7719599",
          CN_CODIGO: "7719-5/99",
          CN_DESCRICAO:
            "LOCACAO DE OUTROS MEIOS DE TRANSPORTE NAO ESPECIFICADOS ANTERIORMENTE, SEM CONDUTOR",
        },
        {
          id: "7719501",
          CN_CODIGO: "7719-5/01",
          CN_DESCRICAO:
            "LOCACAO DE EMBARCACOES SEM TRIPULACAO, EXCETO PARA FINS RECREATIVOS",
        },
        {
          id: "7723300",
          CN_CODIGO: "7723-3/00",
          CN_DESCRICAO: "ALUGUEL DE OBJETOS DO VESTUARIO, JOIAS E ACESSORIOS",
        },
        {
          id: "7729202",
          CN_CODIGO: "7729-2/02",
          CN_DESCRICAO:
            "ALUGUEL DE MOVEIS, UTENSILIOS E APARELHOS DE USO DOMESTICO E PESSOAL; INSTRUMENTOS MUSICAIS",
        },
        {
          id: "7729201",
          CN_CODIGO: "7729-2/01",
          CN_DESCRICAO: "ALUGUEL DE APARELHOS DE JOGOS ELETRONICOS",
        },
        {
          id: "7722500",
          CN_CODIGO: "7722-5/00",
          CN_DESCRICAO: "ALUGUEL DE FITAS DE VIDEO, DVDS E SIMILARES",
        },
        {
          id: "7729299",
          CN_CODIGO: "7729-2/99",
          CN_DESCRICAO:
            "ALUGUEL DE OUTROS OBJETOS PESSOAIS E DOMESTICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "7732201",
          CN_CODIGO: "7732-2/01",
          CN_DESCRICAO:
            "ALUGUEL DE MAQUINAS E EQUIPAMENTOS PARA CONSTRUCAO SEM OPERADOR, EXCETO ANDAIMES",
        },
        {
          id: "7729203",
          CN_CODIGO: "7729-2/03",
          CN_DESCRICAO: "ALUGUEL DE MATERIAL MEDICO*",
        },
        {
          id: "7731400",
          CN_CODIGO: "7731-4/00",
          CN_DESCRICAO:
            "ALUGUEL DE MAQUINAS E EQUIPAMENTOS AGRICOLAS SEM OPERADOR",
        },
        {
          id: "7739001",
          CN_CODIGO: "7739-0/01",
          CN_DESCRICAO:
            "ALUGUEL DE MAQUINAS E EQUIPAMENTOS PARA EXTRACAO DE MINERIOS E PETROLEO, SEM OPERADOR",
        },
        {
          id: "7733100",
          CN_CODIGO: "7733-1/00",
          CN_DESCRICAO: "ALUGUEL DE MAQUINAS E EQUIPAMENTOS PARA ESCRITORIOS",
        },
        {
          id: "7739002",
          CN_CODIGO: "7739-0/02",
          CN_DESCRICAO:
            "ALUGUEL DE EQUIPAMENTOS CIENTIFICOS, MEDICOS E HOSPITALARES, SEM OPERADOR",
        },
        {
          id: "7739003",
          CN_CODIGO: "7739-0/03",
          CN_DESCRICAO:
            "ALUGUEL DE PALCOS, COBERTURAS E OUTRAS ESTRUTURAS DE USO TEMPORARIO, EXCETO ANDAIMES",
        },
        {
          id: "7740300",
          CN_CODIGO: "7740-3/00",
          CN_DESCRICAO: "GESTAO DE ATIVOS INTANGIVEIS NAO-FINANCEIROS",
        },
        {
          id: "7739099",
          CN_CODIGO: "7739-0/99",
          CN_DESCRICAO:
            "ALUGUEL DE OUTRAS MAQUINAS E EQUIPAMENTOS COMERCIAIS E INDUSTRIAIS NAO ESPECIFICADOS ANTERIORMENTE, SEM OPERADOR",
        },
        {
          id: "7820500",
          CN_CODIGO: "7820-5/00",
          CN_DESCRICAO: "LOCACAO DE MAO-DE-OBRA TEMPORARIA",
        },
        {
          id: "7810800",
          CN_CODIGO: "7810-8/00",
          CN_DESCRICAO: "SELECAO E AGENCIAMENTO DE MAO-DE-OBRA",
        },
        {
          id: "7830200",
          CN_CODIGO: "7830-2/00",
          CN_DESCRICAO:
            "FORNECIMENTO E GESTAO DE RECURSOS HUMANOS PARA TERCEIROS",
        },
        {
          id: "7911200",
          CN_CODIGO: "7911-2/00",
          CN_DESCRICAO: "AGENCIAS DE VIAGENS",
        },
        {
          id: "7912100",
          CN_CODIGO: "7912-1/00",
          CN_DESCRICAO: "OPERADORES TURISTICOS",
        },
        {
          id: "8011101",
          CN_CODIGO: "8011-1/01",
          CN_DESCRICAO: "ATIVIDADES DE VIGILANCIA E SEGURANCA PRIVADA",
        },
        {
          id: "7732202",
          CN_CODIGO: "7732-2/02",
          CN_DESCRICAO: "ALUGUEL DE ANDAIMES",
        },
        {
          id: "7990200",
          CN_CODIGO: "7990-2/00",
          CN_DESCRICAO:
            "SERVICOS DE RESERVAS E OUTROS SERVICOS DE TURISMO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "8020000",
          CN_CODIGO: "8020-0/00",
          CN_DESCRICAO: "ATIVIDADES DE MONITORAMENTO DE SISTEMAS DE SEGURANCA",
        },
        {
          id: "8011102",
          CN_CODIGO: "8011-1/02",
          CN_DESCRICAO: "SERVICOS DE ADESTRAMENTO DE CAES DE GUARDA",
        },
        {
          id: "8111700",
          CN_CODIGO: "8111-7/00",
          CN_DESCRICAO:
            "SERVICOS COMBINADOS PARA APOIO A EDIFICIOS, EXCETO CONDOMINIOS PREDIAIS",
        },
        {
          id: "8030700",
          CN_CODIGO: "8030-7/00",
          CN_DESCRICAO: "ATIVIDADES DE INVESTIGACAO PARTICULAR",
        },
        {
          id: "8112500",
          CN_CODIGO: "8112-5/00",
          CN_DESCRICAO: "CONDOMINIOS PREDIAIS",
        },
        {
          id: "8121400",
          CN_CODIGO: "8121-4/00",
          CN_DESCRICAO: "LIMPEZA EM PREDIOS E EM DOMICILIOS",
        },
        {
          id: "8012900",
          CN_CODIGO: "8012-9/00",
          CN_DESCRICAO: "ATIVIDADES DE TRANSPORTE DE VALORES",
        },
        {
          id: "8130300",
          CN_CODIGO: "8130-3/00",
          CN_DESCRICAO: "ATIVIDADES PAISAGISTICAS",
        },
        {
          id: "8122200",
          CN_CODIGO: "8122-2/00",
          CN_DESCRICAO: "IMUNIZACAO E CONTROLE DE PRAGAS URBANAS",
        },
        {
          id: "8129000",
          CN_CODIGO: "8129-0/00",
          CN_DESCRICAO: "ATIVIDADES DE LIMPEZA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8211300",
          CN_CODIGO: "8211-3/00",
          CN_DESCRICAO:
            "SERVICOS COMBINADOS DE ESCRITORIO E APOIO ADMINISTRATIVO",
        },
        {
          id: "8219999",
          CN_CODIGO: "8219-9/99",
          CN_DESCRICAO:
            "PREPARACAO DE DOCUMENTOS E SERVICOS ESPECIALIZADOS DE APOIO ADMINISTRATIVO NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "8220200",
          CN_CODIGO: "8220-2/00",
          CN_DESCRICAO: "ATIVIDADES DE TELEATENDIMENTO",
        },
        {
          id: "8230001",
          CN_CODIGO: "8230-0/01",
          CN_DESCRICAO:
            "SERVICOS DE ORGANIZACAO DE FEIRAS, CONGRESSOS, EXPOSICOES E FESTAS",
        },
        {
          id: "8291100",
          CN_CODIGO: "8291-1/00",
          CN_DESCRICAO: "ATIVIDADES DE COBRANCAS E INFORMACOES CADASTRAIS",
        },
        { id: "8219901", CN_CODIGO: "8219-9/01", CN_DESCRICAO: "FOTOCOPIAS" },
        {
          id: "8230002",
          CN_CODIGO: "8230-0/02",
          CN_DESCRICAO: "CASAS DE FESTAS E EVENTOS",
        },
        {
          id: "8292000",
          CN_CODIGO: "8292-0/00",
          CN_DESCRICAO: "ENVASAMENTO E EMPACOTAMENTO SOB CONTRATO",
        },
        {
          id: "8299701",
          CN_CODIGO: "8299-7/01",
          CN_DESCRICAO: "MEDICAO DE CONSUMO DE ENERGIA ELETRICA, GAS E AGUA",
        },
        {
          id: "8299702",
          CN_CODIGO: "8299-7/02",
          CN_DESCRICAO:
            "EMISSAO DE VALES-ALIMENTACAO, VALES-TRANSPORTE E SIMILARES",
        },
        {
          id: "8299704",
          CN_CODIGO: "8299-7/04",
          CN_DESCRICAO: "LEILOEIROS INDEPENDENTES",
        },
        {
          id: "8299703",
          CN_CODIGO: "8299-7/03",
          CN_DESCRICAO: "SERVICOS DE GRAVACAO DE CARIMBOS, EXCETO CONFECCAO",
        },
        {
          id: "8299705",
          CN_CODIGO: "8299-7/05",
          CN_DESCRICAO: "SERVICOS DE LEVANTAMENTO DE FUNDOS SOB CONTRATO",
        },
        {
          id: "8299706",
          CN_CODIGO: "8299-7/06",
          CN_DESCRICAO: "CASAS LOTERICAS",
        },
        {
          id: "8299799",
          CN_CODIGO: "8299-7/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE SERVICOS PRESTADOS PRINCIPALMENTE …S EMPRESAS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8411600",
          CN_CODIGO: "8411-6/00",
          CN_DESCRICAO: "ADMINISTRACAO PUBLICA EM GERAL",
        },
        {
          id: "8412400",
          CN_CODIGO: "8412-4/00",
          CN_DESCRICAO:
            "REGULACAO DAS ATIVIDADES DE SAUDE, EDUCACAO, SERVICOS CULTURAIS E OUTROS SERVICOS SOCIAIS",
        },
        {
          id: "8414100",
          CN_CODIGO: "8414-1/00",
          CN_DESCRICAO: "ATIVIDADES DE SUPORTE … ADMINISTRACAO PUBLICA",
        },
        {
          id: "8421300",
          CN_CODIGO: "8421-3/00",
          CN_DESCRICAO: "RELACOES EXTERIORES",
        },
        {
          id: "8299707",
          CN_CODIGO: "8299-7/07",
          CN_DESCRICAO: "SALAS DE ACESSO … INTERNET",
        },
        {
          id: "8413200",
          CN_CODIGO: "8413-2/00",
          CN_DESCRICAO: "REGULACAO DAS ATIVIDADES ECONOMICAS",
        },
        { id: "8422100", CN_CODIGO: "8422-1/00", CN_DESCRICAO: "DEFESA" },
        {
          id: "8424800",
          CN_CODIGO: "8424-8/00",
          CN_DESCRICAO: "SEGURANCA E ORDEM PUBLICA",
        },
        { id: "8423000", CN_CODIGO: "8423-0/00", CN_DESCRICAO: "JUSTICA" },
        { id: "8425600", CN_CODIGO: "8425-6/00", CN_DESCRICAO: "DEFESA CIVIL" },
        {
          id: "8511200",
          CN_CODIGO: "8511-2/00",
          CN_DESCRICAO: "EDUCACAO INFANTIL - CRECHE",
        },
        {
          id: "8512100",
          CN_CODIGO: "8512-1/00",
          CN_DESCRICAO: "EDUCACAO INFANTIL - PRE-ESCOLA",
        },
        { id: "8520100", CN_CODIGO: "8520-1/00", CN_DESCRICAO: "ENSINO MEDIO" },
        {
          id: "8430200",
          CN_CODIGO: "8430-2/00",
          CN_DESCRICAO: "SEGURIDADE SOCIAL OBRIGATORIA",
        },
        {
          id: "8532500",
          CN_CODIGO: "8532-5/00",
          CN_DESCRICAO: "EDUCACAO SUPERIOR - GRADUACAO E POS-GRADUACAO",
        },
        {
          id: "8531700",
          CN_CODIGO: "8531-7/00",
          CN_DESCRICAO: "EDUCACAO SUPERIOR - GRADUACAO",
        },
        {
          id: "8513900",
          CN_CODIGO: "8513-9/00",
          CN_DESCRICAO: "ENSINO FUNDAMENTAL",
        },
        {
          id: "8542200",
          CN_CODIGO: "8542-2/00",
          CN_DESCRICAO: "EDUCACAO PROFISSIONAL DE NIVEL TECNOLOGICO",
        },
        {
          id: "8533300",
          CN_CODIGO: "8533-3/00",
          CN_DESCRICAO: "EDUCACAO SUPERIOR - POS-GRADUACAO E EXTENSAO",
        },
        {
          id: "8550301",
          CN_CODIGO: "8550-3/01",
          CN_DESCRICAO: "ADMINISTRACAO DE CAIXAS ESCOLARES",
        },
        {
          id: "8541400",
          CN_CODIGO: "8541-4/00",
          CN_DESCRICAO: "EDUCACAO PROFISSIONAL DE NIVEL TECNICO",
        },
        {
          id: "8550302",
          CN_CODIGO: "8550-3/02",
          CN_DESCRICAO: "SERVICOS AUXILIARES … EDUCACAO",
        },
        {
          id: "8592901",
          CN_CODIGO: "8592-9/01",
          CN_DESCRICAO: "ENSINO DE DANCA",
        },
        {
          id: "8591100",
          CN_CODIGO: "8591-1/00",
          CN_DESCRICAO: "ENSINO DE ESPORTES",
        },
        {
          id: "8592902",
          CN_CODIGO: "8592-9/02",
          CN_DESCRICAO: "ENSINO DE ARTES CENICAS, EXCETO DANCA",
        },
        {
          id: "8592999",
          CN_CODIGO: "8592-9/99",
          CN_DESCRICAO:
            "ENSINO DE ARTE E CULTURA NAO ESPECIFICADO ANTERIORMENTE",
        },
        {
          id: "8592903",
          CN_CODIGO: "8592-9/03",
          CN_DESCRICAO: "ENSINO DE MUSICA",
        },
        {
          id: "8599601",
          CN_CODIGO: "8599-6/01",
          CN_DESCRICAO: "FORMACAO DE CONDUTORES",
        },
        {
          id: "8599603",
          CN_CODIGO: "8599-6/03",
          CN_DESCRICAO: "TREINAMENTO EM INFORMATICA",
        },
        {
          id: "8593700",
          CN_CODIGO: "8593-7/00",
          CN_DESCRICAO: "ENSINO DE IDIOMAS",
        },
        {
          id: "8599602",
          CN_CODIGO: "8599-6/02",
          CN_DESCRICAO: "CURSOS DE PILOTAGEM",
        },
        {
          id: "8599605",
          CN_CODIGO: "8599-6/05",
          CN_DESCRICAO: "CURSOS PREPARATORIOS PARA CONCURSOS",
        },
        {
          id: "8599699",
          CN_CODIGO: "8599-6/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE ENSINO NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8610101",
          CN_CODIGO: "8610-1/01",
          CN_DESCRICAO:
            "ATIVIDADES DE ATENDIMENTO HOSPITALAR, EXCETO PRONTO-SOCORRO E UNIDADES PARA ATENDIMENTO A URGENCIAS",
        },
        {
          id: "8599604",
          CN_CODIGO: "8599-6/04",
          CN_DESCRICAO:
            "TREINAMENTO EM DESENVOLVIMENTO PROFISSIONAL E GERENCIAL",
        },
        {
          id: "8610102",
          CN_CODIGO: "8610-1/02",
          CN_DESCRICAO:
            "ATIVIDADES DE ATENDIMENTO EM PRONTO-SOCORRO E UNIDADES HOSPITALARES PARA ATENDIMENTO A URGENCIAS",
        },
        { id: "8621601", CN_CODIGO: "8621-6/01", CN_DESCRICAO: "UTI MOVEL" },
        {
          id: "8621602",
          CN_CODIGO: "8621-6/02",
          CN_DESCRICAO:
            "SERVICOS MOVEIS DE ATENDIMENTO A URGENCIAS, EXCETO POR UTI MOVEL",
        },
        {
          id: "8630501",
          CN_CODIGO: "8630-5/01",
          CN_DESCRICAO:
            "ATIVIDADE MEDICA AMBULATORIAL COM RECURSOS PARA REALIZACAO DE PROCEDIMENTOS CIRURGICOS",
        },
        {
          id: "8622400",
          CN_CODIGO: "8622-4/00",
          CN_DESCRICAO:
            "SERVICOS DE REMOCAO DE PACIENTES, EXCETO OS SERVICOS MOVEIS DE ATENDIMENTO A URGENCIAS",
        },
        {
          id: "8630503",
          CN_CODIGO: "8630-5/03",
          CN_DESCRICAO: "ATIVIDADE MEDICA AMBULATORIAL RESTRITA A CONSULTAS",
        },
        {
          id: "8630504",
          CN_CODIGO: "8630-5/04",
          CN_DESCRICAO:
            "ATIVIDADE ODONTOLOGICA COM RECURSOS PARA REALIZACAO DE PROCEDIMENTOS CIRURGICOS",
        },
        {
          id: "8630502",
          CN_CODIGO: "8630-5/02",
          CN_DESCRICAO:
            "ATIVIDADE MEDICA AMBULATORIAL COM RECURSOS PARA REALIZACAO DE EXAMES COMPLEMENTARES",
        },
        {
          id: "8630506",
          CN_CODIGO: "8630-5/06",
          CN_DESCRICAO: "SERVICOS DE VACINACAO E IMUNIZACAO HUMANA",
        },
        {
          id: "8630505",
          CN_CODIGO: "8630-5/05",
          CN_DESCRICAO:
            "ATIVIDADE ODONTOLOGICA SEM RECURSOS PARA REALIZACAO DE PROCEDIMENTOS CIRURGICOS",
        },
        {
          id: "8640201",
          CN_CODIGO: "8640-2/01",
          CN_DESCRICAO: "LABORATORIOS DE ANATOMIA PATOLOGICA E CITOLOGICA",
        },
        {
          id: "8630599",
          CN_CODIGO: "8630-5/99",
          CN_DESCRICAO:
            "ATIVIDADES DE ATENCAO AMBULATORIAL NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8640202",
          CN_CODIGO: "8640-2/02",
          CN_DESCRICAO: "LABORATORIOS CLINICOS",
        },
        {
          id: "8640203",
          CN_CODIGO: "8640-2/03",
          CN_DESCRICAO: "SERVICOS DE DIALISE E NEFROLOGIA",
        },
        {
          id: "8630507",
          CN_CODIGO: "8630-5/07",
          CN_DESCRICAO: "ATIVIDADES DE REPRODUCAO HUMANA ASSISTIDA",
        },
        {
          id: "8640205",
          CN_CODIGO: "8640-2/05",
          CN_DESCRICAO:
            "SERVICOS DE DIAGNOSTICO POR IMAGEM COM USO DE RADIACAO IONIZANTE, EXCETO TOMOGRAFIA",
        },
        {
          id: "8640207",
          CN_CODIGO: "8640-2/07",
          CN_DESCRICAO:
            "SERVICOS DE DIAGNOSTICO POR IMAGEM SEM USO DE RADIACAO IONIZANTE, EXCETO RESSONANCIA MAGNETICA",
        },
        {
          id: "8640204",
          CN_CODIGO: "8640-2/04",
          CN_DESCRICAO: "SERVICOS DE TOMOGRAFIA",
        },
        {
          id: "8640206",
          CN_CODIGO: "8640-2/06",
          CN_DESCRICAO: "SERVICOS DE RESSONANCIA MAGNETICA",
        },
        {
          id: "8640208",
          CN_CODIGO: "8640-2/08",
          CN_DESCRICAO:
            "SERVICOS DE DIAGNOSTICO POR REGISTRO GRAFICO - ECG, EEG E OUTROS EXAMES ANALOGOS",
        },
        {
          id: "8640209",
          CN_CODIGO: "8640-2/09",
          CN_DESCRICAO:
            "SERVICOS DE DIAGNOSTICO POR METODOS OPTICOS - ENDOSCOPIA E OUTROS EXAMES ANALOGOS",
        },
        {
          id: "8640211",
          CN_CODIGO: "8640-2/11",
          CN_DESCRICAO: "SERVICOS DE RADIOTERAPIA",
        },
        {
          id: "8640210",
          CN_CODIGO: "8640-2/10",
          CN_DESCRICAO: "SERVICOS DE QUIMIOTERAPIA",
        },
        {
          id: "8640214",
          CN_CODIGO: "8640-2/14",
          CN_DESCRICAO: "SERVICOS DE BANCOS DE CELULAS E TECIDOS HUMANOS",
        },
        {
          id: "8640299",
          CN_CODIGO: "8640-2/99",
          CN_DESCRICAO:
            "ATIVIDADES DE SERVICOS DE COMPLEMENTACAO DIAGNOSTICA E TERAPEUTICA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8640212",
          CN_CODIGO: "8640-2/12",
          CN_DESCRICAO: "SERVICOS DE HEMOTERAPIA",
        },
        {
          id: "8650001",
          CN_CODIGO: "8650-0/01",
          CN_DESCRICAO: "ATIVIDADES DE ENFERMAGEM",
        },
        {
          id: "8650002",
          CN_CODIGO: "8650-0/02",
          CN_DESCRICAO: "ATIVIDADES DE PROFISSIONAIS DA NUTRICAO",
        },
        {
          id: "8650003",
          CN_CODIGO: "8650-0/03",
          CN_DESCRICAO: "ATIVIDADES DE PSICOLOGIA E PSICANALISE",
        },
        {
          id: "8650004",
          CN_CODIGO: "8650-0/04",
          CN_DESCRICAO: "ATIVIDADES DE FISIOTERAPIA",
        },
        {
          id: "8650005",
          CN_CODIGO: "8650-0/05",
          CN_DESCRICAO: "ATIVIDADES DE TERAPIA OCUPACIONAL",
        },
        {
          id: "8650007",
          CN_CODIGO: "8650-0/07",
          CN_DESCRICAO:
            "ATIVIDADES DE TERAPIA DE NUTRICAO ENTERAL E PARENTERAL",
        },
        {
          id: "8640213",
          CN_CODIGO: "8640-2/13",
          CN_DESCRICAO: "SERVICOS DE LITOTRIPSIA",
        },
        {
          id: "8650099",
          CN_CODIGO: "8650-0/99",
          CN_DESCRICAO:
            "ATIVIDADES DE PROFISSIONAIS DA AREA DE SAUDE NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8650006",
          CN_CODIGO: "8650-0/06",
          CN_DESCRICAO: "ATIVIDADES DE FONOAUDIOLOGIA",
        },
        {
          id: "8660700",
          CN_CODIGO: "8660-7/00",
          CN_DESCRICAO: "ATIVIDADES DE APOIO … GESTAO DE SAUDE",
        },
        {
          id: "8690901",
          CN_CODIGO: "8690-9/01",
          CN_DESCRICAO:
            "ATIVIDADES DE PRATICAS INTEGRATIVAS E COMPLEMENTARES EM SAUDE HUMANA",
        },
        {
          id: "8690999",
          CN_CODIGO: "8690-9/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE ATENCAO … SAUDE HUMANA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8711502",
          CN_CODIGO: "8711-5/02",
          CN_DESCRICAO: "INSTITUICOES DE LONGA PERMANENCIA PARA IDOSOS",
        },
        {
          id: "8711503",
          CN_CODIGO: "8711-5/03",
          CN_DESCRICAO:
            "ATIVIDADES DE ASSISTENCIA A DEFICIENTES FISICOS, IMUNODEPRIMIDOS E CONVALESCENTES",
        },
        {
          id: "8711501",
          CN_CODIGO: "8711-5/01",
          CN_DESCRICAO: "CLINICAS E RESIDENCIAS GERIATRICAS",
        },
        {
          id: "8690902",
          CN_CODIGO: "8690-9/02",
          CN_DESCRICAO: "ATIVIDADES DE BANCO DE LEITE HUMANO",
        },
        {
          id: "8711505",
          CN_CODIGO: "8711-5/05",
          CN_DESCRICAO: "CONDOMINIOS RESIDENCIAIS PARA IDOSOS",
        },
        {
          id: "8712300",
          CN_CODIGO: "8712-3/00",
          CN_DESCRICAO:
            "ATIVIDADES DE FORNECIMENTO DE INFRA-ESTRUTURA DE APOIO E ASSISTENCIA A PACIENTE NO DOMICILIO",
        },
        {
          id: "8720499",
          CN_CODIGO: "8720-4/99",
          CN_DESCRICAO:
            "ATIVIDADES DE ASSISTENCIA PSICOSSOCIAL E … SAUDE A PORTADORES DE DISTURBIOS PSIQUICOS, DEFICIENCIA MENTAL E DEPENDENCIA QUIMICA NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8711504",
          CN_CODIGO: "8711-5/04",
          CN_DESCRICAO: "CENTROS DE APOIO A PACIENTES COM CANCER E COM AIDS",
        },
        {
          id: "8720401",
          CN_CODIGO: "8720-4/01",
          CN_DESCRICAO: "ATIVIDADES DE CENTROS DE ASSISTENCIA PSICOSSOCIAL",
        },
        { id: "8730101", CN_CODIGO: "8730-1/01", CN_DESCRICAO: "ORFANATOS" },
        {
          id: "8730102",
          CN_CODIGO: "8730-1/02",
          CN_DESCRICAO: "ALBERGUES ASSISTENCIAIS",
        },
        {
          id: "8730199",
          CN_CODIGO: "8730-1/99",
          CN_DESCRICAO:
            "ATIVIDADES DE ASSISTENCIA SOCIAL PRESTADAS EM RESIDENCIAS COLETIVAS E PARTICULARES NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "8800600",
          CN_CODIGO: "8800-6/00",
          CN_DESCRICAO: "SERVICOS DE ASSISTENCIA SOCIAL SEM ALOJAMENTO",
        },
        {
          id: "9001902",
          CN_CODIGO: "9001-9/02",
          CN_DESCRICAO: "PRODUCAO MUSICAL",
        },
        {
          id: "9001903",
          CN_CODIGO: "9001-9/03",
          CN_DESCRICAO: "PRODUCAO DE ESPETACULOS DE DANCA",
        },
        {
          id: "9001904",
          CN_CODIGO: "9001-9/04",
          CN_DESCRICAO:
            "PRODUCAO DE ESPETACULOS CIRCENSES, DE MARIONETES E SIMILARES",
        },
        {
          id: "9001905",
          CN_CODIGO: "9001-9/05",
          CN_DESCRICAO:
            "PRODUCAO DE ESPETACULOS DE RODEIOS, VAQUEJADAS E SIMILARES",
        },
        {
          id: "9001901",
          CN_CODIGO: "9001-9/01",
          CN_DESCRICAO: "PRODUCAO TEATRAL",
        },
        {
          id: "9001906",
          CN_CODIGO: "9001-9/06",
          CN_DESCRICAO: "ATIVIDADES DE SONORIZACAO E DE ILUMINACAO",
        },
        {
          id: "9002702",
          CN_CODIGO: "9002-7/02",
          CN_DESCRICAO: "RESTAURACAO DE OBRAS-DE-ARTE",
        },
        {
          id: "9002701",
          CN_CODIGO: "9002-7/01",
          CN_DESCRICAO:
            "ATIVIDADES DE ARTISTAS PLASTICOS, JORNALISTAS INDEPENDENTES E ESCRITORES",
        },
        {
          id: "9003500",
          CN_CODIGO: "9003-5/00",
          CN_DESCRICAO:
            "GESTAO DE ESPACOS PARA ARTES CENICAS, ESPETACULOS E OUTRAS ATIVIDADES ARTISTICAS",
        },
        {
          id: "9001999",
          CN_CODIGO: "9001-9/99",
          CN_DESCRICAO:
            "ARTES CENICAS, ESPETACULOS E ATIVIDADES COMPLEMENTARES NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "9102301",
          CN_CODIGO: "9102-3/01",
          CN_DESCRICAO:
            "ATIVIDADES DE MUSEUS E DE EXPLORACAO DE LUGARES E PREDIOS HISTORICOS E ATRACOES SIMILARES",
        },
        {
          id: "9101500",
          CN_CODIGO: "9101-5/00",
          CN_DESCRICAO: "ATIVIDADES DE BIBLIOTECAS E ARQUIVOS",
        },
        {
          id: "9102302",
          CN_CODIGO: "9102-3/02",
          CN_DESCRICAO:
            "RESTAURACAO E CONSERVACAO DE LUGARES E PREDIOS HISTORICOS",
        },
        {
          id: "9103100",
          CN_CODIGO: "9103-1/00",
          CN_DESCRICAO:
            "ATIVIDADES DE JARDINS BOTANICOS, ZOOLOGICOS, PARQUES NACIONAIS, RESERVAS ECOLOGICAS E AREAS DE PROTECAO AMBIENTAL",
        },
        {
          id: "9200301",
          CN_CODIGO: "9200-3/01",
          CN_DESCRICAO: "CASAS DE BINGO",
        },
        {
          id: "9200399",
          CN_CODIGO: "9200-3/99",
          CN_DESCRICAO:
            "EXPLORACAO DE JOGOS DE AZAR E APOSTAS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "9312300",
          CN_CODIGO: "9312-3/00",
          CN_DESCRICAO: "CLUBES SOCIAIS, ESPORTIVOS E SIMILARES",
        },
        {
          id: "9200302",
          CN_CODIGO: "9200-3/02",
          CN_DESCRICAO: "EXPLORACAO DE APOSTAS EM CORRIDAS DE CAVALOS",
        },
        {
          id: "9319101",
          CN_CODIGO: "9319-1/01",
          CN_DESCRICAO: "PRODUCAO E PROMOCAO DE EVENTOS ESPORTIVOS",
        },
        {
          id: "9313100",
          CN_CODIGO: "9313-1/00",
          CN_DESCRICAO: "ATIVIDADES DE CONDICIONAMENTO FISICO",
        },
        {
          id: "9311500",
          CN_CODIGO: "9311-5/00",
          CN_DESCRICAO: "GESTAO DE INSTALACOES DE ESPORTES",
        },
        {
          id: "9319199",
          CN_CODIGO: "9319-1/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES ESPORTIVAS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "9321200",
          CN_CODIGO: "9321-2/00",
          CN_DESCRICAO: "PARQUES DE DIVERSAO E PARQUES TEMATICOS",
        },
        {
          id: "9329801",
          CN_CODIGO: "9329-8/01",
          CN_DESCRICAO: "DISCOTECAS, DANCETERIAS, SALOES DE DANCA E SIMILARES",
        },
        {
          id: "9329802",
          CN_CODIGO: "9329-8/02",
          CN_DESCRICAO: "EXPLORACAO DE BOLICHES",
        },
        {
          id: "9329803",
          CN_CODIGO: "9329-8/03",
          CN_DESCRICAO: "EXPLORACAO DE JOGOS DE SINUCA, BILHAR E SIMILARES",
        },
        {
          id: "9329899",
          CN_CODIGO: "9329-8/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE RECREACAO E LAZER NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "9329804",
          CN_CODIGO: "9329-8/04",
          CN_DESCRICAO: "EXPLORACAO DE JOGOS ELETRONICOS RECREATIVOS",
        },
        {
          id: "9412000",
          CN_CODIGO: "9412-0/00",
          CN_DESCRICAO: "ATIVIDADES DE ORGANIZACOES ASSOCIATIVAS PROFISSIONAIS",
        },
        {
          id: "9430800",
          CN_CODIGO: "9430-8/00",
          CN_DESCRICAO:
            "ATIVIDADES DE ASSOCIACOES DE DEFESA DE DIREITOS SOCIAIS",
        },
        {
          id: "9411100",
          CN_CODIGO: "9411-1/00",
          CN_DESCRICAO:
            "ATIVIDADES DE ORGANIZACOES ASSOCIATIVAS PATRONAIS E EMPRESARIAIS",
        },
        {
          id: "9420100",
          CN_CODIGO: "9420-1/00",
          CN_DESCRICAO: "ATIVIDADES DE ORGANIZACOES SINDICAIS",
        },
        {
          id: "9493600",
          CN_CODIGO: "9493-6/00",
          CN_DESCRICAO:
            "ATIVIDADES DE ORGANIZACOES ASSOCIATIVAS LIGADAS … CULTURA E … ARTE",
        },
        {
          id: "9491000",
          CN_CODIGO: "9491-0/00",
          CN_DESCRICAO: "ATIVIDADES DE ORGANIZACOES RELIGIOSAS",
        },
        {
          id: "9499500",
          CN_CODIGO: "9499-5/00",
          CN_DESCRICAO:
            "ATIVIDADES ASSOCIATIVAS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "9511800",
          CN_CODIGO: "9511-8/00",
          CN_DESCRICAO:
            "REPARACAO E MANUTENCAO DE COMPUTADORES E DE EQUIPAMENTOS PERIFERICOS",
        },
        {
          id: "9492800",
          CN_CODIGO: "9492-8/00",
          CN_DESCRICAO: "ATIVIDADES DE ORGANIZACOES POLITICAS",
        },
        {
          id: "9512600",
          CN_CODIGO: "9512-6/00",
          CN_DESCRICAO: "REPARACAO E MANUTENCAO DE EQUIPAMENTOS DE COMUNICACAO",
        },
        { id: "9529102", CN_CODIGO: "9529-1/02", CN_DESCRICAO: "CHAVEIROS" },
        {
          id: "9521500",
          CN_CODIGO: "9521-5/00",
          CN_DESCRICAO:
            "REPARACAO E MANUTENCAO DE EQUIPAMENTOS ELETROELETRONICOS DE USO PESSOAL E DOMESTICO",
        },
        {
          id: "9529104",
          CN_CODIGO: "9529-1/04",
          CN_DESCRICAO:
            "REPARACAO DE BICICLETAS, TRICICLOS E OUTROS VEICULOS NAO-MOTORIZADOS",
        },
        {
          id: "9529103",
          CN_CODIGO: "9529-1/03",
          CN_DESCRICAO: "REPARACAO DE RELOGIOS",
        },
        {
          id: "9529101",
          CN_CODIGO: "9529-1/01",
          CN_DESCRICAO: "REPARACAO DE CALCADOS, DE BOLSAS E ARTIGOS DE VIAGEM*",
        },
        {
          id: "9529105",
          CN_CODIGO: "9529-1/05",
          CN_DESCRICAO: "REPARACAO DE ARTIGOS DO MOBILIARIO",
        },
        {
          id: "9529199",
          CN_CODIGO: "9529-1/99",
          CN_DESCRICAO:
            "REPARACAO E MANUTENCAO DE OUTROS OBJETOS E EQUIPAMENTOS PESSOAIS E DOMESTICOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "9529106",
          CN_CODIGO: "9529-1/06",
          CN_DESCRICAO: "REPARACAO DE JOIAS",
        },
        { id: "9601703", CN_CODIGO: "9601-7/03", CN_DESCRICAO: "TOALHEIROS" },
        { id: "9601701", CN_CODIGO: "9601-7/01", CN_DESCRICAO: "LAVANDERIAS" },
        {
          id: "9602501",
          CN_CODIGO: "9602-5/01",
          CN_DESCRICAO: "CABELEIREIROS",
        },
        { id: "9601702", CN_CODIGO: "9601-7/02", CN_DESCRICAO: "TINTURARIAS" },
        {
          id: "9603301",
          CN_CODIGO: "9603-3/01",
          CN_DESCRICAO: "GESTAO E MANUTENCAO DE CEMITERIOS",
        },
        {
          id: "9602502",
          CN_CODIGO: "9602-5/02",
          CN_DESCRICAO: "OUTRAS ATIVIDADES DE TRATAMENTO DE BELEZA",
        },
        {
          id: "9603303",
          CN_CODIGO: "9603-3/03",
          CN_DESCRICAO: "SERVICOS DE SEPULTAMENTO",
        },
        {
          id: "9603302",
          CN_CODIGO: "9603-3/02",
          CN_DESCRICAO: "SERVICOS DE CREMACAO",
        },
        {
          id: "9603305",
          CN_CODIGO: "9603-3/05",
          CN_DESCRICAO: "SERVICOS DE SOMATOCONSERVACAO",
        },
        {
          id: "9603399",
          CN_CODIGO: "9603-3/99",
          CN_DESCRICAO:
            "ATIVIDADES FUNERARIAS E SERVICOS RELACIONADOS NAO ESPECIFICADOS ANTERIORMENTE",
        },
        {
          id: "9609201",
          CN_CODIGO: "9609-2/01",
          CN_DESCRICAO: "CLINICAS DE ESTETICA E SIMILARES*",
        },
        {
          id: "9609203",
          CN_CODIGO: "9609-2/03",
          CN_DESCRICAO: "ALOJAMENTO, HIGIENE E EMBELEZAMENTO DE ANIMAIS",
        },
        {
          id: "9609204",
          CN_CODIGO: "9609-2/04",
          CN_DESCRICAO:
            "EXPLORACAO DE MAQUINAS DE SERVICOS PESSOAIS ACIONADAS POR MOEDA",
        },
        {
          id: "9609202",
          CN_CODIGO: "9609-2/02",
          CN_DESCRICAO: "AGENCIAS MATRIMONIAIS",
        },
        {
          id: "9609299",
          CN_CODIGO: "9609-2/99",
          CN_DESCRICAO:
            "OUTRAS ATIVIDADES DE SERVICOS PESSOAIS NAO ESPECIFICADAS ANTERIORMENTE",
        },
        {
          id: "9900800",
          CN_CODIGO: "9900-8/00",
          CN_DESCRICAO:
            "ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUICOES EXTRATERRITORIAIS",
        },
        {
          id: "9700500",
          CN_CODIGO: "9700-5/00",
          CN_DESCRICAO: "SERVICOS DOMESTICOS",
        },
        {
          id: "9603304",
          CN_CODIGO: "9603-3/04",
          CN_DESCRICAO: "SERVICOS DE FUNERARIAS",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("CNAES", null, { truncate: true });
  },
};
