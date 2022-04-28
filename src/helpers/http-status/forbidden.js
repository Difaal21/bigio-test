class Forbidden extends Error {
    constructor(data = null, message = "", status = "FORBIDDEN") {
        super(message);

        this.error = true;
        this.data = data;
        this.code = 403;
        this.status = status;
    };
};

module.exports = Forbidden;