const express = require("express");
const {
  getPost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../services/post.services");

const router = express.Router();

router.get("/", getPost);

router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
