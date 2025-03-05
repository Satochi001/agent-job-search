const { Sequelize } = require('sequelize');
require("dotenv").config();


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

// import our job model

const Job = require("./models/job"); 

// function to get lastest jobs
async function getLatestJobs(limit = 5) {
  return await Job.findAll({
    order: [[" createdAt", "DESC"]],
    limit: limit,
    attributes: ["title", "company", "link"],

  });
  
}

// Export Sequelize  intances  for app usaage
module.exports = { sequelize, Job, getLatestJobs};

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

