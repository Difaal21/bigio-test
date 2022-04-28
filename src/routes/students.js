const express = require("express");
const router = express.Router();
const httpHandler = require("../modules/students/http_handler");

router.post("/v1/students", httpHandler.createStudent);
router.get("/v1/students/:id/scores", httpHandler.getAllScoresById);

module.exports = router;