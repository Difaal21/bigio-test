class NotFound extends Error {
    constructor(data = null, message = "", status = "NOT_FOUND") {
        super(message);

        this.error = true;
        this.data = data;
        this.code = 404;
        this.status = status;
    };
};

module.exports = NotFound;