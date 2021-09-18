'use strict';

const colors = require('../../models/color')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('colors', colors.all(), {});   
    
    } catch (err) {
      throw err;
    }         
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('colors', null, {})
  }
};
