"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Rolepermissions",
      [
        {
          role_id: 1,
          perm_id: 1,
        },
        {
          role_id: 1,
          perm_id: 2,
        },
        {
          role_id: 1,
          perm_id: 3,
        },
        {
          role_id: 1,
          perm_id: 4,
        },
        {
          role_id: 1,
          perm_id: 5,
        },
        {
          role_id: 1,
          perm_id: 6,
        },
        {
          role_id: 1,
          perm_id: 7,
        },
        {
          role_id: 1,
          perm_id: 8,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Rolepermissions", null, {});
  },
};
