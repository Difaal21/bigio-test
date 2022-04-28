class InternalServerError extends Error {
    constructor(data = null, message = "", status = "INTERNAL_SERVER_ERROR") {
        super(message);

        this.error = true;
        this.data = data;
        this.code = 500;
        this.status = status;
    };
};

module.exports = InternalServerError;