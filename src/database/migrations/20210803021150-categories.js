'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("Categories", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,         
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false, 
          unique: true,
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
      await queryInterface.dropTable("Categories")
    } catch (error) {
      throw error;
    }
  }
};
