export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sites', {
      
    });

  },

  async down (queryInterface, Sequelize) {
    
  }
};
