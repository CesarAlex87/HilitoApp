const config = require("../config/config");
const { Sequelize } = require("sequelize");
// const URL = `postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.port}/${config.dbName}`;


const sequelize = new Sequelize('hilitoapi', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { sequelize };
