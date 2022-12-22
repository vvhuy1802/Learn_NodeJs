const express = require("express");
const router = express.Router();

const buyController = require("../app/controllers/BuyController");

//Match route from top to bottom
router.get("/:slug", buyController.buy);

module.exports = router;
