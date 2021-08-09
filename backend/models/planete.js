'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Planete.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    titlePhoto: DataTypes.STRING,
    descriptifPhoto: DataTypes.STRING,
    content: DataTypes.STRING,
    range: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Planete',
  });
  return Planete;
};