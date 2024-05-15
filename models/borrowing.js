'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Borrowing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Borrowing.belongsTo(models.Student ,{
        foreignKey : "studentId",
        as : "student_borrower"
      }),
      Borrowing.belongsTo(models.Book ,{
        foreignKey : "bookId",
        as : "book_borrowed"
      })
    }
  }
  Borrowing.init({
    studentId : DataTypes.INTEGER,
    bookId : DataTypes.INTEGER,
    dateBorrowed: DataTypes.DATEONLY,
    returned: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Borrowing',
  });
  return Borrowing;
};