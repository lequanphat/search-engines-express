const searchEngineService = require("../services/search-engine-service");

const checkESClientConnection = async (req, res) => {
  try {
    const health = await searchEngineService.checkESClientConnection();
    res.json(health);
  } catch (err) {
    res.status(500).send({ error: "Unable to connect to Elasticsearch" });
  }
};

const createDocument = async (req, res) => {
  const { index } = req.params;
  const { name, description, author, pages } = req.body;

  try {
    const result = await searchEngineService.createDocument(index, {
      name,
      author,
      description,
      pages,
    });
    res.json(result);
  } catch (err) {
    res.status(500).send({ error: "Unable to add document" });
  }
};

const searchDocuments = async (req, res) => {
  const { index } = req.params;
  const { query } = req.query;
  try {
    const searchResult = await searchEngineService.searchDocuments(
      index,
      query
    );
    res.json(searchResult);
  } catch (err) {
    res.status(500).send({ error: "Unable to search documents" });
  }
};

module.exports = { checkESClientConnection, createDocument, searchDocuments };
