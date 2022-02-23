'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Color, Image, Pattern }) {
      this.belongsToMany(Color, {
        through: 'Designs',
        key: 'color_id',
      });
      this.belongsToMany(Image, {
        through: 'Designs',
        key: 'image_id',
      });
      this.belongsToMany(Pattern, {
        through: 'Designs',
        key: 'pattern_id',
      });
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    design_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
