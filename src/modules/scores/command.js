const Score = require("./model");
const { SUCCESS, ERROR } = require("../../helpers/http-status");

const inputStudentScores = async (value) => {
    try {
        await Score.bulkCreate(value);
        return new SUCCESS.CREATED();
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    }
};


module.exports = { inputStudentScores };