const dotenv = require("dotenv");
dotenv.config();

const CONFIG = {
  ELASTICSEARCH_NODE_URL: process.env.ELASTICSEARCH_NODE_URL,
  ELASTICSEARCH_API_KEY: process.env.ELASTICSEARCH_API_KEY,
};

module.exports = {
  CONFIG,
};
