const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

//Match route from top to bottom
router.get('/:slug',newsController.show)
router.get("/", newsController.index);

module.exports = router;
