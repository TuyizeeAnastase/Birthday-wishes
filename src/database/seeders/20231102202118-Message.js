'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Messages", [
       {
        "title":"birthday",
        "text":"We wish you a fantastic birthday and a year filled with joy and success!",
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        "title":"xmas",
        "text":"We wish you a fantastic xmas and a year filled with joy and success!",
        createdAt: new Date(),
        updatedAt: new Date(),
       }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
