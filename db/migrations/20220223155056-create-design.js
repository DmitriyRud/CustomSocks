module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Designs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      color_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Colors', onDelete: 'CASCADE' },
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Images', onDelete: 'CASCADE' },
      },
      pattern_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Patterns', onDelete: 'CASCADE' },
      },
      price: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Designs');
  },
};
