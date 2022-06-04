"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "UNIDADES", [
                { UN_CODIGO: "AR", UN_DESCRICAO: "ARROBA" },
                { UN_CODIGO: "BD", UN_DESCRICAO: "BALDE" },
                { UN_CODIGO: "CM", UN_DESCRICAO: "CENTIMETRO" },
                { UN_CODIGO: "CC", UN_DESCRICAO: "CENTIMETRO CUBICO" },
                { UN_CODIGO: "CX", UN_DESCRICAO: "CAIXA" },
                { UN_CODIGO: "DM", UN_DESCRICAO: "DECIMETRO" },
                { UN_CODIGO: "DZ", UN_DESCRICAO: "DUZIA" },
                { UN_CODIGO: "FL", UN_DESCRICAO: "FOLHAS" },
                { UN_CODIGO: "CT", UN_DESCRICAO: "CENTO" },
                { UN_CODIGO: "GL", UN_DESCRICAO: "GALAO" },
                { UN_CODIGO: "FT", UN_DESCRICAO: "PES" },
                { UN_CODIGO: "G ", UN_DESCRICAO: "GRAMA" },
                { UN_CODIGO: "GZ", UN_DESCRICAO: "GROZA" },
                { UN_CODIGO: "KG", UN_DESCRICAO: "QUILOGRAMA" },
                { UN_CODIGO: "KT", UN_DESCRICAO: "KIT" },
                { UN_CODIGO: "HR", UN_DESCRICAO: "HORA" },
                { UN_CODIGO: "L ", UN_DESCRICAO: "LITRO" },
                { UN_CODIGO: "LB", UN_DESCRICAO: "LIBRA" },
                { UN_CODIGO: "JG", UN_DESCRICAO: "JOGO" },
                { UN_CODIGO: "M3", UN_DESCRICAO: "METRO CUBICO" },
                { UN_CODIGO: "M2", UN_DESCRICAO: "METRO QUADRADO" },
                { UN_CODIGO: "LT", UN_DESCRICAO: "LATA" },
                { UN_CODIGO: "MT", UN_DESCRICAO: "METRO" },
                { UN_CODIGO: "MM", UN_DESCRICAO: "MILIMETRO" },
                { UN_CODIGO: "P ", UN_DESCRICAO: "PAR" },
                { UN_CODIGO: "ML", UN_DESCRICAO: "MILILITRO" },
                { UN_CODIGO: "OZ", UN_DESCRICAO: "ONCA" },
                { UN_CODIGO: "TL", UN_DESCRICAO: "TONELADA LIQUIDA" },
                { UN_CODIGO: "PC", UN_DESCRICAO: "PECA" },
                { UN_CODIGO: "PL", UN_DESCRICAO: "POLEGADAS" },
                { UN_CODIGO: "YD", UN_DESCRICAO: "JARDA" },
                { UN_CODIGO: "UN", UN_DESCRICAO: "UNIDADE" },
            ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("UNIDADES", null, {});
    },
};