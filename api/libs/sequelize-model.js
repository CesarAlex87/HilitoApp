module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  const caterory = sequelize.define("category", {
    name: {
      type: Sequelize.STRING,
    },
  });

  const posts = sequelize.define("posts", {
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
    },
  });

  return users, caterory, posts;
};
