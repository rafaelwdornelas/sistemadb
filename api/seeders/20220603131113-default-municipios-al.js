/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ÁGUA BRANCA",
                    MUN_UF: "AL",
                    MUN_COD: "2700102",
                },
                {
                    MUN_DESC: "ANADIA",
                    MUN_UF: "AL",
                    MUN_COD: "2700201",
                },
                {
                    MUN_DESC: "ARAPIRACA",
                    MUN_UF: "AL",
                    MUN_COD: "2700300",
                },
                {
                    MUN_DESC: "ATALAIA",
                    MUN_UF: "AL",
                    MUN_COD: "2700409",
                },
                {
                    MUN_DESC: "BARRA DE SANTO ANTÔNIO",
                    MUN_UF: "AL",
                    MUN_COD: "2700508",
                },
                {
                    MUN_DESC: "BARRA DE SÃO MIGUEL",
                    MUN_UF: "AL",
                    MUN_COD: "2700607",
                },
                {
                    MUN_DESC: "BATALHA",
                    MUN_UF: "AL",
                    MUN_COD: "2700706",
                },
                {
                    MUN_DESC: "BELÉM",
                    MUN_UF: "AL",
                    MUN_COD: "2700805",
                },
                {
                    MUN_DESC: "BELO MONTE",
                    MUN_UF: "AL",
                    MUN_COD: "2700904",
                },
                {
                    MUN_DESC: "BOCA DA MATA",
                    MUN_UF: "AL",
                    MUN_COD: "2701001",
                },
                {
                    MUN_DESC: "BRANQUINHA",
                    MUN_UF: "AL",
                    MUN_COD: "2701100",
                },
                {
                    MUN_DESC: "CACIMBINHAS",
                    MUN_UF: "AL",
                    MUN_COD: "2701209",
                },
                {
                    MUN_DESC: "CAJUEIRO",
                    MUN_UF: "AL",
                    MUN_COD: "2701308",
                },
                {
                    MUN_DESC: "CAMPESTRE",
                    MUN_UF: "AL",
                    MUN_COD: "2701357",
                },
                {
                    MUN_DESC: "CAMPO ALEGRE",
                    MUN_UF: "AL",
                    MUN_COD: "2701407",
                },
                {
                    MUN_DESC: "CAMPO GRANDE",
                    MUN_UF: "AL",
                    MUN_COD: "2701506",
                },
                {
                    MUN_DESC: "CANAPI",
                    MUN_UF: "AL",
                    MUN_COD: "2701605",
                },
                {
                    MUN_DESC: "CAPELA",
                    MUN_UF: "AL",
                    MUN_COD: "2701704",
                },
                {
                    MUN_DESC: "CARNEIROS",
                    MUN_UF: "AL",
                    MUN_COD: "2701803",
                },
                {
                    MUN_DESC: "CHÃ PRETA",
                    MUN_UF: "AL",
                    MUN_COD: "2701902",
                },
                {
                    MUN_DESC: "COITÉ DO NÓIA",
                    MUN_UF: "AL",
                    MUN_COD: "2702009",
                },
                {
                    MUN_DESC: "COLÔNIA LEOPOLDINA",
                    MUN_UF: "AL",
                    MUN_COD: "2702108",
                },
                {
                    MUN_DESC: "COQUEIRO SECO",
                    MUN_UF: "AL",
                    MUN_COD: "2702207",
                },
                {
                    MUN_DESC: "CORURIPE",
                    MUN_UF: "AL",
                    MUN_COD: "2702306",
                },
                {
                    MUN_DESC: "CRAÍBAS",
                    MUN_UF: "AL",
                    MUN_COD: "2702355",
                },
                {
                    MUN_DESC: "DELMIRO GOUVEIA",
                    MUN_UF: "AL",
                    MUN_COD: "2702405",
                },
                {
                    MUN_DESC: "DOIS RIACHOS",
                    MUN_UF: "AL",
                    MUN_COD: "2702504",
                },
                {
                    MUN_DESC: "ESTRELA DE ALAGOAS",
                    MUN_UF: "AL",
                    MUN_COD: "2702553",
                },
                {
                    MUN_DESC: "FEIRA GRANDE",
                    MUN_UF: "AL",
                    MUN_COD: "2702603",
                },
                {
                    MUN_DESC: "FELIZ DESERTO",
                    MUN_UF: "AL",
                    MUN_COD: "2702702",
                },
                {
                    MUN_DESC: "FLEXEIRAS",
                    MUN_UF: "AL",
                    MUN_COD: "2702801",
                },
                {
                    MUN_DESC: "GIRAU DO PONCIANO",
                    MUN_UF: "AL",
                    MUN_COD: "2702900",
                },
                {
                    MUN_DESC: "IBATEGUARA",
                    MUN_UF: "AL",
                    MUN_COD: "2703007",
                },
                {
                    MUN_DESC: "IGACI",
                    MUN_UF: "AL",
                    MUN_COD: "2703106",
                },
                {
                    MUN_DESC: "IGREJA NOVA",
                    MUN_UF: "AL",
                    MUN_COD: "2703205",
                },
                {
                    MUN_DESC: "INHAPI",
                    MUN_UF: "AL",
                    MUN_COD: "2703304",
                },
                {
                    MUN_DESC: "JACARÉ DOS HOMENS",
                    MUN_UF: "AL",
                    MUN_COD: "2703403",
                },
                {
                    MUN_DESC: "JACUÍPE",
                    MUN_UF: "AL",
                    MUN_COD: "2703502",
                },
                {
                    MUN_DESC: "JAPARATINGA",
                    MUN_UF: "AL",
                    MUN_COD: "2703601",
                },
                {
                    MUN_DESC: "JARAMATAIA",
                    MUN_UF: "AL",
                    MUN_COD: "2703700",
                },
                {
                    MUN_DESC: "JEQUIÁ DA PRAIA",
                    MUN_UF: "AL",
                    MUN_COD: "2703759",
                },
                {
                    MUN_DESC: "JOAQUIM GOMES",
                    MUN_UF: "AL",
                    MUN_COD: "2703809",
                },
                {
                    MUN_DESC: "JUNDIÁ",
                    MUN_UF: "AL",
                    MUN_COD: "2703908",
                },
                {
                    MUN_DESC: "JUNQUEIRO",
                    MUN_UF: "AL",
                    MUN_COD: "2704005",
                },
                {
                    MUN_DESC: "LAGOA DA CANOA",
                    MUN_UF: "AL",
                    MUN_COD: "2704104",
                },
                {
                    MUN_DESC: "LIMOEIRO DE ANADIA",
                    MUN_UF: "AL",
                    MUN_COD: "2704203",
                },
                {
                    MUN_DESC: "MACEIÓ",
                    MUN_UF: "AL",
                    MUN_COD: "2704302",
                },
                {
                    MUN_DESC: "MAJOR ISIDORO",
                    MUN_UF: "AL",
                    MUN_COD: "2704401",
                },
                {
                    MUN_DESC: "MAR VERMELHO",
                    MUN_UF: "AL",
                    MUN_COD: "2704906",
                },
                {
                    MUN_DESC: "MARAGOGI",
                    MUN_UF: "AL",
                    MUN_COD: "2704500",
                },
                {
                    MUN_DESC: "MARAVILHA",
                    MUN_UF: "AL",
                    MUN_COD: "2704609",
                },
                {
                    MUN_DESC: "MARECHAL DEODORO",
                    MUN_UF: "AL",
                    MUN_COD: "2704708",
                },
                {
                    MUN_DESC: "MARIBONDO",
                    MUN_UF: "AL",
                    MUN_COD: "2704807",
                },
                {
                    MUN_DESC: "MATA GRANDE",
                    MUN_UF: "AL",
                    MUN_COD: "2705002",
                },
                {
                    MUN_DESC: "MATRIZ DE CAMARAGIBE",
                    MUN_UF: "AL",
                    MUN_COD: "2705101",
                },
                {
                    MUN_DESC: "MESSIAS",
                    MUN_UF: "AL",
                    MUN_COD: "2705200",
                },
                {
                    MUN_DESC: "MINADOR DO NEGRÃO",
                    MUN_UF: "AL",
                    MUN_COD: "2705309",
                },
                {
                    MUN_DESC: "MONTEIRÓPOLIS",
                    MUN_UF: "AL",
                    MUN_COD: "2705408",
                },
                {
                    MUN_DESC: "MURICI",
                    MUN_UF: "AL",
                    MUN_COD: "2705507",
                },
                {
                    MUN_DESC: "NOVO LINO",
                    MUN_UF: "AL",
                    MUN_COD: "2705606",
                },
                {
                    MUN_DESC: "OLHO D'ÁGUA DAS FLORES",
                    MUN_UF: "AL",
                    MUN_COD: "2705705",
                },
                {
                    MUN_DESC: "OLHO D'ÁGUA DO CASADO",
                    MUN_UF: "AL",
                    MUN_COD: "2705804",
                },
                {
                    MUN_DESC: "OLHO D'ÁGUA GRANDE",
                    MUN_UF: "AL",
                    MUN_COD: "2705903",
                },
                {
                    MUN_DESC: "OLIVENÇA",
                    MUN_UF: "AL",
                    MUN_COD: "2706000",
                },
                {
                    MUN_DESC: "OURO BRANCO",
                    MUN_UF: "AL",
                    MUN_COD: "2706109",
                },
                {
                    MUN_DESC: "PALESTINA",
                    MUN_UF: "AL",
                    MUN_COD: "2706208",
                },
                {
                    MUN_DESC: "PALMEIRA DOS ÍNDIOS",
                    MUN_UF: "AL",
                    MUN_COD: "2706307",
                },
                {
                    MUN_DESC: "PÃO DE AÇÚCAR",
                    MUN_UF: "AL",
                    MUN_COD: "2706406",
                },
                {
                    MUN_DESC: "PARICONHA",
                    MUN_UF: "AL",
                    MUN_COD: "2706422",
                },
                {
                    MUN_DESC: "PARIPUEIRA",
                    MUN_UF: "AL",
                    MUN_COD: "2706448",
                },
                {
                    MUN_DESC: "PASSO DE CAMARAGIBE",
                    MUN_UF: "AL",
                    MUN_COD: "2706505",
                },
                {
                    MUN_DESC: "PAULO JACINTO",
                    MUN_UF: "AL",
                    MUN_COD: "2706604",
                },
                {
                    MUN_DESC: "PENEDO",
                    MUN_UF: "AL",
                    MUN_COD: "2706703",
                },
                {
                    MUN_DESC: "PIAÇABUÇU",
                    MUN_UF: "AL",
                    MUN_COD: "2706802",
                },
                {
                    MUN_DESC: "PILAR",
                    MUN_UF: "AL",
                    MUN_COD: "2706901",
                },
                {
                    MUN_DESC: "PINDOBA",
                    MUN_UF: "AL",
                    MUN_COD: "2707008",
                },
                {
                    MUN_DESC: "PIRANHAS",
                    MUN_UF: "AL",
                    MUN_COD: "2707107",
                },
                {
                    MUN_DESC: "POÇO DAS TRINCHEIRAS",
                    MUN_UF: "AL",
                    MUN_COD: "2707206",
                },
                {
                    MUN_DESC: "PORTO CALVO",
                    MUN_UF: "AL",
                    MUN_COD: "2707305",
                },
                {
                    MUN_DESC: "PORTO DE PEDRAS",
                    MUN_UF: "AL",
                    MUN_COD: "2707404",
                },
                {
                    MUN_DESC: "PORTO REAL DO COLÉGIO",
                    MUN_UF: "AL",
                    MUN_COD: "2707503",
                },
                {
                    MUN_DESC: "QUEBRANGULO",
                    MUN_UF: "AL",
                    MUN_COD: "2707602",
                },
                {
                    MUN_DESC: "RIO LARGO",
                    MUN_UF: "AL",
                    MUN_COD: "2707701",
                },
                {
                    MUN_DESC: "ROTEIRO",
                    MUN_UF: "AL",
                    MUN_COD: "2707800",
                },
                {
                    MUN_DESC: "SANTA LUZIA DO NORTE",
                    MUN_UF: "AL",
                    MUN_COD: "2707909",
                },
                {
                    MUN_DESC: "SANTANA DO IPANEMA",
                    MUN_UF: "AL",
                    MUN_COD: "2708006",
                },
                {
                    MUN_DESC: "SANTANA DO MUNDAÚ",
                    MUN_UF: "AL",
                    MUN_COD: "2708105",
                },
                {
                    MUN_DESC: "SÃO BRÁS",
                    MUN_UF: "AL",
                    MUN_COD: "2708204",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DA LAJE",
                    MUN_UF: "AL",
                    MUN_COD: "2708303",
                },
                {
                    MUN_DESC: "SÃO JOSÉ DA TAPERA",
                    MUN_UF: "AL",
                    MUN_COD: "2708402",
                },
                {
                    MUN_DESC: "SÃO LUÍS DO QUITUNDE",
                    MUN_UF: "AL",
                    MUN_COD: "2708501",
                },
                {
                    MUN_DESC: "SÃO MIGUEL DOS CAMPOS",
                    MUN_UF: "AL",
                    MUN_COD: "2708600",
                },
                {
                    MUN_DESC: "SÃO MIGUEL DOS MILAGRES",
                    MUN_UF: "AL",
                    MUN_COD: "2708709",
                },
                {
                    MUN_DESC: "SÃO SEBASTIÃO",
                    MUN_UF: "AL",
                    MUN_COD: "2708808",
                },
                {
                    MUN_DESC: "SATUBA",
                    MUN_UF: "AL",
                    MUN_COD: "2708907",
                },
                {
                    MUN_DESC: "SENADOR RUI PALMEIRA",
                    MUN_UF: "AL",
                    MUN_COD: "2708956",
                },
                {
                    MUN_DESC: "TANQUE D'ARCA",
                    MUN_UF: "AL",
                    MUN_COD: "2709004",
                },
                {
                    MUN_DESC: "TAQUARANA",
                    MUN_UF: "AL",
                    MUN_COD: "2709103",
                },
                {
                    MUN_DESC: "TEOTÔNIO VILELA",
                    MUN_UF: "AL",
                    MUN_COD: "2709152",
                },
                {
                    MUN_DESC: "TRAIPU",
                    MUN_UF: "AL",
                    MUN_COD: "2709202",
                },
                {
                    MUN_DESC: "UNIÃO DOS PALMARES",
                    MUN_UF: "AL",
                    MUN_COD: "2709301",
                },
                {
                    MUN_DESC: "VIÇOSA",
                    MUN_UF: "AL",
                    MUN_COD: "2709400",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "AL" }, {});
    },
};