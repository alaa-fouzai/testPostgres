'use strict';
const {
  Model
} = require('sequelize');
export interface ConversionAttributes {
  Name ?: string;
  Device?: string;
  Quantity?: number;
  Sellerid?: string;
  ProductId?: string;
  ProductName?: string;
  ProductPrice?: number;
  Country?: string;
  image?: string;
}
module.exports = (sequelize, DataTypes) => {
  class Conversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conversion.init({
    Name: DataTypes.STRING,
    Device: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    Sellerid: DataTypes.STRING,
    ProductId: DataTypes.STRING,
    ProductName: DataTypes.STRING,
    ProductPrice: DataTypes.INTEGER,
    image: DataTypes.STRING,
    Country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conversion',
  });
  return Conversion;
};