'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Design.init({
    color_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
    pattern_id: DataTypes.INTEGER,
    favorite_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Design',
  });
  return Design;
};
