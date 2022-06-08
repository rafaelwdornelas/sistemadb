"use strict";

module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            "USUARIOS", [{
                USERNAME: "admin",
                SENHA: "admin",
                COD_FUNCIONARIO: 1,
            }, ], {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete("USUARIOS", null, {});
    },
};