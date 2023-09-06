const { Pool } = require("pg");
const config = require("../config/config");

const pool = new Pool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  port: config.port,
  database: config.dbName,
});

module.exports = { pool };
