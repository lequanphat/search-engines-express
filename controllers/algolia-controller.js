const { InternalServerError } = require("../core/errors");
const algoliaService = require("../services/algolia-service");

const createDocument = async (req, res, next) => {
  const { index } = req.params;
  const { name, email } = req.body;

  try {
    const results = await algoliaService.createDocument(index, {
      name,
      email,
    });
    res.json(results);
  } catch (err) {
    next(new InternalServerError("Unable to create document"));
  }
};

const searchDocuments = async (req, res, next) => {
  const { index } = req.params;
  const { query } = req.query;
  try {
    const results = await algoliaService.searchDocuments(index, query);
    res.json(results);
  } catch (err) {
    next(new InternalServerError("Unable to search documents"));
  }
};

module.exports = { searchDocuments, createDocument };
