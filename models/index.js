const { Sequelize } = require('sequelize');
const config = require('../config/config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  logging: config.logging
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Vehicle = require('./vehicle')(sequelize, Sequelize);

module.exports = db; 