
## Agent-Bot

##  Overview
Agent-Bot is an intelligent automation system designed to search for freelance jobs dynamically across various platforms. It can fetch job listings via APIs or web scraping, process them, and store relevant data in a PostgreSQL database. The goal is to create a scalable and extendable job search assistant that can later integrate AI-driven automation, such as generating proposals or notifications via Telegram.

##  Features
- **Dynamic Platform Support**: Can target platforms with or without APIs.
- **Automated Job Fetching**: Uses APIs where available, and web scraping for non-API platforms.
- **PostgreSQL Integration**: Stores job listings for efficient tracking and filtering.
- **Modular Architecture**: Designed with clean separation of concerns.
- **Scalability**: Easily extendable to include AI-generated responses and more integrations.
- **Interfere**: Telegram Bot Intergration: sends data to telegram. 
- **(Upcoming) Telegram Bot Integration**: Sends job alerts directly to the user.

##  Tech Stack
- **Backend**: Node.js (Express.js) / pocketbase 
- **Database**: PostgreSQL (Sequelize ORM)
- **Automation**: Puppeteer (for web scraping), node-cron (for scheduling)
- **Logging**: Winston
- - **jest** : Testing
- **Caching**: Redis (for performance optimization)
- **Environment Management**: dotenv

## 📁 Project Structure
```
agent-bot/
│── logs/                      # Log files (handled by Winston)
│── src/
│   ├── platforms/
│   │   ├── api/               # API-based job search integrations
│   │   ├── scrapers/          # Web scrapers for non-API platforms
│   ├── database/
│   │   ├── db.js              # Database connection (PostgreSQL)
│   ├── agent/                 # Automation logic (like Telegram bot)
│   ├── config/                # Configuration files
│   ├── utils/                 # Utility functions
│   │   ├── logger.js          # Winston logging setup
│   │   ├── scheduler.js       # Job scheduling (node-cron)
│   ├── index.js               # Main entry point
│── .env                       # Environment variables
│── README.md                  # Project documentation
```

##  Getting Started
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/agent-bot.git
cd agent-bot
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and configure your database:
``` env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=agent_bot
```

### 4️⃣ Run the Application
``` bash
node src/index.js
```

##  Roadmap
- [x] Set up PostgreSQL database
- [x] Implement API-based job searching
- [ ] Add web scraping for non-API platforms
- [ ] Integrate AI-powered proposal generation
- [ ] Implement Telegram bot for job notifications

##  Contributing
Feel free to submit issues and pull requests! Let's build this together. 

## 📜 License
MIT License. See ` LICENSE ` file for details.

