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
    static associate({ Favorite, Cart, Color, Pattern, Image }) {
      this.hasMany(Favorite, {foreignKey: 'design_id'});
      this.hasMany(Cart, {foreignKey: 'design_id'});
      this.belongsTo(Color, {foreignKey: 'color_id'});
      this.belongsTo(Pattern, {foreignKey: 'pattern_id'});
      this.belongsTo(Image, {foreignKey: 'image_id'});
    }
  }
  Design.init({
    color_id: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
    pattern_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Design',
  });
  return Design;
};
