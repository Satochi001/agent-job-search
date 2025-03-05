const axios = require("axios");
const fetchEmplloJobs = require("../src/platforms/api/fetchEmplloJobs");

// Mock the entire axios module
jest.mock("axios");

jest.mock("../src/database/models/job", () => ({
    upsert: jest.fn(),
}));

const Job = require("../src/database/models/job");

describe("fetchEmplloJobs", () => {
    beforeEach(() => {
        jest.clearAllMocks();  // Reset mocks before each test
    });

    it("should fetch and store jobs successfully", async () => {
        const mockJobs = [
            {
                title: "Software Engineer",
                company: "TechCorp",
                location: "Remote",
                application_link: "https://job.com",
                company_website: "https://techcorp.com",
                description: "Exciting role",
                salary: "100000",
                job_type: "Full-time",
                pub_date: "2024-03-01T00:00:00Z",
                expiry_date: "2024-04-01T00:00:00Z",
            }
        ];

        // Properly mock axios.get
        axios.get.mockResolvedValue({ data: mockJobs });

        // Mock Job.upsert method
        Job.upsert.mockResolvedValue(true);

        // Call the function
        const jobCount = await fetchEmplloJobs();

        // Assertions
        expect(axios.get).toHaveBeenCalledWith("https://empollo.com/api/v1", { params: { limit: 50 } });
        expect(Job.upsert).toHaveBeenCalledTimes(mockJobs.length);
        expect(jobCount).toBe(mockJobs.length);
    });

    it("should handle API errors correctly", async () => {
        // Properly mock axios error
        axios.get.mockRejectedValue(new Error("Network Error"));

        // Assert that the function throws an error
        await expect(fetchEmplloJobs()).rejects.toThrow("Network Error");

        // Ensure Job.upsert was not called
        expect(Job.upsert).not.toHaveBeenCalled();
    });
});
