class Created {
    constructor(data = null, message = "", status = "CREATED") {
        this.error = false;
        this.data = data;
        this.code = 201;
        this.status = status;
        this.message = message;
    };
};

module.exports = Created;