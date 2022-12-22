const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

//Match route from top to bottom
router.post("/store", courseController.store);
router.put("/:id", courseController.update);

router.patch("/:id/restore", courseController.restoreCourse);
router.delete("/:id/force", courseController.forceCourse);
router.delete("/:id", courseController.delete);

router.get("/:id/edit", courseController.edit);
router.get("/create", courseController.create);
router.get("/:slug", courseController.show);

module.exports = router;
