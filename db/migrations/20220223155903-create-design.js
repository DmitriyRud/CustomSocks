'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Designs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Colors', key: 'id'}
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Images', key: 'id'}
      },
      pattern_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Patterns', key: 'id'}
      },
      favorite_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Favorites', key: 'id'}
      },
      price: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Designs');
  }
};
