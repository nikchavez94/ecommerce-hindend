const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    // * Id has: an interger dataType, false allowNull, true PrimaryKey, and true autoIncrement 
    id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      primaryKey: true,
      autoIncrement:this.truncate
    },
    //Category_name has: a string datatype, and false allowNull
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
