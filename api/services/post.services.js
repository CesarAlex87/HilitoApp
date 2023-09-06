const { pool } = require("../libs/postgres");
const { sequelize } = require("../libs/sequelize");
const {sers, caterory, posts} = require("../libs/sequelize-model");

const getPost = async (req, res) => {
  const [data, metadata] = await sequelize.query('SELECT * FROM posts');
  res.json({
    data
  }) ;
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const rta = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  res.json(rta.rows);
};

const createPost = async (req, res) => {

  const body = req.body;
  posts.create(body);

  res.json(rta);
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
