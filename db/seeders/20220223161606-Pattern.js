module.exports = {
<<<<<<< HEAD
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [{
      url: '/img/pattern/1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      url: '/img/pattern/2.png',
=======
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Patterns', [{
      url: '/img/pattern_1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      url: '/img/pattern_2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      url: '/img/pattern_3.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      url: '/img/pattern_4.png',
      createdAt: new Date(),
      updatedAt: new Date(),
     }, {
      url: '/img/pattern_5.png',
>>>>>>> origin
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patterns', null, {});
  },
};
