'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      paymentId: { 
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "paymentMethods",
          key: "id",
          allowNull: true,
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};