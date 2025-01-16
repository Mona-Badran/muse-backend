export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sites', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    });

  },

  async down (queryInterface, Sequelize) {
    
  }
};
