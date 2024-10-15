const { InternalServerError } = require("../core/errors");
const searchEngineService = require("../services/elasticsearch-service");

const checkESClientConnection = async (req, res, next) => {
  try {
    const health = await searchEngineService.checkESClientConnection();
    res.json(health);
  } catch (err) {
    next(new InternalServerError("Unable to connect to Elasticsearch"));
  }
};

const createDocument = async (req, res, next) => {
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
    next(new InternalServerError("Unable to add document"));
  }
};

const searchDocuments = async (req, res, next) => {
  const { index } = req.params;
  const { query } = req.query;
  try {
    const searchResult = await searchEngineService.searchDocuments(
      index,
      query
    );
    res.json(searchResult);
  } catch (err) {
    next(new InternalServerError("Unable to search documents"));
  }
};

module.exports = { checkESClientConnection, createDocument, searchDocuments };
