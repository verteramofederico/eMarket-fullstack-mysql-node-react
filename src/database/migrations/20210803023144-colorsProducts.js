'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("colorsProducts", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
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
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false, 
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false, 
          defaultValue: Sequelize.NOW
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
