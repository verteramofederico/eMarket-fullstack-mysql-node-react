'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("shoppingOrder", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,         
        },
        shoppingId: { 
          type: Sequelize.INTEGER,
          references: {
            model: "Shopping",
            key: "id"
          }
        },
        orderId: { 
          type: Sequelize.INTEGER,
          references: {
            model: "Orders",
            key: "id"
          }
        }
      })
    } catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable("shoppingOrder")
    } catch (error) {
      throw error;
    }
  }
};