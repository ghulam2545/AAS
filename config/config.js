const dotenv = require("dotenv");

dotenv.config({ path: "./vars/.env" });

const APP_PORT = process.env.APP_PORT;

module.exports = { APP_PORT };
