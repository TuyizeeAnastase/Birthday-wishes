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
    await queryInterface.bulkInsert("Users", [
      {
        firstname:'Anastase',
        lastname:'Tuyizere',
        email:'atuyizere@boarwanda.com',
        password:'Pass123!!!',
        is_active:true,
        role_id:2,
        birth_day:new Date('1990-10-17'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Fiacre',
        lastname:'Kirenga',
        email:'fkirengae@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-10-17'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Thiery',
        lastname:'Ngoy',
        email:'tngoy@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-11-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Sabrina',
        lastname:'Mukamihigo',
        email:'smukamihigo@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-06-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Faruku',
        lastname:'Habamugisha',
        email:'fhabumugusha@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-07-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'jean Paul',
        lastname:'Muhire',
        email:'jmuhire@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-07-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Norbert',
        lastname:'Mukunzi',
        email:'nmukunzi@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-09-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Diane',
        lastname:'Marie',
        email:'dngoga@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-04-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Jean De Dieu',
        lastname:'Mukunzi',
        email:'jmukunzi@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-11-17'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  }
};
