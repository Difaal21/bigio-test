const joi = require('joi');

const createStudent = joi.object({
    name: joi.string().required(),
    createdBy: joi.object({
        id: joi.number().required(),
        role: joi.string().required(),
    })
});

module.exports = { createStudent }