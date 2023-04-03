"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cards",
      [
        {
          telco: "VIETTEL",
          type: "Phone",
        },
        {
          telco: "VINAPHONE",
          type: "Phone",
        },
        {
          telco: "MOBIFONE",
          type: "Phone",
        },
        {
          telco: "VNMOBI",
          type: "Phone",
        },
        {
          telco: "ZING",
          type: "Game",
        },
        {
          telco: "GARENA",
          type: "Game",
        },
        {
          telco: "GATE",
          type: "Game",
        },
        {
          telco: "VCOIN",
          type: "Game",
        },
        {
          telco: "APPOTA",
          type: "Game",
        },
        {
          telco: "ANPAY",
          type: "Game",
        },
        {
          telco: "AVG",
          type: "Game",
        },
        {
          telco: "BITVN",
          type: "Game",
        },
        {
          telco: "CAROT",
          type: "Game",
        },
        {
          telco: "FUNCARD",
          type: "Game",
        },
        {
          telco: "GMOBILE",
          type: "Game",
        },
        {
          telco: "GOSU",
          type: "Game",
        },
        {
          telco: "KASPERKY",
          type: "Game",
        },
        {
          telco: "KCONG",
          type: "Game",
        },
        {
          telco: "KUL",
          type: "Game",
        },
        {
          telco: "ONCASH",
          type: "Game",
        },
        {
          telco: "SCOIN",
          type: "Game",
        },
        {
          telco: "SOHACOIN",
          type: "Game",
        },
        {
          telco: "VEGA",
          type: "Game",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
