/* eslint-disable indent */
"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "MUNICIPIOS", [{
                    MUN_DESC: "ALTA FLORESTA D'OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100015",
                },
                {
                    MUN_DESC: "ALTO ALEGRE DOS PARECIS",
                    MUN_UF: "RO",
                    MUN_COD: "1100379",
                },
                {
                    MUN_DESC: "ALTO PARAÍSO",
                    MUN_UF: "RO",
                    MUN_COD: "1100403",
                },
                {
                    MUN_DESC: "ALVORADA D'OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100346",
                },
                {
                    MUN_DESC: "ARIQUEMES",
                    MUN_UF: "RO",
                    MUN_COD: "1100023",
                },
                {
                    MUN_DESC: "BURITIS",
                    MUN_UF: "RO",
                    MUN_COD: "1100452",
                },
                {
                    MUN_DESC: "CABIXI",
                    MUN_UF: "RO",
                    MUN_COD: "1100031",
                },
                {
                    MUN_DESC: "CACAULÂNDIA",
                    MUN_UF: "RO",
                    MUN_COD: "1100601",
                },
                {
                    MUN_DESC: "CACOAL",
                    MUN_UF: "RO",
                    MUN_COD: "1100049",
                },
                {
                    MUN_DESC: "CAMPO NOVO DE RONDÔNIA",
                    MUN_UF: "RO",
                    MUN_COD: "1100700",
                },
                {
                    MUN_DESC: "CANDEIAS DO JAMARI",
                    MUN_UF: "RO",
                    MUN_COD: "1100809",
                },
                {
                    MUN_DESC: "CASTANHEIRAS",
                    MUN_UF: "RO",
                    MUN_COD: "1100908",
                },
                {
                    MUN_DESC: "CEREJEIRAS",
                    MUN_UF: "RO",
                    MUN_COD: "1100056",
                },
                {
                    MUN_DESC: "CHUPINGUAIA",
                    MUN_UF: "RO",
                    MUN_COD: "1100924",
                },
                {
                    MUN_DESC: "COLORADO DO OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100064",
                },
                {
                    MUN_DESC: "CORUMBIARA",
                    MUN_UF: "RO",
                    MUN_COD: "1100072",
                },
                {
                    MUN_DESC: "COSTA MARQUES",
                    MUN_UF: "RO",
                    MUN_COD: "1100080",
                },
                {
                    MUN_DESC: "CUJUBIM",
                    MUN_UF: "RO",
                    MUN_COD: "1100940",
                },
                {
                    MUN_DESC: "ESPIGÃO D'OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100098",
                },
                {
                    MUN_DESC: "GOVERNADOR JORGE TEIXEIRA",
                    MUN_UF: "RO",
                    MUN_COD: "1101005",
                },
                {
                    MUN_DESC: "GUAJARÁ-MIRIM",
                    MUN_UF: "RO",
                    MUN_COD: "1100106",
                },
                {
                    MUN_DESC: "ITAPUÃ DO OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1101104",
                },
                {
                    MUN_DESC: "JARU",
                    MUN_UF: "RO",
                    MUN_COD: "1100114",
                },
                {
                    MUN_DESC: "JI-PARANÁ",
                    MUN_UF: "RO",
                    MUN_COD: "1100122",
                },
                {
                    MUN_DESC: "MACHADINHO D'OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100130",
                },
                {
                    MUN_DESC: "MINISTRO ANDREAZZA",
                    MUN_UF: "RO",
                    MUN_COD: "1101203",
                },
                {
                    MUN_DESC: "MIRANTE DA SERRA",
                    MUN_UF: "RO",
                    MUN_COD: "1101302",
                },
                {
                    MUN_DESC: "MONTE NEGRO",
                    MUN_UF: "RO",
                    MUN_COD: "1101401",
                },
                {
                    MUN_DESC: "NOVA BRASILÂNDIA D'OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100148",
                },
                {
                    MUN_DESC: "NOVA MAMORÉ",
                    MUN_UF: "RO",
                    MUN_COD: "1100338",
                },
                {
                    MUN_DESC: "NOVA UNIÃO",
                    MUN_UF: "RO",
                    MUN_COD: "1101435",
                },
                {
                    MUN_DESC: "NOVO HORIZONTE DO OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100502",
                },
                {
                    MUN_DESC: "OURO PRETO DO OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100155",
                },
                {
                    MUN_DESC: "PARECIS",
                    MUN_UF: "RO",
                    MUN_COD: "1101450",
                },
                {
                    MUN_DESC: "PIMENTA BUENO",
                    MUN_UF: "RO",
                    MUN_COD: "1100189",
                },
                {
                    MUN_DESC: "PIMENTEIRAS DO OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1101468",
                },
                {
                    MUN_DESC: "PORTO VELHO",
                    MUN_UF: "RO",
                    MUN_COD: "1100205",
                },
                {
                    MUN_DESC: "PRESIDENTE MÉDICI",
                    MUN_UF: "RO",
                    MUN_COD: "1100254",
                },
                {
                    MUN_DESC: "PRIMAVERA DE RONDÔNIA",
                    MUN_UF: "RO",
                    MUN_COD: "1101476",
                },
                {
                    MUN_DESC: "RIO CRESPO",
                    MUN_UF: "RO",
                    MUN_COD: "1100262",
                },
                {
                    MUN_DESC: "ROLIM DE MOURA",
                    MUN_UF: "RO",
                    MUN_COD: "1100288",
                },
                {
                    MUN_DESC: "SANTA LUZIA D'OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1100296",
                },
                {
                    MUN_DESC: "SÃO FELIPE D'OESTE",
                    MUN_UF: "RO",
                    MUN_COD: "1101484",
                },
                {
                    MUN_DESC: "SÃO FRANCISCO DO GUAPORÉ",
                    MUN_UF: "RO",
                    MUN_COD: "1101492",
                },
                {
                    MUN_DESC: "SÃO MIGUEL DO GUAPORÉ",
                    MUN_UF: "RO",
                    MUN_COD: "1100320",
                },
                {
                    MUN_DESC: "SERINGUEIRAS",
                    MUN_UF: "RO",
                    MUN_COD: "1101500",
                },
                {
                    MUN_DESC: "TEIXEIRÓPOLIS",
                    MUN_UF: "RO",
                    MUN_COD: "1101559",
                },
                {
                    MUN_DESC: "THEOBROMA",
                    MUN_UF: "RO",
                    MUN_COD: "1101609",
                },
                {
                    MUN_DESC: "URUPÁ",
                    MUN_UF: "RO",
                    MUN_COD: "1101708",
                },
                {
                    MUN_DESC: "VALE DO ANARI",
                    MUN_UF: "RO",
                    MUN_COD: "1101757",
                },
                {
                    MUN_DESC: "VALE DO PARAÍSO",
                    MUN_UF: "RO",
                    MUN_COD: "1101807",
                },
                {
                    MUN_DESC: "VILHENA",
                    MUN_UF: "RO",
                    MUN_COD: "1100304",
                },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("MUNICIPIOS", { MUN_UF: "RO" }, {});
    },
};