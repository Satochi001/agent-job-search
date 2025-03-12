'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    title: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    salary: DataTypes.STRING,
    link: { type: DataTypes.STRING },
    companyWebsite: { type: DataTypes.STRING },
    jobType: {  
      type: DataTypes.STRING,  
      field: "job_type"  // ✅ Ensure it matches the migration
    },  
    datePosted: {  
      type: DataTypes.DATE,  
      field: "date_posted"  // ✅ Ensure it matches the migration
    },  
    applicationDeadline: {  
      type: DataTypes.DATE,  
      field: "application_deadline"  // ✅ Ensure it matches the migration
    },  
  }, {
    sequelize,
    modelName: 'Job', 
    timestamps: true,
  });
  
  return Job;
};