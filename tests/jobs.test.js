const { sequelize } = require('../src/database/db');  // Ensure correct relative path
const { Job } = require('../src/database/models');   // Ensure correct relative path

describe('Job Model Tests', () => {
  beforeAll(async () => {
    await sequelize.authenticate();  // Ensure DB connection
  });

  afterAll(async () => {
    await sequelize.close();  // Close connection after tests
  });

  test('should fetch all jobs from database', async () => {
    const jobs = await Job.findAll({
        attributes: [
          "id", "title", "company", "location", "link", 
          "companyWebsite", "description", "salary", "job_type", 
          "date_posted", "application_deadline", "createdAt", "updatedAt"
        ]
      });
          console.log(jobs.map(job => job.toJSON()));  // Convert to readable format

    expect(Array.isArray(jobs)).toBe(true);  // Ensure it's an array
  });
});
