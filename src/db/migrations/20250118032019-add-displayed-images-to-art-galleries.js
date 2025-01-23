export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('art_galleries', 'displayed_images', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('art_galleries', 'displayed_images');
  }
};
