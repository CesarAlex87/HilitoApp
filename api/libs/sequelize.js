const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('hilitoapi', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { sequelize };
