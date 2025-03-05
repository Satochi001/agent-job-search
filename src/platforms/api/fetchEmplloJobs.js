const axios = require("axios");
const Job = require("../../database/models/job");  // ✅ Correct path


const EMPOLLO_API_URL = "https://empollo.com/api/v1";

async function fetchEmpollojobs(){
    try {
        console.log("fetching jobs from Empollo...");

        const response = await axios.get(EMPOLLO_API_URL, {
            params: {
            limit : 50
        }});
            const jobs = response.data;

        if (!Array.isArray(jobs)) {  
            throw new Error("Invalid API response: Expected an array of jobs.");
        }
            
            const jobPromises = jobs.map((job) => Job.upsert({
                title: job.title,
                company: job.company,
                location: job.location || "Remote",
                link: job.application_link,
                companyWebsite: job.company_website || "N/A",
                description: job.description || "No description provided.",
                salary: job.salary || null,
                jobType: job.job_type || "Unknown",
                datePosted: job.pub_date ? new Date(job.pub_date) : new Date(),
                applicationDeadline: job.expiry_date ? new Date(job.expiry_date) : null,
            }));
            
            await Promise.all(jobPromises);  // ✅ Faster than sequential inserts
            console.log(`✅ Empollo: Successfully stored ${jobs.length} jobs.`);

       return jobs.length;
    } catch(error){
        console.error("Error fetching jobs from empollo ", error.message);
        return 
    }
}

module.exports = fetchEmpollojobs;  // Ensure this export is present
