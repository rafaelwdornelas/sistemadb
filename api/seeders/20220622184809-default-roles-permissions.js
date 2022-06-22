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
        {
          role_id: 1,
          perm_id: 9,
        },
        {
          role_id: 1,
          perm_id: 10,
        },
        {
          role_id: 1,
          perm_id: 11,
        },
        {
          role_id: 1,
          perm_id: 12,
        },
        {
          role_id: 1,
          perm_id: 13,
        },
        {
          role_id: 1,
          perm_id: 14,
        },
        {
          role_id: 1,
          perm_id: 15,
        },
        {
          role_id: 1,
          perm_id: 16,
        },
        {
          role_id: 1,
          perm_id: 17,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Rolepermissions", null, {});
  },
};
