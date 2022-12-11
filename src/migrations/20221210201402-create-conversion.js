'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conversions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Device: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.NUMBER
      },
      Sellerid: {
        type: Sequelize.STRING
      },
      ProductId: {
        type: Sequelize.STRING
      },
      ProductName: {
        type: Sequelize.STRING
      },
      ProductPrice: {
        type: Sequelize.NUMBER
      },
      Country: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Conversions');
  }
};