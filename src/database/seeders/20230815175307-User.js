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
        is_active:true,
        role_id:2,
        birth_day:new Date('1990-01-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Fiacre',
        lastname:'Kirenga',
        email:'fkirengae@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-02-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'John',
        lastname:'Joe',
        email:'joe@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-04-13'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Willy',
        lastname:'Kirenga',
        email:'wkirenga@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-01-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Steve',
        lastname:'Manzi',
        email:'smanzi@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-10-05'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Alice',
        lastname:'Nema',
        email:'anema@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-05-10'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Jane',
        lastname:'Kundwa',
        email:'jkundwa@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-01-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Anitha',
        lastname:'Uwera',
        email:'auwera@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-06-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Boris',
        lastname:'Hirwa',
        email:'fkirengae@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-09-02'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Aristide',
        lastname:'Uwineza',
        email:'auwineza@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-10-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Anne',
        lastname:'Mahoro',
        email:'amahoro@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-04-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'fifi',
        lastname:'Cyiza',
        email:'fcyiza@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-05-15'),
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
        email:'nmuhire@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-09-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Diane',
        lastname:'Marie',
        email:'dmarie@boarwanda.com',
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
        birth_day:new Date('1990-09-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Joseph',
        lastname:'Ntwali',
        email:'jntwali@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-12-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Gaella',
        lastname:'Kirenga',
        email:'gkirenga@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-12-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Joe',
        lastname:'Kubana',
        email:'jkubana@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-11-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Patrick',
        lastname:'Kabano',
        email:'pkabano@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-03-15'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname:'Olivier',
        lastname:'Tuyishime',
        email:'otuyishime@boarwanda.com',
        is_active:true,
        role_id:1,
        birth_day:new Date('1990-06-15'),
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