'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Students', [
      {
        firstname: 'John',
        lastname: 'Doe',
        class: 'Math',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Jane',
        lastname: 'Smith',
        class: 'History',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more seed data as needed
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Students', null, {});
  }
};
