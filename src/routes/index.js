const wrapper = require("../helpers/utils/wrapper");
const { ERROR } = require("../helpers/http-status");

const teachers = require("./teachers");
const students = require("./students");

const init = server => {
    server.use(teachers);
    server.use(students);

    server.use((req, res, next) => {
        const error = new ERROR.NOT_FOUND(null, "Page Not Found");
        res.status(404);
        next(error);
    });

    server.use((error, req, res, next) => {
        return wrapper.response(res, "fail", new ERROR.NOT_FOUND(null, error.message));
    });
};

exports.init = init;