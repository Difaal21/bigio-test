const Score = require("./model");
const { SUCCESS, ERROR } = require("../../helpers/http-status");

const getAllScoresByStudentId = async (id) => {
    try {
        const result = await Score.findAll({
            where: {
                student_id: id
            }
        });
        return new SUCCESS.OK(result);
    } catch (error) {
        return new ERROR.INTERNAL_SERVER_ERROR(null, error.message);
    };
};


module.exports = { getAllScoresByStudentId };