const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension)

module.exports.petSchema = Joi.object({
  city: Joi.string().required().escapeHTML(),
  state: Joi.string().required().escapeHTML(),
  breed: Joi.string().required().escapeHTML(),
  age: Joi.string().required().escapeHTML(),
  category: Joi.string().required(),
  sex: Joi.string().required(),
  price: Joi.number().required().min(0).required(),
  // picture: Joi.string().required(),
  description: Joi.string().required().escapeHTML(),
  deleteImages: Joi.array(),
});
