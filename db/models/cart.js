'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, Design }) {
      this.belongsTo(User, {foreignKey: 'user_id'});
      this.belongsTo(Design, {foreignKey: 'design_id'});
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
