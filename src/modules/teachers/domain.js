const { SUCCESS, ERROR } = require("../../helpers/http-status");
const command = require("./command");
const logger = require("../../helpers/utils/logger");
const commandScores = require("../scores/command");

class Teacher {
    constructor() {
        this.ctx = "Teacher";
    };

    async createTeacher(payload) {
        const ctx = `${this.ctx}.createTeacher`;

        if (payload.createdBy.role !== "admin") {
            logger.log(ctx, "Role not eligible to create", "payload.createdBy.role");
            return new ERROR.FORBIDDEN(null, "Role not eligible to create");
        };

        const result = await command.insertOneTeacher(payload);
        if (result.error) {
            logger.log(ctx, result.message, "command.insertOneTeacher()");
            return result;
        };

        return result;
    };

    async inputStudentScores(payload) {
        const ctx = `${this.ctx}.inputStudentScores`;

        const result = await commandScores.inputStudentScores(payload);
        if (result.error) {
            logger.log(ctx, result.message, "command.inputStudentScores()");
            return result;
        };
        return result;
    }
}

module.exports = Teacher;