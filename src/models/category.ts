'use strict';
const {
  Model
} = require('sequelize');

export interface CategoryAttributes {
  CategoryName?: string;
  productId?: string;
}
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    CategoryName: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};