/* 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Products', [
        {
        id: 1,
        name: 'Guante',
        price: 1100,
        brandId: 1,
        categoriesId: 2,
        description: "lorem ijasdjisadjiij adsjisij",
        image: "134533008-Guante-Terrycloth-Industrial-Moteado-Pesado-300x300.jpeg",
        offer: false,
        outstanding: true,
        discount: 21,
      },
      {
        id: 2,
        name: 'Guante',
        price: 1100,
        brandId: 1,
        categoriesId: 2,
        description: "lorem ijasdjisadjiij adsjisij",
        image: "134533008-Guante-Terrycloth-Industrial-Moteado-Pesado-300x300.jpeg",
        offer: false,
        outstanding: true,
        discount: 21,
      },
      {
        id: 3,
        name: "Zapato de seguridad",
        price: 5200,
        brandId: 1,
        categoriesId: 2,
        description: "Zapato de seguridad",
        image: "calzado-P41FM-300x300.jpeg",
        offer: false,
        outstanding: true,
        discount: 12,
      },
      {
        id: 4,
        name: "Chaleco",
        price: 1200,
        brandId: 1,
        categoriesId: 2,
        description: "Zapato de seguridad",
        image: "chaleco-canvas_05A9263.jpeg",
        offer: true,
        outstanding: false,
        discount: 5,
      },
      {
        id: 5,
        name: "Traje de lluvia",
        price: 2300,
        brandId: 3,
        categoriesId: 3,
        description: "Traje de lluvia",
        image: "111121003-Traje-de-Lluvia-.campera.-300x300.jpg",
        offer: false,
        outstanding: true,
        discount: 15,
      },
      {
        id: 6,
        name: "Traje de lluvia",
        price: 2300,
        brandId: 3,
        categoriesId: 3,
        description: "Traje de lluvia",
        image: "111121003-Traje-de-Lluvia-.campera.-300x300.jpg",
        offer: false,
        outstanding: true,
        discount: 15,
      },{
        id: 7,
        name: "Bermuda cargo",
        price: 3300,
        brandId: 3,
        categoriesId: 3,
        description: "Bermuda cargo",
        image: "bermuda-cargo_05A9366-300x300.jpeg",
        offer: true,
        outstanding: false,
        discount: 10,
      },{
        id: 8,
        name: "Bota de lluvia",
        price: 1999,
        brandId: 4,
        categoriesId: 4,
        description: "Bermuda cargo",
        image: "bota-Jobmaster-nueva-300x300.jpeg",
        offer: true,
        outstanding: false,
        discount: 14,
      },{
        id: 9,
        name: "Camisa de trabajo",
        price: 2499,
        brandId: 4,
        categoriesId: 4,
        description: "Camisa",
        image: "camisa-de-trabajo_05A8787-300x300.jpeg",
        offer: true,
        outstanding: false,
        discount: 14,
      } 
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Products', null, {});

  }
};
 */