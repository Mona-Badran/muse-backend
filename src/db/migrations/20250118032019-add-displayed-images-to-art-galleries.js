export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('art_galleries', 'displayed_images', {
      
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
