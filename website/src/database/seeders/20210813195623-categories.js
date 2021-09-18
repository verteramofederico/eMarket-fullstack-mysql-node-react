'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Categories', [{
        id: 1,
        name: 'Ropa de trabajo',
      },{
        id: 2,
        name: 'Calzado',
      },{
        id: 3,
        name: "Seguridad"
      },{
        id: 4,
        name: "Otros"
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Categories', null, {});

  }
};