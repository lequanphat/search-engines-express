const express = require("express");
const router = express.Router();

const elasticSearchController = require("../controllers/elasticsearch-controller");
const algoliaSearchController = require("../controllers/algolia-controller");

// elastic search routes
router.get("/elasticsearch", elasticSearchController.checkESClientConnection);

router.get("/elasticsearch/:index", elasticSearchController.searchDocuments);

router.post("/elasticsearch/:index", elasticSearchController.createDocument);

// algolia search routes
router.get("/algolia/:index", algoliaSearchController.searchDocuments);
router.post("/algolia/:index", algoliaSearchController.createDocument);

module.exports = router;
