const { Client } = require("@elastic/elasticsearch");
const CONFIG = require("./env");

const esClient = new Client({
  node: CONFIG.ELASTICSEARCH_NODE_URL,
  auth: {
    apiKey: CONFIG.ELASTICSEARCH_API_KEY,
  },
});

module.exports = {
  esClient,
};
