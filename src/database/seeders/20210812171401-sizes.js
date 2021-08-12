'use strict';

const sizeModel = require('../../models/size')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('sizes', sizeModel.all(), {});   
    
    } catch (err) {
      throw err;
    }         
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sizes', null, {})
  }
};
