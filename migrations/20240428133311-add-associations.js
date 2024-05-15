'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   queryInterface.addConstraint('Books',{
    fields : ['authorId'],
    type : 'foreign key',
    name : 'author_book_association',
    references : {
      table : 'Authors',
      field : 'id'
    }
   }),
   queryInterface.addConstraint('Borrowings',{
    fields : ['studentId'],
    type : 'foreign key',
    name : 'student_borrowing_association',
    references : {
      table : 'Students',
      field : 'id'
    }
   }),
   queryInterface.addConstraint('Borrowings',{
    fields : ['bookId'],
    type : 'foreign key',
    name : 'borrowing_book_association',
    references : {
      table : 'Books',
      field : 'id'
    }
   })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Books',{
      fields : ['authorId'],
      type : 'foreign key',
      name : 'author_book_association',
      references : {
        table : 'Authors',
        field : 'id'
      }
     }),
     queryInterface.removeConstraint('Borrowings',{
      fields : ['studentId'],
      type : 'foreign key',
      name : 'student_borrowing_association',
      references : {
        table : 'Students',
        field : 'id'
      }
     }),
     queryInterface.removeConstraint('Borrowings',{
      fields : ['bookId'],
      type : 'foreign key',
      name : 'borrowing_book_association',
      references : {
        table : 'Books',
        field : 'id'
      }
     })
  }
};
