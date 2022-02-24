module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [{
      url: '/img/pattern/1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      url: '/img/pattern/2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Patterns', null, {});
  },
};
