const { User, UserSchema } = require("./users.model");
const { Post, PostSchema } = require("./post.model");
const  { Category, CategorySchema } = require("./category.model");

function setupModels(sequelize) {
  // User.init(UserSchema, User.config(sequelize));
  // Post.init(PostSchema, Post.config(sequelize));
  // Category.init(CategorySchema, Category.config(sequelize));
  // User.associate();
  // Post.associate();
  // Category.associate();
}

module.exports = setupModels;