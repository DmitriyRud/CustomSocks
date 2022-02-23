'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Images', [{
      url: '/img/1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      url: '/img/2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Images', null, {});

  }
};
