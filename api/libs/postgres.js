const { Pool } = require("pg");
const { configPostgres } = require("../config/config");

const pool = new Pool({
  host: configPostgres.dbHost,
  user: configPostgres.dbUser,
  password: configPostgres.dbPassword,
  port: configPostgres.port,
  database: configPostgres.dbName,
});

module.exports = { pool };
