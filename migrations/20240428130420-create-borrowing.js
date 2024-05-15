'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Borrowings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateBorrowed: {
        type: Sequelize.DATEONLY
      },
      returned: {
        type: Sequelize.TINYINT(1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      studentId :{
        type : Sequelize.INTEGER,
        allowNull: false,
      },
      bookId : {
        type : Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Borrowings');
  }
};