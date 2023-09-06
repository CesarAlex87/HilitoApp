const { pool } = require("../libs/postgres");
const { sequelize } = require("../libs/sequelize");
const { QueryTypes } = require("sequelize");

const getPost = async (req, res) => {
  const [data] = await sequelize.query("SELECT * FROM posts", {
    type: QueryTypes.SELECT,
  });
  return data;
};
const getPostById = async (req, res) => {
  const { id } = req.params;
  const rta = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  res.json(rta.rows);
};
const createPost = async (req, res) => {
  const { content, idAthor, idCategory, date } = req.body;
  const rta = await pool.query(
    "INSERT INTO posts (title, body, user_id) VALUES ($1, $2, $3)",
    [title, body, user_id]
  );
  res.json({
    message: "Post created successfully",
    body: {
      user: { title, body, user_id },
    },
  });
};
const updatePost = async (req, res) => {};
const deletePost = async (req, res) => {};

module.exports = {
  getPost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
