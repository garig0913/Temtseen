const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

router.post("/postProject", postController.postController);

module.exports = router;
