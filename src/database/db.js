const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false, // disable logging for cleaner output
  }
);

// Import and initialize Job model
const JobModel = require("./models/job"); 
const Job = JobModel(sequelize, Sequelize.DataTypes);  // ✅ Initialize model

// Function to get latest jobs
async function getLatestJobs(limit = 5) {
  return await Job.findAll({
    order: [["createdAt", "DESC"]],  // ✅ Fixed typo (removed space)
    limit: limit,
    attributes: ["title", "company", "link"],
  });
}

// Export Sequelize instances for app usage
module.exports = { sequelize, Job, getLatestJobs };

// Export config for Sequelize CLI
module.exports.development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
};

module.exports.test = module.exports.development;
module.exports.production = module.exports.development;
