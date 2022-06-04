/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "AFONSO CLÁUDIO",
                    MUN_UF: "ES",
                    MUN_COD: "3200102",
                },
                {
                    MUN_DESC: "ÁGUA DOCE DO NORTE",
                    MUN_UF: "ES",
                    MUN_COD: "3200169",
                },
                {
                    MUN_DESC: "ÁGUIA BRANCA",
                    MUN_UF: "ES",
                    MUN_COD: "3200136",
                },
                {
                    MUN_DESC: "ALEGRE",
                    MUN_UF: "ES",
                    MUN_COD: "3200201",
                },
                {
                    MUN_DESC: "ALFREDO CHAVES",
                    MUN_UF: "ES",
                    MUN_COD: "3200300",
                },
                {
                    MUN_DESC: "ALTO RIO NOVO",
                    MUN_UF: "ES",
                    MUN_COD: "3200359",
                },
                {
                    MUN_DESC: "ANCHIETA",
                    MUN_UF: "ES",
                    MUN_COD: "3200409",
                },
                {
                    MUN_DESC: "APIACÁ",
                    MUN_UF: "ES",
                    MUN_COD: "3200508",
                },
                {
                    MUN_DESC: "ARACRUZ",
                    MUN_UF: "ES",
                    MUN_COD: "3200607",
                },
                {
                    MUN_DESC: "ATÍLIO VIVÁCQUA",
                    MUN_UF: "ES",
                    MUN_COD: "3200706",
                },
                {
                    MUN_DESC: "BAIXO GUANDU",
                    MUN_UF: "ES",
                    MUN_COD: "3200805",
                },
                {
                    MUN_DESC: "BARRA DE SÃO FRANCISCO",
                    MUN_UF: "ES",
                    MUN_COD: "3200904",
                },
                {
                    MUN_DESC: "BOA ESPERANÇA",
                    MUN_UF: "ES",
                    MUN_COD: "3201001",
                },
                {
                    MUN_DESC: "BOM JESUS DO NORTE",
                    MUN_UF: "ES",
                    MUN_COD: "3201100",
                },
                {
                    MUN_DESC: "BREJETUBA",
                    MUN_UF: "ES",
                    MUN_COD: "3201159",
                },
                {
                    MUN_DESC: "CACHOEIRO DE ITAPEMIRIM",
                    MUN_UF: "ES",
                    MUN_COD: "3201209",
                },
                {
                    MUN_DESC: "CARIACICA",
                    MUN_UF: "ES",
                    MUN_COD: "3201308",
                },
                {
                    MUN_DESC: "CASTELO",
                    MUN_UF: "ES",
                    MUN_COD: "3201407",
                },
                {
                    MUN_DESC: "COLATINA",
                    MUN_UF: "ES",
                    MUN_COD: "3201506",
                },
                {
                    MUN_DESC: "CONCEIÇÃO DA BARRA",
                    MUN_UF: "ES",
                    MUN_COD: "3201605",
                },
                {
                    MUN_DESC: "CONCEIÇÃO DO CASTELO",
                    MUN_UF: "ES",
                    MUN_COD: "3201704",
                },
                {
                    MUN_DESC: "DIVINO DE SÃO LOURENÇO",
                    MUN_UF: "ES",
                    MUN_COD: "3201803",
                },
                {
                    MUN_DESC: "DOMINGOS MARTINS",
                    MUN_UF: "ES",
                    MUN_COD: "3201902",
                },
                {
                    MUN_DESC: "DORES DO RIO PRETO",
                    MUN_UF: "ES",
                    MUN_COD: "3202009",
                },
                {
                    MUN_DESC: "ECOPORANGA",
                    MUN_UF: "ES",
                    MUN_COD: "3202108",
                },
                {
                    MUN_DESC: "FUNDÃO",
                    MUN_UF: "ES",
                    MUN_COD: "3202207",
                },
                {
                    MUN_DESC: "GOVERNADOR LINDENBERG",
                    MUN_UF: "ES",
                    MUN_COD: "3202256",
                },
                {
                    MUN_DESC: "GUAÇUÍ",
                    MUN_UF: "ES",
                    MUN_COD: "3202306",
                },
                {
                    MUN_DESC: "GUARAPARI",
                    MUN_UF: "ES",
                    MUN_COD: "3202405",
                },
                {
                    MUN_DESC: "IBATIBA",
                    MUN_UF: "ES",
                    MUN_COD: "3202454",
                },
                {
                    MUN_DESC: "IBIRAÇU",
                    MUN_UF: "ES",
                    MUN_COD: "3202504",
                },
                {
                    MUN_DESC: "IBITIRAMA",
                    MUN_UF: "ES",
                    MUN_COD: "3202553",
                },
                {
                    MUN_DESC: "ICONHA",
                    MUN_UF: "ES",
                    MUN_COD: "3202603",
                },
                {
                    MUN_DESC: "IRUPI",
                    MUN_UF: "ES",
                    MUN_COD: "3202652",
                },
                {
                    MUN_DESC: "ITAGUAÇU",
                    MUN_UF: "ES",
                    MUN_COD: "3202702",
                },
                {
                    MUN_DESC: "ITAPEMIRIM",
                    MUN_UF: "ES",
                    MUN_COD: "3202801",
                },
                {
                    MUN_DESC: "ITARANA",
                    MUN_UF: "ES",
                    MUN_COD: "3202900",
                },
                {
                    MUN_DESC: "IÚNA",
                    MUN_UF: "ES",
                    MUN_COD: "3203007",
                },
                {
                    MUN_DESC: "JAGUARÉ",
                    MUN_UF: "ES",
                    MUN_COD: "3203056",
                },
                {
                    MUN_DESC: "JERÔNIMO MONTEIRO",
                    MUN_UF: "ES",
                    MUN_COD: "3203106",
                },
                {
                    MUN_DESC: "JOÃO NEIVA",
                    MUN_UF: "ES",
                    MUN_COD: "3203130",
                },
                {
                    MUN_DESC: "LARANJA DA TERRA",
                    MUN_UF: "ES",
                    MUN_COD: "3203163",
                },
                {
                    MUN_DESC: "LINHARES",
                    MUN_UF: "ES",
                    MUN_COD: "3203205",
                },
                {
                    MUN_DESC: "MANTENÓPOLIS",
                    MUN_UF: "ES",
                    MUN_COD: "3203304",
                },
                {
                    MUN_DESC: "MARATAÍZES",
                    MUN_UF: "ES",
                    MUN_COD: "3203320",
                },
                {
                    MUN_DESC: "MARECHAL FLORIANO",
                    MUN_UF: "ES",
                    MUN_COD: "3203346",
                },
                {
                    MUN_DESC: "MARILÂNDIA",
                    MUN_UF: "ES",
                    MUN_COD: "3203353",
                },
                {
                    MUN_DESC: "MIMOSO DO SUL",
                    MUN_UF: "ES",
                    MUN_COD: "3203403",
                },
                {
                    MUN_DESC: "MONTANHA",
                    MUN_UF: "ES",
                    MUN_COD: "3203502",
                },
                {
                    MUN_DESC: "MUCURICI",
                    MUN_UF: "ES",
                    MUN_COD: "3203601",
                },
                {
                    MUN_DESC: "MUNIZ FREIRE",
                    MUN_UF: "ES",
                    MUN_COD: "3203700",
                },
                {
                    MUN_DESC: "MUQUI",
                    MUN_UF: "ES",
                    MUN_COD: "3203809",
                },
                {
                    MUN_DESC: "NOVA VENÉCIA",
                    MUN_UF: "ES",
                    MUN_COD: "3203908",
                },
                {
                    MUN_DESC: "PANCAS",
                    MUN_UF: "ES",
                    MUN_COD: "3204005",
                },
                {
                    MUN_DESC: "PEDRO CANÁRIO",
                    MUN_UF: "ES",
                    MUN_COD: "3204054",
                },
                {
                    MUN_DESC: "PINHEIROS",
                    MUN_UF: "ES",
                    MUN_COD: "3204104",
                },
                {
                    MUN_DESC: "PIÚMA",
                    MUN_UF: "ES",
                    MUN_COD: "3204203",
                },
                {
                    MUN_DESC: "PONTO BELO",
                    MUN_UF: "ES",
                    MUN_COD: "3204252",
                },
                {
                    MUN_DESC: "PRESIDENTE KENNEDY",
                    MUN_UF: "ES",
                    MUN_COD: "3204302",
                },
                {
                    MUN_DESC: "RIO BANANAL",
                    MUN_UF: "ES",
                    MUN_COD: "3204351",
                },
                {
                    MUN_DESC: "RIO NOVO DO SUL",
                    MUN_UF: "ES",
                    MUN_COD: "3204401",
                },
                {
                    MUN_DESC: "SANTA LEOPOLDINA",
                    MUN_UF: "ES",
                    MUN_COD: "3204500",
                },
                {
                    MUN_DESC: "SANTA MARIA DE JETIBÁ",
                    MUN_UF: "ES",
                    MUN_COD: "3204559",
                },
                {
                    MUN_DESC: "SANTA TERESA",
                    MUN_UF: "ES",
                    MUN_COD: "3204609",
                },
                {
                    MUN_DESC: "SÃO DOMINGOS DO NORTE",
                    MUN_UF: "ES",
                    MUN_COD: "3204658",
                },
                {
                    MUN_DESC: "SÃO GABRIEL DA PALHA",
                    MUN_UF: "ES",
                    MUN_COD: "3204708",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DO CALÇADO",
                    MUN_UF: "ES",
                    MUN_COD: "3204807",
                },
                {
                    MUN_DESC: "SÃO MATEUS",
                    MUN_UF: "ES",
                    MUN_COD: "3204906",
                },
                {
                    MUN_DESC: "SÃO ROQUE DO CANAÃ",
                    MUN_UF: "ES",
                    MUN_COD: "3204955",
                },
                {
                    MUN_DESC: "SERRA",
                    MUN_UF: "ES",
                    MUN_COD: "3205002",
                },
                {
                    MUN_DESC: "SOORETAMA",
                    MUN_UF: "ES",
                    MUN_COD: "3205010",
                },
                {
                    MUN_DESC: "VARGEM ALTA",
                    MUN_UF: "ES",
                    MUN_COD: "3205036",
                },
                {
                    MUN_DESC: "VENDA NOVA DO IMIGRANTE",
                    MUN_UF: "ES",
                    MUN_COD: "3205069",
                },
                {
                    MUN_DESC: "VIANA",
                    MUN_UF: "ES",
                    MUN_COD: "3205101",
                },
                {
                    MUN_DESC: "VILA PAVÃO",
                    MUN_UF: "ES",
                    MUN_COD: "3205150",
                },
                {
                    MUN_DESC: "VILA VALÉRIO",
                    MUN_UF: "ES",
                    MUN_COD: "3205176",
                },
                {
                    MUN_DESC: "VILA VELHA",
                    MUN_UF: "ES",
                    MUN_COD: "3205200",
                },
                {
                    MUN_DESC: "VITÓRIA",
                    MUN_UF: "ES",
                    MUN_COD: "3205309",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "ES" }, {});
    },
};