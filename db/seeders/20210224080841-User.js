module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Vasiliy Terkin',
      email: 'terkin@mail.ru',
      password: '123',
      phone: 999,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Holly Valentine',
      email: 'holli@mail.ru',
      password: '123',
      phone: 777,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
