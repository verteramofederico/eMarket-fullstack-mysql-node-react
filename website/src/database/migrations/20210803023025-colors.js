'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("Colors", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,     
          unique: true,    
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false, 
          unique: true,
        },
        value: {
          type: Sequelize.STRING,
          allowNull: false, 
          unique: true,
        }
      })
    } catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable("Colors")
    } catch (error) {
      throw error;
    }
  }
};
