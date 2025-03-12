const TelegramBot = require("node-telegram-bot-api");
const fetchJobs = require("../platforms/api/fetchJobs");  // ✅ No destructuring needed
require("dotenv").config();

// Initialize bot with polling
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Handle /start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome to JobBot! Use /jobs to see the latest jobs.");
});

// Handle /jobs command
bot.onText(/\/jobs/, async (msg) => {
    const chatid = msg.chat.id;

    try {
        const jobs = await fetchJobs();  

        console.log("Jobs inside Telegram bot:", jobs);

        if (!Array.isArray(jobs) || jobs.length === 0) {  // ✅ Ensure jobs is an array
            return bot.sendMessage(chatid, "No jobs available at this period of time.");
        }

        const jobList = jobs.map((job) => 
            `📌 *${job.title}* at *${job.company}*\n🔗 [Apply Here](${job.link})`
        ).join("\n\n");

        bot.sendMessage(chatid, jobList, { parse_mode: "Markdown" });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        bot.sendMessage(chatid, "⚠️ Error retrieving jobs. Try again later.");
    }
});


console.log("📢 Telegram bot is running...");
