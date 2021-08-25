'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      domicilio: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      interes: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      suscripcion: {
        type: Sequelize.BOOLEAN,
        allowNull: true 
      },
      image: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};