const bcrypt = require("bcrypt")
const saltRounds = 10;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type : DataTypes.STRING,
      set(value) {
        const hash = bcrypt.hashSync(value , saltRounds)
        this.setDataValue('password', hash);
        
      }
    },
    role : {
      type : DataTypes.STRING,
      validate : {
        isIn : [['ADMIN', 'USER' , 'AGENT']]
      }
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};