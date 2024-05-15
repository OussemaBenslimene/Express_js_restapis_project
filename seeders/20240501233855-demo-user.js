'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'Admin'
      },
      {
        firstname: 'Jane',
        lastname: 'Smith',
        email: 'jane.smith@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'User'
      },
      // Add more sample users here if needed
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
