const fetchEmpollojobs = require("./fetchEmplloJobs");  // Ensure correct filename and path
const fetchRemotejobs = require("./fetchRemotejobs");

async function fetchAllJobs() {
    try {
        console.log("Fetching jobs from all sources...");

        const empolloJobs = await fetchEmpollojobs() || [];
        const remoteJobs = await fetchRemotejobs() || [];

        console.log("Empollo Jobs:", empolloJobs.length);  // ✅ Debugging
        console.log("Remote Jobs:", remoteJobs.length);    // ✅ Debugging

        console.log("Finished fetching jobs from all sources.");

        return [...empolloJobs, ...remoteJobs];  // ✅ Returns a proper array
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        return [];  // ✅ Always return an array
    }
}

module.exports = fetchAllJobs;
