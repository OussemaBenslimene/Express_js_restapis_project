'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Authors', [
      {
        firstname: 'William',
        lastname: 'Shakespeare',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Jane',
        lastname: 'Austen',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more seed data as needed
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Authors', null, {});
  }
};
