export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('art_galleries', {
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
