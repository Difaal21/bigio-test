const { Sequelize } = require('sequelize');
const logger = require("../../utils/logger");
const config = require('../../../config/global_config');
const options = config.get("/mysql");

const sequelize = new Sequelize(options.database, options.username, options.password, {
    host: options.host,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: false,
    },
});

const init = async () => {
    const ctx = "mysql-initiate";
    try {
        sequelize.sync();
        await sequelize.authenticate();
    } catch (error) {
        logger.log(ctx, error.message, "init()");
        sequelize.close();
    };
};

module.exports = { sequelize, init };