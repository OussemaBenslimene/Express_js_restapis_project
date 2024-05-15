'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   // Get the IDs of the authors inserted
   const authors = await queryInterface.sequelize.query('SELECT id FROM Authors');

   // Seed data for Books table
   queryInterface.bulkInsert('Books', [
     {
       title: 'Harry Potter and the Sorcerer\'s Stone',
       authorId: authors[0][0].id, // Assuming first author is J.K. Rowling
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       title: '1984',
       authorId: authors[0][1].id, // Assuming second author is George Orwell
       createdAt: new Date(),
       updatedAt: new Date()
     }
     // Add more books as needed
   ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  }
};
