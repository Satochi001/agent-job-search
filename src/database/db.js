const { Sequelize, Model } = require('sequelize');
require('dotenv').config();

const sequelize  = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {

            host : process.env.HOST,
            port :  process.env.PORT,
            dialect: 'postgres',
            logging: false,  // this disable logging for cleaner input.

            }
);

// Export Sequelize  intances  for app usaage
module.exports = { sequelize };

// Export config for Sequelize CLI
module.exports.development= {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',

}

module.exports.test = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',

}

module.exports.production = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',

}

