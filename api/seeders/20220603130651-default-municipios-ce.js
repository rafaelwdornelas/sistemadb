/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ABAIARA",
                    MUN_UF: "CE",
                    MUN_COD: "2300101",
                },
                {
                    MUN_DESC: "ACARAPE",
                    MUN_UF: "CE",
                    MUN_COD: "2300150",
                },
                {
                    MUN_DESC: "ACARAÚ",
                    MUN_UF: "CE",
                    MUN_COD: "2300200",
                },
                {
                    MUN_DESC: "ACOPIARA",
                    MUN_UF: "CE",
                    MUN_COD: "2300309",
                },
                {
                    MUN_DESC: "AIUABA",
                    MUN_UF: "CE",
                    MUN_COD: "2300408",
                },
                {
                    MUN_DESC: "ALCÂNTARAS",
                    MUN_UF: "CE",
                    MUN_COD: "2300507",
                },
                {
                    MUN_DESC: "ALTANEIRA",
                    MUN_UF: "CE",
                    MUN_COD: "2300606",
                },
                {
                    MUN_DESC: "ALTO SANTO",
                    MUN_UF: "CE",
                    MUN_COD: "2300705",
                },
                {
                    MUN_DESC: "AMONTADA",
                    MUN_UF: "CE",
                    MUN_COD: "2300754",
                },
                {
                    MUN_DESC: "ANTONINA DO NORTE",
                    MUN_UF: "CE",
                    MUN_COD: "2300804",
                },
                {
                    MUN_DESC: "APUIARÉS",
                    MUN_UF: "CE",
                    MUN_COD: "2300903",
                },
                {
                    MUN_DESC: "AQUIRAZ",
                    MUN_UF: "CE",
                    MUN_COD: "2301000",
                },
                {
                    MUN_DESC: "ARACATI",
                    MUN_UF: "CE",
                    MUN_COD: "2301109",
                },
                {
                    MUN_DESC: "ARACOIABA",
                    MUN_UF: "CE",
                    MUN_COD: "2301208",
                },
                {
                    MUN_DESC: "ARARENDÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2301257",
                },
                {
                    MUN_DESC: "ARARIPE",
                    MUN_UF: "CE",
                    MUN_COD: "2301307",
                },
                {
                    MUN_DESC: "ARATUBA",
                    MUN_UF: "CE",
                    MUN_COD: "2301406",
                },
                {
                    MUN_DESC: "ARNEIROZ",
                    MUN_UF: "CE",
                    MUN_COD: "2301505",
                },
                {
                    MUN_DESC: "ASSARÉ",
                    MUN_UF: "CE",
                    MUN_COD: "2301604",
                },
                {
                    MUN_DESC: "AURORA",
                    MUN_UF: "CE",
                    MUN_COD: "2301703",
                },
                {
                    MUN_DESC: "BAIXIO",
                    MUN_UF: "CE",
                    MUN_COD: "2301802",
                },
                {
                    MUN_DESC: "BANABUIÚ",
                    MUN_UF: "CE",
                    MUN_COD: "2301851",
                },
                {
                    MUN_DESC: "BARBALHA",
                    MUN_UF: "CE",
                    MUN_COD: "2301901",
                },
                {
                    MUN_DESC: "BARREIRA",
                    MUN_UF: "CE",
                    MUN_COD: "2301950",
                },
                {
                    MUN_DESC: "BARRO",
                    MUN_UF: "CE",
                    MUN_COD: "2302008",
                },
                {
                    MUN_DESC: "BARROQUINHA",
                    MUN_UF: "CE",
                    MUN_COD: "2302057",
                },
                {
                    MUN_DESC: "BATURITÉ",
                    MUN_UF: "CE",
                    MUN_COD: "2302107",
                },
                {
                    MUN_DESC: "BEBERIBE",
                    MUN_UF: "CE",
                    MUN_COD: "2302206",
                },
                {
                    MUN_DESC: "BELA CRUZ",
                    MUN_UF: "CE",
                    MUN_COD: "2302305",
                },
                {
                    MUN_DESC: "BOA VIAGEM",
                    MUN_UF: "CE",
                    MUN_COD: "2302404",
                },
                {
                    MUN_DESC: "BREJO SANTO",
                    MUN_UF: "CE",
                    MUN_COD: "2302503",
                },
                {
                    MUN_DESC: "CAMOCIM",
                    MUN_UF: "CE",
                    MUN_COD: "2302602",
                },
                {
                    MUN_DESC: "CAMPOS SALES",
                    MUN_UF: "CE",
                    MUN_COD: "2302701",
                },
                {
                    MUN_DESC: "CANINDÉ",
                    MUN_UF: "CE",
                    MUN_COD: "2302800",
                },
                {
                    MUN_DESC: "CAPISTRANO",
                    MUN_UF: "CE",
                    MUN_COD: "2302909",
                },
                {
                    MUN_DESC: "CARIDADE",
                    MUN_UF: "CE",
                    MUN_COD: "2303006",
                },
                {
                    MUN_DESC: "CARIRÉ",
                    MUN_UF: "CE",
                    MUN_COD: "2303105",
                },
                {
                    MUN_DESC: "CARIRIAÇU",
                    MUN_UF: "CE",
                    MUN_COD: "2303204",
                },
                {
                    MUN_DESC: "CARIÚS",
                    MUN_UF: "CE",
                    MUN_COD: "2303303",
                },
                {
                    MUN_DESC: "CARNAUBAL",
                    MUN_UF: "CE",
                    MUN_COD: "2303402",
                },
                {
                    MUN_DESC: "CASCAVEL",
                    MUN_UF: "CE",
                    MUN_COD: "2303501",
                },
                {
                    MUN_DESC: "CATARINA",
                    MUN_UF: "CE",
                    MUN_COD: "2303600",
                },
                {
                    MUN_DESC: "CATUNDA",
                    MUN_UF: "CE",
                    MUN_COD: "2303659",
                },
                {
                    MUN_DESC: "CAUCAIA",
                    MUN_UF: "CE",
                    MUN_COD: "2303709",
                },
                {
                    MUN_DESC: "CEDRO",
                    MUN_UF: "CE",
                    MUN_COD: "2303808",
                },
                {
                    MUN_DESC: "CHAVAL",
                    MUN_UF: "CE",
                    MUN_COD: "2303907",
                },
                {
                    MUN_DESC: "CHORÓ",
                    MUN_UF: "CE",
                    MUN_COD: "2303931",
                },
                {
                    MUN_DESC: "CHOROZINHO",
                    MUN_UF: "CE",
                    MUN_COD: "2303956",
                },
                {
                    MUN_DESC: "COREAÚ",
                    MUN_UF: "CE",
                    MUN_COD: "2304004",
                },
                {
                    MUN_DESC: "CRATEÚS",
                    MUN_UF: "CE",
                    MUN_COD: "2304103",
                },
                {
                    MUN_DESC: "CRATO",
                    MUN_UF: "CE",
                    MUN_COD: "2304202",
                },
                {
                    MUN_DESC: "CROATÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2304236",
                },
                {
                    MUN_DESC: "CRUZ",
                    MUN_UF: "CE",
                    MUN_COD: "2304251",
                },
                {
                    MUN_DESC: "DEPUTADO IRAPUAN PINHEIRO",
                    MUN_UF: "CE",
                    MUN_COD: "2304269",
                },
                {
                    MUN_DESC: "ERERÉ",
                    MUN_UF: "CE",
                    MUN_COD: "2304277",
                },
                {
                    MUN_DESC: "EUSÉBIO",
                    MUN_UF: "CE",
                    MUN_COD: "2304285",
                },
                {
                    MUN_DESC: "FARIAS BRITO",
                    MUN_UF: "CE",
                    MUN_COD: "2304301",
                },
                {
                    MUN_DESC: "FORQUILHA",
                    MUN_UF: "CE",
                    MUN_COD: "2304350",
                },
                {
                    MUN_DESC: "FORTALEZA",
                    MUN_UF: "CE",
                    MUN_COD: "2304400",
                },
                {
                    MUN_DESC: "FORTIM",
                    MUN_UF: "CE",
                    MUN_COD: "2304459",
                },
                {
                    MUN_DESC: "FRECHEIRINHA",
                    MUN_UF: "CE",
                    MUN_COD: "2304509",
                },
                {
                    MUN_DESC: "GENERAL SAMPAIO",
                    MUN_UF: "CE",
                    MUN_COD: "2304608",
                },
                {
                    MUN_DESC: "GRAÇA",
                    MUN_UF: "CE",
                    MUN_COD: "2304657",
                },
                {
                    MUN_DESC: "GRANJA",
                    MUN_UF: "CE",
                    MUN_COD: "2304707",
                },
                {
                    MUN_DESC: "GRANJEIRO",
                    MUN_UF: "CE",
                    MUN_COD: "2304806",
                },
                {
                    MUN_DESC: "GROAÍRAS",
                    MUN_UF: "CE",
                    MUN_COD: "2304905",
                },
                {
                    MUN_DESC: "GUAIÚBA",
                    MUN_UF: "CE",
                    MUN_COD: "2304954",
                },
                {
                    MUN_DESC: "GUARACIABA DO NORTE",
                    MUN_UF: "CE",
                    MUN_COD: "2305001",
                },
                {
                    MUN_DESC: "GUARAMIRANGA",
                    MUN_UF: "CE",
                    MUN_COD: "2305100",
                },
                {
                    MUN_DESC: "HIDROLÂNDIA",
                    MUN_UF: "CE",
                    MUN_COD: "2305209",
                },
                {
                    MUN_DESC: "HORIZONTE",
                    MUN_UF: "CE",
                    MUN_COD: "2305233",
                },
                {
                    MUN_DESC: "IBARETAMA",
                    MUN_UF: "CE",
                    MUN_COD: "2305266",
                },
                {
                    MUN_DESC: "IBIAPINA",
                    MUN_UF: "CE",
                    MUN_COD: "2305308",
                },
                {
                    MUN_DESC: "IBICUITINGA",
                    MUN_UF: "CE",
                    MUN_COD: "2305332",
                },
                {
                    MUN_DESC: "ICAPUÍ",
                    MUN_UF: "CE",
                    MUN_COD: "2305357",
                },
                {
                    MUN_DESC: "ICÓ",
                    MUN_UF: "CE",
                    MUN_COD: "2305407",
                },
                {
                    MUN_DESC: "IGUATU",
                    MUN_UF: "CE",
                    MUN_COD: "2305506",
                },
                {
                    MUN_DESC: "INDEPENDÊNCIA",
                    MUN_UF: "CE",
                    MUN_COD: "2305605",
                },
                {
                    MUN_DESC: "IPAPORANGA",
                    MUN_UF: "CE",
                    MUN_COD: "2305654",
                },
                {
                    MUN_DESC: "IPAUMIRIM",
                    MUN_UF: "CE",
                    MUN_COD: "2305704",
                },
                {
                    MUN_DESC: "IPU",
                    MUN_UF: "CE",
                    MUN_COD: "2305803",
                },
                {
                    MUN_DESC: "IPUEIRAS",
                    MUN_UF: "CE",
                    MUN_COD: "2305902",
                },
                {
                    MUN_DESC: "IRACEMA",
                    MUN_UF: "CE",
                    MUN_COD: "2306009",
                },
                {
                    MUN_DESC: "IRAUÇUBA",
                    MUN_UF: "CE",
                    MUN_COD: "2306108",
                },
                {
                    MUN_DESC: "ITAIÇABA",
                    MUN_UF: "CE",
                    MUN_COD: "2306207",
                },
                {
                    MUN_DESC: "ITAITINGA",
                    MUN_UF: "CE",
                    MUN_COD: "2306256",
                },
                {
                    MUN_DESC: "ITAPAJÉ",
                    MUN_UF: "CE",
                    MUN_COD: "2306306",
                },
                {
                    MUN_DESC: "ITAPIPOCA",
                    MUN_UF: "CE",
                    MUN_COD: "2306405",
                },
                {
                    MUN_DESC: "ITAPIÚNA",
                    MUN_UF: "CE",
                    MUN_COD: "2306504",
                },
                {
                    MUN_DESC: "ITAREMA",
                    MUN_UF: "CE",
                    MUN_COD: "2306553",
                },
                {
                    MUN_DESC: "ITATIRA",
                    MUN_UF: "CE",
                    MUN_COD: "2306603",
                },
                {
                    MUN_DESC: "JAGUARETAMA",
                    MUN_UF: "CE",
                    MUN_COD: "2306702",
                },
                {
                    MUN_DESC: "JAGUARIBARA",
                    MUN_UF: "CE",
                    MUN_COD: "2306801",
                },
                {
                    MUN_DESC: "JAGUARIBE",
                    MUN_UF: "CE",
                    MUN_COD: "2306900",
                },
                {
                    MUN_DESC: "JAGUARUANA",
                    MUN_UF: "CE",
                    MUN_COD: "2307007",
                },
                {
                    MUN_DESC: "JARDIM",
                    MUN_UF: "CE",
                    MUN_COD: "2307106",
                },
                {
                    MUN_DESC: "JATI",
                    MUN_UF: "CE",
                    MUN_COD: "2307205",
                },
                {
                    MUN_DESC: "JIJOCA DE JERICOACOARA",
                    MUN_UF: "CE",
                    MUN_COD: "2307254",
                },
                {
                    MUN_DESC: "JUAZEIRO DO NORTE",
                    MUN_UF: "CE",
                    MUN_COD: "2307304",
                },
                {
                    MUN_DESC: "JUCÁS",
                    MUN_UF: "CE",
                    MUN_COD: "2307403",
                },
                {
                    MUN_DESC: "LAVRAS DA MANGABEIRA",
                    MUN_UF: "CE",
                    MUN_COD: "2307502",
                },
                {
                    MUN_DESC: "LIMOEIRO DO NORTE",
                    MUN_UF: "CE",
                    MUN_COD: "2307601",
                },
                {
                    MUN_DESC: "MADALENA",
                    MUN_UF: "CE",
                    MUN_COD: "2307635",
                },
                {
                    MUN_DESC: "MARACANAÚ",
                    MUN_UF: "CE",
                    MUN_COD: "2307650",
                },
                {
                    MUN_DESC: "MARANGUAPE",
                    MUN_UF: "CE",
                    MUN_COD: "2307700",
                },
                {
                    MUN_DESC: "MARCO",
                    MUN_UF: "CE",
                    MUN_COD: "2307809",
                },
                {
                    MUN_DESC: "MARTINÓPOLE",
                    MUN_UF: "CE",
                    MUN_COD: "2307908",
                },
                {
                    MUN_DESC: "MASSAPÊ",
                    MUN_UF: "CE",
                    MUN_COD: "2308005",
                },
                {
                    MUN_DESC: "MAURITI",
                    MUN_UF: "CE",
                    MUN_COD: "2308104",
                },
                {
                    MUN_DESC: "MERUOCA",
                    MUN_UF: "CE",
                    MUN_COD: "2308203",
                },
                {
                    MUN_DESC: "MILAGRES",
                    MUN_UF: "CE",
                    MUN_COD: "2308302",
                },
                {
                    MUN_DESC: "MILHÃ",
                    MUN_UF: "CE",
                    MUN_COD: "2308351",
                },
                {
                    MUN_DESC: "MIRAÍMA",
                    MUN_UF: "CE",
                    MUN_COD: "2308377",
                },
                {
                    MUN_DESC: "MISSÃO VELHA",
                    MUN_UF: "CE",
                    MUN_COD: "2308401",
                },
                {
                    MUN_DESC: "MOMBAÇA",
                    MUN_UF: "CE",
                    MUN_COD: "2308500",
                },
                {
                    MUN_DESC: "MONSENHOR TABOSA",
                    MUN_UF: "CE",
                    MUN_COD: "2308609",
                },
                {
                    MUN_DESC: "MORADA NOVA",
                    MUN_UF: "CE",
                    MUN_COD: "2308708",
                },
                {
                    MUN_DESC: "MORAÚJO",
                    MUN_UF: "CE",
                    MUN_COD: "2308807",
                },
                {
                    MUN_DESC: "MORRINHOS",
                    MUN_UF: "CE",
                    MUN_COD: "2308906",
                },
                {
                    MUN_DESC: "MUCAMBO",
                    MUN_UF: "CE",
                    MUN_COD: "2309003",
                },
                {
                    MUN_DESC: "MULUNGU",
                    MUN_UF: "CE",
                    MUN_COD: "2309102",
                },
                {
                    MUN_DESC: "NOVA OLINDA",
                    MUN_UF: "CE",
                    MUN_COD: "2309201",
                },
                {
                    MUN_DESC: "NOVA RUSSAS",
                    MUN_UF: "CE",
                    MUN_COD: "2309300",
                },
                {
                    MUN_DESC: "NOVO ORIENTE",
                    MUN_UF: "CE",
                    MUN_COD: "2309409",
                },
                {
                    MUN_DESC: "OCARA",
                    MUN_UF: "CE",
                    MUN_COD: "2309458",
                },
                {
                    MUN_DESC: "ORÓS",
                    MUN_UF: "CE",
                    MUN_COD: "2309508",
                },
                {
                    MUN_DESC: "PACAJUS",
                    MUN_UF: "CE",
                    MUN_COD: "2309607",
                },
                {
                    MUN_DESC: "PACATUBA",
                    MUN_UF: "CE",
                    MUN_COD: "2309706",
                },
                {
                    MUN_DESC: "PACOTI",
                    MUN_UF: "CE",
                    MUN_COD: "2309805",
                },
                {
                    MUN_DESC: "PACUJÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2309904",
                },
                {
                    MUN_DESC: "PALHANO",
                    MUN_UF: "CE",
                    MUN_COD: "2310001",
                },
                {
                    MUN_DESC: "PALMÁCIA",
                    MUN_UF: "CE",
                    MUN_COD: "2310100",
                },
                {
                    MUN_DESC: "PARACURU",
                    MUN_UF: "CE",
                    MUN_COD: "2310209",
                },
                {
                    MUN_DESC: "PARAIPABA",
                    MUN_UF: "CE",
                    MUN_COD: "2310258",
                },
                {
                    MUN_DESC: "PARAMBU",
                    MUN_UF: "CE",
                    MUN_COD: "2310308",
                },
                {
                    MUN_DESC: "PARAMOTI",
                    MUN_UF: "CE",
                    MUN_COD: "2310407",
                },
                {
                    MUN_DESC: "PEDRA BRANCA",
                    MUN_UF: "CE",
                    MUN_COD: "2310506",
                },
                {
                    MUN_DESC: "PENAFORTE",
                    MUN_UF: "CE",
                    MUN_COD: "2310605",
                },
                {
                    MUN_DESC: "PENTECOSTE",
                    MUN_UF: "CE",
                    MUN_COD: "2310704",
                },
                {
                    MUN_DESC: "PEREIRO",
                    MUN_UF: "CE",
                    MUN_COD: "2310803",
                },
                {
                    MUN_DESC: "PINDORETAMA",
                    MUN_UF: "CE",
                    MUN_COD: "2310852",
                },
                {
                    MUN_DESC: "PIQUET CARNEIRO",
                    MUN_UF: "CE",
                    MUN_COD: "2310902",
                },
                {
                    MUN_DESC: "PIRES FERREIRA",
                    MUN_UF: "CE",
                    MUN_COD: "2310951",
                },
                {
                    MUN_DESC: "PORANGA",
                    MUN_UF: "CE",
                    MUN_COD: "2311009",
                },
                {
                    MUN_DESC: "PORTEIRAS",
                    MUN_UF: "CE",
                    MUN_COD: "2311108",
                },
                {
                    MUN_DESC: "POTENGI",
                    MUN_UF: "CE",
                    MUN_COD: "2311207",
                },
                {
                    MUN_DESC: "POTIRETAMA",
                    MUN_UF: "CE",
                    MUN_COD: "2311231",
                },
                {
                    MUN_DESC: "QUITERIANÓPOLIS",
                    MUN_UF: "CE",
                    MUN_COD: "2311264",
                },
                {
                    MUN_DESC: "QUIXADÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2311306",
                },
                {
                    MUN_DESC: "QUIXELÔ",
                    MUN_UF: "CE",
                    MUN_COD: "2311355",
                },
                {
                    MUN_DESC: "QUIXERAMOBIM",
                    MUN_UF: "CE",
                    MUN_COD: "2311405",
                },
                {
                    MUN_DESC: "QUIXERÉ",
                    MUN_UF: "CE",
                    MUN_COD: "2311504",
                },
                {
                    MUN_DESC: "REDENÇÃO",
                    MUN_UF: "CE",
                    MUN_COD: "2311603",
                },
                {
                    MUN_DESC: "RERIUTABA",
                    MUN_UF: "CE",
                    MUN_COD: "2311702",
                },
                {
                    MUN_DESC: "RUSSAS",
                    MUN_UF: "CE",
                    MUN_COD: "2311801",
                },
                {
                    MUN_DESC: "SABOEIRO",
                    MUN_UF: "CE",
                    MUN_COD: "2311900",
                },
                {
                    MUN_DESC: "SALITRE",
                    MUN_UF: "CE",
                    MUN_COD: "2311959",
                },
                {
                    MUN_DESC: "SANTA QUITÉRIA",
                    MUN_UF: "CE",
                    MUN_COD: "2312205",
                },
                {
                    MUN_DESC: "SANTANA DO ACARAÚ",
                    MUN_UF: "CE",
                    MUN_COD: "2312007",
                },
                {
                    MUN_DESC: "SANTANA DO CARIRI",
                    MUN_UF: "CE",
                    MUN_COD: "2312106",
                },
                {
                    MUN_DESC: "SÃO BENEDITO",
                    MUN_UF: "CE",
                    MUN_COD: "2312304",
                },
                {
                    MUN_DESC: "SÃO GONÇALO DO AMARANTE",
                    MUN_UF: "CE",
                    MUN_COD: "2312403",
                },
                {
                    MUN_DESC: "SÃO JOÃO DO JAGUARIBE",
                    MUN_UF: "CE",
                    MUN_COD: "2312502",
                },
                {
                    MUN_DESC: "SÃO LUÍS DO CURU",
                    MUN_UF: "CE",
                    MUN_COD: "2312601",
                },
                {
                    MUN_DESC: "SENADOR POMPEU",
                    MUN_UF: "CE",
                    MUN_COD: "2312700",
                },
                {
                    MUN_DESC: "SENADOR SÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2312809",
                },
                {
                    MUN_DESC: "SOBRAL",
                    MUN_UF: "CE",
                    MUN_COD: "2312908",
                },
                {
                    MUN_DESC: "SOLONÓPOLE",
                    MUN_UF: "CE",
                    MUN_COD: "2313005",
                },
                {
                    MUN_DESC: "TABULEIRO DO NORTE",
                    MUN_UF: "CE",
                    MUN_COD: "2313104",
                },
                {
                    MUN_DESC: "TAMBORIL",
                    MUN_UF: "CE",
                    MUN_COD: "2313203",
                },
                {
                    MUN_DESC: "TARRAFAS",
                    MUN_UF: "CE",
                    MUN_COD: "2313252",
                },
                {
                    MUN_DESC: "TAUÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2313302",
                },
                {
                    MUN_DESC: "TEJUÇUOCA",
                    MUN_UF: "CE",
                    MUN_COD: "2313351",
                },
                {
                    MUN_DESC: "TIANGUÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2313401",
                },
                {
                    MUN_DESC: "TRAIRI",
                    MUN_UF: "CE",
                    MUN_COD: "2313500",
                },
                {
                    MUN_DESC: "TURURU",
                    MUN_UF: "CE",
                    MUN_COD: "2313559",
                },
                {
                    MUN_DESC: "UBAJARA",
                    MUN_UF: "CE",
                    MUN_COD: "2313609",
                },
                {
                    MUN_DESC: "UMARI",
                    MUN_UF: "CE",
                    MUN_COD: "2313708",
                },
                {
                    MUN_DESC: "UMIRIM",
                    MUN_UF: "CE",
                    MUN_COD: "2313757",
                },
                {
                    MUN_DESC: "URUBURETAMA",
                    MUN_UF: "CE",
                    MUN_COD: "2313807",
                },
                {
                    MUN_DESC: "URUOCA",
                    MUN_UF: "CE",
                    MUN_COD: "2313906",
                },
                {
                    MUN_DESC: "VARJOTA",
                    MUN_UF: "CE",
                    MUN_COD: "2313955",
                },
                {
                    MUN_DESC: "VÁRZEA ALEGRE",
                    MUN_UF: "CE",
                    MUN_COD: "2314003",
                },
                {
                    MUN_DESC: "VIÇOSA DO CEARÁ",
                    MUN_UF: "CE",
                    MUN_COD: "2314102",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "CE" }, {});
    },
};