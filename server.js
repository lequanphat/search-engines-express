const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { esClient } = require("./config/elastic-search-client");

const app = express();

app.use(express.json());

app.get("/elasticsearch", async (req, res) => {
  try {
    const health = await esClient.cluster.health();
    res.json(health);
  } catch (err) {
    res.status(500).send({ error: "Unable to connect to Elasticsearch" });
  }
});

app.post("/elasticsearch/:index", async (req, res) => {
  const { index } = req.params;
  const { name, description, author, pages } = req.body;

  try {
    const result = await esClient.helpers.bulk({
      datasource: [
        {
          id: uuidv4(),
          name,
          author,
          description,
          pages,
          _extract_binary_content: true,
          _reduce_whitespace: true,
          _run_ml_inference: true,
        },
      ],
      pipeline: "ent-search-generic-ingestion",
      onDocument: (doc) => ({ index: { _index: index } }),
    });
    res.json(result);
  } catch (err) {
    res.status(500).send({ error: "Unable to add document" });
  }
});

app.get("/elasticsearch/:index", async (req, res) => {
  const { index } = req.params;
  const { query } = req.query;
  try {
    const searchResult = await esClient.search({
      index: index,
      q: query,
    });
    res.json(searchResult.hits.hits);
  } catch (err) {
    res.status(500).send({ error: "Unable to search documents" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
