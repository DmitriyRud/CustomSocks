'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    design_id: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    full_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};