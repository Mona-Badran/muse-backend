export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
