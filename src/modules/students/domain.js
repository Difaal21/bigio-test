const { SUCCESS, ERROR } = require("../../helpers/http-status");
const command = require("./command");
const logger = require("../../helpers/utils/logger");
const queryScore = require("../scores/query")

class Student {
    constructor() {
        this.ctx = "Student";
    };

    async createStudent(payload) {
        const ctx = `${this.ctx}.createStudent`;

        if (payload.createdBy.role !== "admin") {
            logger.log(ctx, "Role not eligible to create", "payload.createdBy.role");
            return new ERROR.FORBIDDEN(null, "Role not eligible to create");
        };

        const result = await command.insertOneStudent(payload);
        if (result.error) {
            logger.log(ctx, result.message, "command.insertOneStudent()");
            return result;
        };

        return result;
    };

    async getAllScoresById(id) {
        const ctx = `${this.ctx}.getAllScoresById`;
        const result = await queryScore.getAllScoresByStudentId(id);
        if (result.data.length < 1) {
            logger.log(ctx, result.message, "queryScore.getAllScoresByStudentId()");
            return new ERROR.NOT_FOUND(null, "Student scores not found");
        };
        return result;
    };
};

module.exports = Student;