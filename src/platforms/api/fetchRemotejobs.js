const axios = require("axios");
const { Job } = require("../../database/models");  // ✅ Ensure correct import

const REMOTE_API_URL = "http://remotive.io/api/remote-jobs";

async function fetchRemotejobs() {
    try {
        console.log("Fetching jobs from remote-jobs...");

        const response = await axios.get(REMOTE_API_URL, {
            params: { limit: 50 },
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "application/json"
            }
        });

        // Debugging: Check if jobs exist
        if (!response.data || !Array.isArray(response.data.jobs)) {
            console.error("❌ Invalid API response: Expected an array of jobs.", response.data);
            return [];
        }

        const jobs = response.data.jobs.map(job => ({
            title: job.title || "Unknown Title",
            company: job.company_name || "Unknown Company",
            location: job.candidate_required_location || "Remote",
            link: job.url || "N/A",
            companyWebsite: job.company_logo || "N/A",
            description: job.description || "No description provided.",
            salary: job.salary || null,
            jobType: job.job_type || "Unknown",
            datePosted: job.publication_date ? new Date(job.publication_date) : new Date(),
            applicationDeadline: job.expiry_date ? new Date(job.expiry_date) : null,
        }));

        if (!Job.bulkCreate) {
            console.error("❌ Job.bulkCreate is not a function. Ensure Job is a Sequelize model.");
            return [];
        }

        // ✅ Use bulkCreate if Job is valid
        await Job.bulkCreate(jobs, {
            updateOnDuplicate: ["title", "company", "location", "link", "companyWebsite", "description", "salary", "jobType", "datePosted", "applicationDeadline"]
        });

        console.log(`✅ Remote-job: Successfully stored ${jobs.length} jobs.`);
        return jobs.length;

    } catch (error) {
        console.error("❌ Error fetching jobs from remote-jobs:", error.message);
        return [];
    }
}

module.exports = fetchRemotejobs;
