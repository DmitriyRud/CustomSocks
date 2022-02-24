'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Designs', [{
      color_id: 1,
      image_id: 1,
      pattern_id: 1,
      price: 10.25,
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      color_id: 2,
      image_id: 1,
      pattern_id: 1,
      price: 10.25,
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      color_id: 1,
      image_id: 2,
      pattern_id: 1,
      price: 10.25,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Designs', null, {});

  }
};

