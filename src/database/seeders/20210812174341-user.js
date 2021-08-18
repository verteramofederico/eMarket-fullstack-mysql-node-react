'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        id: 1,
        name: 'John Doe',
        email: "verte@gmail.com",
        password: "$2a$10$GOzq3PqzqwaEgw.RBU2ly.oKy9wM4/XsTbD5XakPw6EW4QOElbNN6",
        domicilio: "la plata 123",
        interes: "construccion",
        suscripcion: false,
        image: "image-1626276005998.jpeg",
      },{
        id: 2,
        name: 'Administrador',
        email: "fede@gaf.com",
        password: "$2a$10$GOzq3PqzqwaEgw.RBU2ly.oKy9wM4/XsTbD5XakPw6EW4QOElbNN6",
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
