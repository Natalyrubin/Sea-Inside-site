const Joi = require("joi");

// סכמות אימות
const schemas = {
    createNewLead: Joi.object().keys({
        name: Joi.string().required(),
        phone: Joi.string()
            .pattern(/^05\d{1}([-]{0,1})\d{7}$/, { name: "cellphone number" })
            .required(),
        email: Joi.string().email().required(),
        newsletterConsent: Joi.boolean().optional().default(false), // ברירת מחדל
    }),
};

module.exports = schemas;
