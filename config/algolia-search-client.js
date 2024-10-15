const { algoliasearch } = require("algoliasearch");
const CONFIG = require("./env");

const algoliaClient = algoliasearch(
  CONFIG.ALGOLIA_APP_ID,
  CONFIG.ALGOLIA_WRITE_API_KEY
);

module.exports = algoliaClient;
