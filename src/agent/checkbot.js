require("dotenv").config();
const axios = require("axios");

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Load from .env
const URL = `https://api.telegram.org/bot${BOT_TOKEN}/getMe`;

axios.get(URL)
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error.response ? error.response.data : error.message));
