const validate = require("validate.js");
const { SUCCESS, ERROR } = require("../http-status");

const isValid = (payload, constraint) => {
    const { value, error } = constraint.validate(payload);
    if (!validate.isEmpty(error)) {
        return new ERROR.BAD_REQUEST(error);
    }
    return new SUCCESS.OK(value);
};

module.exports = {
    isValid
};
