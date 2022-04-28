const config = require('./src/config/global_config');
const logger = require("./src/helpers/utils/logger");
const server = require("./src/server");
const PORT = config.get('/port');

server.listen(PORT, () => {
    const ctx = 'server.listen';
    logger.log(ctx, `Apps started, listening at ${PORT}`, 'initate application');
});