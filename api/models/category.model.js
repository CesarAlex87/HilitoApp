const { DataTypes, Model } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
}


class Category extends Model {
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'categories',
      timestamps: false,
    }
  }
}

module.exports = {CATEGORY_TABLE, CategorySchema, Category}
