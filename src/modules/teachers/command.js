const Teacher = require("./model");
const { SUCCESS, ERROR } = require("../../helpers/http-status");

const insertOneTeacher = async (value) => {
    try {
        await Teacher.create(value);
        return new SUCCESS.CREATED();
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    }
};


module.exports = { insertOneTeacher };