const fetchEmpollojobs = require("./fetchEmpolloJobs");  // Ensure correct filename and path

async function fetchAllJobs() {
    try {
        console.log("Fetching jobs from all sources...");  // Fixed typo

        await fetchEmpollojobs();  // Fetch jobs from Empollo

        console.log("Finished fetching jobs from all sources.");  // Fixed typo
    } catch (error) {
        console.error("Error fetching jobs:", error.message);  // Handle errors
    }
}

// Remove this line if this is a module meant to be imported elsewhere
// fetchAllJobs();  // Only use this for testing

module.exports = fetchAllJobs;  // Fixed typo: `module.exports` instead of `module.export`