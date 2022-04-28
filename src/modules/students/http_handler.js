const Student = require("./domain");
const wrapper = require("../../helpers/utils/wrapper");
const validator = require("../../helpers/utils/validator");
const schema = require("./validation");

const createStudent = async (req, res) => {
    const payload = req.body;
    const validPayload = validator.isValid(payload, schema.createStudent);

    const validatePayload = async (result) => {
        return result.error ? result : await sendRequest();
    };

    const sendRequest = async () => {
        const student = new Student();
        const result = await student.createStudent(payload);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await validatePayload(validPayload));
}

const getAllScoresById = async (req, res) => {
    const studentId = req.params.id;

    const sendRequest = async () => {
        const student = new Student();
        const result = await student.getAllScoresById(studentId);
        return result;
    };

    const sendResponse = async (result) => {
        return result.error ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
    };

    sendResponse(await sendRequest());

};

module.exports = { createStudent, getAllScoresById };