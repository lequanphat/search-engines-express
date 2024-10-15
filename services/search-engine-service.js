const { v4: uuidv4 } = require("uuid");
const { esClient } = require("../config/elastic-search-client");

const checkESClientConnection = async () => {
  const health = await esClient.cluster.health();
  return health;
};

const createDocument = async (index, { name, author, description, pages }) => {
  const document = {
    id: uuidv4(),
    name,
    author,
    description,
    pages,
    _extract_binary_content: true,
    _reduce_whitespace: true,
    _run_ml_inference: true,
  };
  return await esClient.helpers.bulk({
    datasource: [document],
    pipeline: "ent-search-generic-ingestion",
    onDocument: (doc) => ({ index: { _index: index } }),
  });
};

const searchDocuments = async (index, query) => {
  const searchResult = await esClient.search({
    index: index,
    q: query,
  });
  return searchResult.hits.hits;
};

module.exports = { checkESClientConnection, createDocument, searchDocuments };
