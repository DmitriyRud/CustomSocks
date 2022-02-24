module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [{
      user_id: 1,
      design_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      design_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      design_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
