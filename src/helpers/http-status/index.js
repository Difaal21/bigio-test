const OK = require("./ok");
const Created = require("./created");

const BadRequest = require("./bad_request");
const Forbidden = require("./forbidden");
const Unauthorized = require("./unauthorized");
const NotFound = require("./not_found");
const InternalServerError = require("./internal_server_error");

const SUCCESS = {
    OK: OK,
    CREATED: Created
};

const ERROR = {
    BAD_REQUEST: BadRequest,
    FORBIDDEN: Forbidden,
    UNAUTHORIZED: Unauthorized,
    NOT_FOUND: NotFound,
    INTERNAL_SERVER_ERROR: InternalServerError
};

module.exports = { SUCCESS, ERROR };