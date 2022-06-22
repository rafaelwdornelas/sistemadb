"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Permissions",
      [
        {
          perm_name: "produtos_criar",
          perm_description: "Permite criar novos produtos",
        },
        {
          perm_name: "produtos_apagar",
          perm_description: "Permite apagar produtos",
        },
        {
          perm_name: "produtos_alterar",
          perm_description: "Permite alterar produtos",
        },
        {
          perm_name: "produtos_visualizar",
          perm_description: "Permite visualizar produtos",
        },
        {
          perm_name: "clientes_criar",
          perm_description: "Permite criar novos clientes",
        },
        {
          perm_name: "clientes_apagar",
          perm_description: "Permite apagar clientes",
        },
        {
          perm_name: "clientes_alterar",
          perm_description: "Permite alterar clientes",
        },
        {
          perm_name: "clientes_visualizar",
          perm_description: "Permite visualizar clientes",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
