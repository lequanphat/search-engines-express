const { v4: uuidv4 } = require("uuid");
const algoliaClient = require("../config/algolia-search-client");

const createDocument = async (indexName, { name, email }) => {
  const record = { objectID: uuidv4(), name, email };

  const { taskID } = await algoliaClient.saveObject({
    indexName,
    body: record,
  });

  const response = await algoliaClient.waitForTask({
    indexName,
    taskID,
  });

  return response;
};

const searchDocuments = async (indexName, query) => {
  const { results } = await algoliaClient.search({
    requests: [
      {
        indexName,
        query,
      },
    ],
  });
  return results?.[0]?.hits;
};

module.exports = { createDocument, searchDocuments };
