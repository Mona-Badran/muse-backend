export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('art_galleries', {
      
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
