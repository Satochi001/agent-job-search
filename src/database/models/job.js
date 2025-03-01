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
    title: { type: DataTypes.STRING, allowNull: false},
    company: {type: DataTypes.STRING, allowNull: false},
    location: {type: DataTypes.STRING, allowNull: false}, 
    link: {type: DataTypes.STRING, allowNull: false},
    companyWebsite: { type: DataTypes.STRING, allowNull: false},
    description: DataTypes.TEXT,
    salary: DataTypes.STRING,
    jobType: DataTypes.STRING,
    datePosted: DataTypes.DATE,
    applicationDeadline: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Job', 
    timestamps: true,  // adds a createAt & updateAt field
  });
  return Job;
};