'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: "verte@gmail.com",
        password: "123456",
        domicilio: "la plata 123",
        interes: "construccion",
        suscripcion: false,
        image: "image-1626276005998.jpeg",
      },], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});

  }
};
