const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    post_body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, 15000]
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;