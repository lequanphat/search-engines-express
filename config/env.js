const dotenv = require("dotenv");
dotenv.config();

const CONFIG = {
  SERVER_PORT: process.env.SERVER_PORT,
  ELASTICSEARCH_NODE_URL: process.env.ELASTICSEARCH_NODE_URL,
  ELASTICSEARCH_API_KEY: process.env.ELASTICSEARCH_API_KEY,
};

module.exports = CONFIG;
