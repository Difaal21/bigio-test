const express = require('express');
const app = express();
const cors = require("cors");
const routes = require("../routes");
const mysqlDbConnection = require("../helpers/database/mysql/connection");
const helmet = require("helmet");

mysqlDbConnection.init();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
routes.init(app);

module.exports = app;