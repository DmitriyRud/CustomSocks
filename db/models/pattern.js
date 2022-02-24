const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Favorite, Design }) {
      this.hasMany(Design, { foreignKey: 'pattern_id' });
    }
  }
  Pattern.init({
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};
