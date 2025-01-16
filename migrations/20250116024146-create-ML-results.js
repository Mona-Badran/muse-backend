'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ML_results', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      style: {
        type: Sequelize.STRING,
      },
      common_artists: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ML_results');
  }
};
