'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CartProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.BIGINT(10).UNSIGNED,
        allowNull: true
      },
      subtotal: {
        type: Sequelize.BIGINT(10).UNSIGNED,
        allowNull: true
      },
      productId: { 
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id"
        }
      },
      cartId: { 
        type: Sequelize.INTEGER,
        references: {
          model: "Carts",
          key: "id"
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CartProducts');
  }
};