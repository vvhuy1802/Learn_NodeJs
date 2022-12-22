const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

//Match route from top to bottom
router.get("/trash/courses", meController.deletedCourses);
router.get("/stored/courses", meController.storedCourses);
router.get("/todos/:slug", meController.detailTodo);
router.get("/todos", meController.todos);
module.exports = router;
