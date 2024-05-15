'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author,{
        foreignKey : "authorId",
        as : "author_of_book"
      }),
      Book.hasMany(models.Borrowing,{
        foreignKey : "bookId",
        as : "borrowings_books"
      })
    }
  }
  Book.init({
    title: DataTypes.STRING,
    authorId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};