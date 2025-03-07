module.exports = {
  async up(queryInterface, Sequelize) {
    const jobs = await queryInterface.sequelize.query(
      `SELECT COUNT(*) FROM "Jobs";`,
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const jobCount = parseInt(jobs[0].count, 10); // Convert to number

    if (jobCount > 0) {
      console.log("🟡 Jobs table is not empty. Seeder will not insert dummy data.");
      return;
    }

    await queryInterface.bulkInsert("Jobs", [
      {
        title: "Software Engineer",
        company: "TechCorp",
        location: "Remote",
        link: "https://example.com/job1",
        companyWebsite: "https://techcorp.com",
        description: "A great job opportunity.",
        salary: "100000",
        job_type: "Full-time",
        date_posted: new Date(),
        application_deadline: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Data Scientist",
        company: "AI Solutions",
        location: "New York, NY",
        link: "https://example.com/job2",
        companyWebsite: "https://aisolutions.com",
        description: "Looking for a skilled data scientist.",
        salary: "120000",
        job_type: "Contract",
        date_posted: new Date(),
        application_deadline: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    console.log("✅ Dummy jobs inserted.");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jobs", null, {});
    console.log("❌ Dummy jobs removed.");
  },
};
