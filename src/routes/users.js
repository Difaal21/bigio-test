const express = require("express");
const router = express.Router();
const httpHandler = require("../modules/users/http_handler");

// router.get("/v1/users/register", httpHandler.register);
router.post("/v1/users", httpHandler.createUsers);

module.exports = router;