const data = (response) => response
const error = (response) => response

const response = (res, type, response) => {
    let success = true;

    if (type === "fail") {
        success = false;
    };

    return res.status(response.code).json({
        success: success,
        data: response.data,
        code: response.code,
        message: response.message,
        status: response.status
    });
};

module.exports = { response, data, error };