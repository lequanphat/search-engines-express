const dotenv = require("dotenv");
dotenv.config();

const CONFIG = {
  SERVER_PORT: process.env.SERVER_PORT,
  ELASTICSEARCH_NODE_URL: process.env.ELASTICSEARCH_NODE_URL,
  ELASTICSEARCH_API_KEY: process.env.ELASTICSEARCH_API_KEY,
  ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
  ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
  ALGOLIA_WRITE_API_KEY: process.env.ALGOLIA_WRITE_API_KEY,
};

module.exports = CONFIG;
