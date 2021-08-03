'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable("Products", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,         
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false, 
          unique: true,
        },
        brandId: { 
          type: Sequelize.INTEGER,
          allowNull: false, 
          references: {
            model: "Brands",
            key: "id"
          }
        },
        categoriesId: { 
          type: Sequelize.INTEGER,
          allowNull: false, 
          references: {
            model: "Categories",
            key: "id"
          }
        },        
        description: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        image: {
            type: Sequelize.STRING(100),
            allowNull: false
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
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false, 
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false, 
          defaultValue: Sequelize.NOW
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
