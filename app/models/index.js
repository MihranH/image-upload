const Sequelize  = require('sequelize');
const fs = require('fs');
const path = require('path');
const { CLEARDB_DATABASE_URL } = require('../config');
const sequelize = new Sequelize(CLEARDB_DATABASE_URL);
const basename = path.basename(__filename);

const db = {};

let modules = [
    require('./images.js'),
    require('./logs.js'),
];

  // Initialize models
  modules.forEach((module) => {
    const model = module(sequelize, Sequelize);
    db[model.name] = model;
  });

  // Apply associations
  Object.keys(db).forEach((key) => {
    if ('associate' in db[key]) {
        db[key].associate(db);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;