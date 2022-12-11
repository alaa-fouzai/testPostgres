'use strict';
const {
  Model
} = require('sequelize');
export interface InfluencerInput {
    email?: string;
    name?: string;
    password?: string;
    device?: string;
  }
module.exports = (sequelize, DataTypes) => {
  class Influencer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Influencer.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    device: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Influencer',
  });
  return Influencer;
};