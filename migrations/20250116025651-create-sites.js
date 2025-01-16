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
    });

  },

  async down (queryInterface, Sequelize) {
    
  }
};
