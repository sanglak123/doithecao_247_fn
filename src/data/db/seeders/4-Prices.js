"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Prices",
      [
        {
          idCard: 1,
          idValue: 1,
        },
        {
          idCard: 1,
          idValue: 2,
        },
        {
          idCard: 1,
          idValue: 3,
        },
        {
          idCard: 1,
          idValue: 4,
        },
        {
          idCard: 2,
          idValue: 1,
        },
        {
          idCard: 2,
          idValue: 2,
        },
        {
          idCard: 2,
          idValue: 3,
        },
        {
          idCard: 2,
          idValue: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Prices", null, {});
  },
};
