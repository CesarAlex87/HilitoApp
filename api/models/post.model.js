// const { DataTypes, Model } = require('sequelize');

// const POST_TABLE = 'posts';

// const PostSchema = {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   content: {
//     type: DataTypes.STRING,
//   },
//   idAuthor: {
//     type: DataTypes.INTEGER,
//   },
//   idCategory: {
//     type: DataTypes.INTEGER,
//   },
//   author_name: {
//     type: DataTypes.STRING,
//   },
//   category_name: {
//     type: DataTypes.STRING,
//   }
// }

// class Post extends Model {
//   static associate(){

//   }
//   static config(sequelize){
//     return {
//       sequelize,
//       tableName: POST_TABLE,
//       modelName: 'posts',
//       timestamps: false,
//     }
//   }
// }

// module.exports = {POST_TABLE, PostSchema, Post }

const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
  constructor(sequelize) {
    super(sequelize, {
      // Nombre de la tabla en la base de datos
      name: "posts",
      // Columnas de la tabla
      columns: {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: Sequelize.STRING,
        },
        idAuthor: {
          type: Sequelize.INTEGER,
        },
        idCategory: {
          type: Sequelize.INTEGER,
        },
        author_name: {
          type: Sequelize.STRING,
        },
        category_name: {
          type: Sequelize.STRING,
        }
      },
    });
  }
}

module.exports = Post;
