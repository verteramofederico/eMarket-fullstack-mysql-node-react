'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("colorsProducts", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,         
        },
        productId: { 
          type: Sequelize.INTEGER,
          references: {
            model: "Products",
            key: "id"
          }
        },
        colorsId: { 
          type: Sequelize.INTEGER,
          references: {
            model: "Colors",
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
      await queryInterface.dropTable("colorsProducts")
    } catch (error) {
      throw error;
    }
  }
};
