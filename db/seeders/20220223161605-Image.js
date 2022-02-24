'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Images', [{
      url: '/img/img_1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      url: '/img/img_2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      url: '/img/img_3.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      url: '/img/img_4.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      url: '/img/img_5.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Images', null, {});

  }
};
