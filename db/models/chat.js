const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Chat.init({
    user_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};
