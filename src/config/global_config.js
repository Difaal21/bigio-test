require('dotenv').config();
const confidence = require('confidence');

const config = {
    port: process.env.PORT,
    basicAuthApi: [
        {
            username: process.env.BASIC_AUTH_USERNAME,
            password: process.env.BASIC_AUTH_PASSWORD
        }
    ],
    mysql: {
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST
    },
    jwtKey: process.env.JWT_KEY,
};

const store = new confidence.Store(config);

exports.get = key => store.get(key);
