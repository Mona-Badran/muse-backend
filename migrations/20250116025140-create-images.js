export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
