const Student = require("./model");
const { SUCCESS, ERROR } = require("../../helpers/http-status");

const insertOneStudent = async (value) => {
    try {
        await Student.create(value);
        return new SUCCESS.CREATED();
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    }
};


module.exports = { insertOneStudent };