const express = require("express");
const router = express.Router();

const elasticSearchController = require("../controllers/search-engine-controller");

router.get("/elasticsearch", elasticSearchController.checkESClientConnection);

router.get("/elasticsearch/:index", elasticSearchController.searchDocuments);

router.post("/elasticsearch/:index", elasticSearchController.createDocument);

module.exports = router;
