'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Borrowing,{
        foreignKey : "studentId",
        as : "borrowings_students"
      })
    }
  }
  Student.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};