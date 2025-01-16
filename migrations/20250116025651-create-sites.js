export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sites', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    
  }
};
