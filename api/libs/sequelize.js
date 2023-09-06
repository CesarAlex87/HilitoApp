const config = require("../config/config");
const { Sequelize } = require("sequelize");

// const URL = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.port}/${config.dbName}`;

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./sequelize-model")(sequelize, Sequelize);

module.exports = db;
