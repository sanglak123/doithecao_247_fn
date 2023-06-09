"use strict";

const Sequelize = require("sequelize");
const process = require("process");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const mysql2 = require("mysql2");
if (config.dialect === "mysql") {
  config.dialectModule = mysql2;
}

new Sequelize(config);

const db = {};

const Users = require("./users");
const BankOfUsers = require("./bankofusers");
const Banks = require("./banks");
const Cards = require("./cards");
const Prices = require("./prices");
const RefreshTokens = require("./refreshtokens");
const Values = require("./values");
const Imgs = require("./imgs");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.Users = Users(sequelize, Sequelize);
db.BankOfUsers = BankOfUsers(sequelize, Sequelize);
db.Banks = Banks(sequelize, Sequelize);
db.Cards = Cards(sequelize, Sequelize);
db.Prices = Prices(sequelize, Sequelize);
db.RefreshTokens = RefreshTokens(sequelize, Sequelize);
db.Values = Values(sequelize, Sequelize);
db.Imgs = Imgs(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
