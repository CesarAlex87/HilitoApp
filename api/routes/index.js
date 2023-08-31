const express = require("express");
const postRouter = require("./posts.router");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/posts", postRouter);
}

module.exports = routerApi;
