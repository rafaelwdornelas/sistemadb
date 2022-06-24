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
          perm_name: "produtos_movimenta",
          perm_description: "Permite movimentação produtos",
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
        {
          perm_name: "funcionarios_criar",
          perm_description: "Permite criar novos funcionarios",
        },
        {
          perm_name: "funcionarios_apagar",
          perm_description: "Permite apagar funcionarios",
        },
        {
          perm_name: "funcionarios_alterar",
          perm_description: "Permite alterar funcionarios",
        },
        {
          perm_name: "funcionarios_visualizar",
          perm_description: "Permite visualizar funcionarios",
        },
        {
          perm_name: "usuarios_criar",
          perm_description: "Permite criar novos usuários",
        },
        {
          perm_name: "usuarios_apagar",
          perm_description: "Permite apagar usuários",
        },
        {
          perm_name: "usuarios_alterar",
          perm_description: "Permite alterar usuários",
        },
        {
          perm_name: "usuarios_visualizar",
          perm_description: "Permite visualizar usuários",
        },
        {
          perm_name: "pedidos_criar",
          perm_description: "Permite criar novos pedidos",
        },
        {
          perm_name: "pedidos_apagar",
          perm_description: "Permite apagar pedidos",
        },
        {
          perm_name: "pedidos_alterar",
          perm_description: "Permite alterar pedidos",
        },
        {
          perm_name: "pedidos_visualizar",
          perm_description: "Permite visualizar pedidos",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
