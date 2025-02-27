const { Sequelize } = require('sequelize');
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
module.exports = { sequelize };