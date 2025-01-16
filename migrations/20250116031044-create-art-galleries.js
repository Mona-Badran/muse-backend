export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('art_galleries', {
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
      images: {
        type: Sequelize.TEXT,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
