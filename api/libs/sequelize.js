const { Sequelize } = require("sequelize");
const setupModels = require("../models/index");

const sequelize = new Sequelize('hilitoapi', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

setupModels(sequelize);
sequelize.sync();

module.exports = {sequelize, models: sequelize.models};
