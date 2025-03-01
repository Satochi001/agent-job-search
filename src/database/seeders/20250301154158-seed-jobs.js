'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Jobs', [
        {
          title: 'Software Engineer',
          company: 'TechCorp',
          location: 'Remote',
          link: 'https://example.com/job1',
          companyWebsite: 'https://techcorp.com',
          description: 'A great job opportunity.',
          salary: '100000',
          job_type: 'Full-time',
          date_posted: new Date(),
          application_deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        title: 'Data Scientist',
        company: 'AI Solutions',
        location: 'New York, NY',
        link: 'https://example.com/job2',
        companyWebsite: 'https://aisolutions.com',
        description: 'Looking for a skilled data scientist.',
        salary: '120000',
        job_type: 'Contract',
        date_posted: new Date(),
        application_deadline: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ]);
},

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Jobs', null, {});
    
  }
};
