'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("sizesProducts", {
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
        sizesId: { 
          type: Sequelize.INTEGER,
          references: {
            model: "Sizes",
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
      await queryInterface.dropTable("sizesProducts")
    } catch (error) {
      throw error;
    }
  }
};
