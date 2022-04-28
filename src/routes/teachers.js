const express = require("express");
const router = express.Router();
const httpHandler = require("../modules/teachers/http_handler");

router.post("/v1/teachers", httpHandler.createTeacher);
router.post("/v1/teachers/input/student-scores", httpHandler.inputStudentScores);

module.exports = router;