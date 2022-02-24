'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Colors', [{
      color: '#FFFFFF',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      color: '#000000',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      color: '#0000FF',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      color: '#008000',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      color: '#FFD700',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      color: '#FCA099',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Colors', null, {});

  }
};

