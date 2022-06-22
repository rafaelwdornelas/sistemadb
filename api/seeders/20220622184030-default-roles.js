"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          role_name: "admin",
          role_description: "Usuário Administrativo",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
