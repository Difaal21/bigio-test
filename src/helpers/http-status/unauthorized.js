class Unauthorized extends Error {
    constructor(data = null, message = "", status = "UNAUTHTORIZED") {
        super(message);

        this.error = true;
        this.data = data;
        this.code = 401;
        this.status = status;
    }
};

module.exports = Unauthorized;