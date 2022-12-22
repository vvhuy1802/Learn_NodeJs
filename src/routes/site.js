const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

//Tuyến đường từ trên xuống dưới

router.get("/search", siteController.search);
router.post("/search", siteController.searchPost);
router.get("/", siteController.home);

module.exports = router;
