const Joi = require('joi');

function add(a, b) {
    validateInput(a, b);
    return a + b;
}

function validateInput(a, b) {
    const schema = Joi.object({
        a: Joi.number().required(),
        b: Joi.number().required(),
    });

    const { error } = schema.validate({ a, b });

    if (error) {
        throw new Error(error.message);
    }
}

module.exports = { add };


// const Joi = require('joi');

// add((a,b) =>{
//     validateInput(a,b);
//     return a + b;
// });

// validateInput((a,b) => {
//     const schema = Joi.object({
//         a: Joi.number().required(),
//         b: Joi.number().required(),
//     });


// const result = schema.validate({a,b});

// if (result.error){
//     throw new Error(result.error.message);
// }
// });

// module.exports = {add}; 
