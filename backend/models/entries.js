'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      Entries.belongsTo(Users, {
        onDelete:'CASCADE',
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  }
  Entries.init({
    entry_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_private: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    feeling: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Entries',
    tableName: 'entries',
    timestamps: false
  });
  return Entries;
};