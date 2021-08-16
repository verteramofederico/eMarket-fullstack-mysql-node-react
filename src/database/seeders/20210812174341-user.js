'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        id: 1,
        name: 'John Doe',
        email: "verte@gmail.com",
        password: "kdfsjfjid",
        domicilio: "la plata 123",
        interes: "construccion",
        suscripcion: false,
        image: "image-1626276005998.jpeg",
      },{
        id: 2,
        name: 'Administrador',
        email: "fede@gaf.com",
        password: "1234",
        domicilio: "la plata 123",
        interes: "construccion",
        suscripcion: false,
        image: "image-1626276005998.jpeg",
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});

  }
};
