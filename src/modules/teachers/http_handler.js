const Teacher = require("./domain");
const wrapper = require("../../helpers/utils/wrapper");
const validator = require("../../helpers/utils/validator");
const schema = require("./validation");

const createTeacher = async (req, res) => {
    const payload = req.body;
    const validPayload = validator.isValid(payload, schema.createTeacher);

    const validatePayload = async (result) => {
        return result.error ? result : await sendRequest();
    };

    const sendRequest = async () => {
        const teacher = new Teacher();
        const result = await teacher.createTeacher(payload);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await validatePayload(validPayload));
};

const inputStudentScores = async (req, res) => {

    const payload = req.body;
    const validPayload = validator.isValid(payload, schema.inputStudentScores);

    const validatePayload = async (result) => {
        return result.error ? result : await sendRequest();
    };

    const sendRequest = async () => {
        const teacher = new Teacher();
        const result = await teacher.inputStudentScores(payload);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await validatePayload(validPayload));
}

module.exports = { createTeacher, inputStudentScores };