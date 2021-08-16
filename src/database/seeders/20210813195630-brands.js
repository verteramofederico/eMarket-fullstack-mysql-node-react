'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Brands', [{
        id: 1,
        name: 'Pampero',
      },{
        id: 2,
        name: 'Ombu',
      },{
        id: 3,
        name: "Gaucho"
      },{
        id: 4,
        name: "Fontana"
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Brands', null, {});

  }
};