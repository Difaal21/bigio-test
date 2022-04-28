class OK {
    constructor(data = null, message = "", status = "OK") {
        this.error = false;
        this.data = data;
        this.code = 200;
        this.status = status;
        this.message = message;
    };
};

module.exports = OK;