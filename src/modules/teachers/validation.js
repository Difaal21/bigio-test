const joi = require('joi');

const createTeacher = joi.object({
    name: joi.string().required(),
    createdBy: joi.object({
        id: joi.number().required(),
        role: joi.string().required(),
    })
});

const inputStudentScores = joi.array().items(
    joi.object({
        student_id: joi.number().min(1).required(),
        scores: joi.string().required(),
        subject_id: joi.number().min(1).required(),
        teacher_id: joi.number().min(1).required(),
        role: joi.string().required(),
    })
);


module.exports = { createTeacher, inputStudentScores }