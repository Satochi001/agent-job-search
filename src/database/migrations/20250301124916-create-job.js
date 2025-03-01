'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
  
      },
      description: {
        type: Sequelize.TEXT,
      },
      salary: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      companyWebsite: {
        type: Sequelize.STRING
      },
      job_type: {  
        type: Sequelize.STRING  
      },  
      date_posted: {  
        type: Sequelize.DATE  
      },  
      application_deadline: {  
        type: Sequelize.DATE  
      },  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  }
};