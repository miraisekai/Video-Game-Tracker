const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


// Original model name was "User"
class GameData extends Model {
}

GameData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

   userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
  },
    summary: {
      type: DataTypes.STRING,
      allowNull: true
  },
    hints: {
      type: DataTypes.STRING,
      allowNull: true
  }
  },
  {
    hooks: {
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'custom',
  },
);

module.exports = GameData;
