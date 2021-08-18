'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("Products", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: true,
          autoIncrement: true, 
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true, 
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: true, 
        },
        brandId: { 
          type: Sequelize.INTEGER,
          allowNull: true, 
          references: {
            model: "Brands",
            key: "id"
          }
        },
        categoriesId: { 
          type: Sequelize.INTEGER,
          allowNull: true, 
          references: {
            model: "Categories",
            key: "id"
          }
        },        
        description: {
            type: Sequelize.STRING(200),
            allowNull: true
        },
        image: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        offer: {
            type: Sequelize.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        outstanding: {
            type: Sequelize.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        discount: {
            type: Sequelize.BIGINT(10).UNSIGNED,
            allowNull: true
        }
      })

    } catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable("Products")
    } catch (error) {
      throw error;
    }
  }
};
