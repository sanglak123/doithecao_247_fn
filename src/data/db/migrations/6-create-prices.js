"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Prices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idCard: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cards",
          key: "id",
        },
      },
      idValue: {
        type: Sequelize.INTEGER,
        references: {
          model: "Values",
          key: "id",
        },
      },
      fees_change: {
        type: Sequelize.FLOAT,
        defaultValue: 30,
      },
      fees_buy: {
        type: Sequelize.FLOAT,
        defaultValue: 5,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Prices");
  },
};
