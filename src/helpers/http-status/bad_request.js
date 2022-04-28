class BadRequest extends Error {
    constructor(data = null, message = "", status = "BAD_REQUEST") {
        super(message);

        this.error = true;
        this.data = data;
        this.code = 400;
        this.status = status;
    }
};

module.exports = BadRequest;