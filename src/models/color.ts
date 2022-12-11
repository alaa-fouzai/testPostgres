'use strict';

import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "sequelize/types/sequelize";

const {
  Model
} = require('sequelize');
export interface ColorAttributes {
  ColorName ?: string;
  ProductId ?: number;
}
// @ts-ignore
module.exports = (sequelize , DataTypes) => {
  class Color extends Model<ColorAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // @ts-ignore
    static associate(models) {
      // define association here
    }
  }
  Color.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    ColorName: DataTypes.STRING,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};