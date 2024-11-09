const joi = require('joi');
const id = joi.string().uuid();
const name = joi.string().alphanum().min(1).max(30);
const location = joi.string().min(1).max(100);
const image = joi.string().uri();

const createCompanySchema = joi.object({
  name: name.required(),
  location: location.required(),
  image: image.required()
});

const updateCompanySchema = joi.object({
  name: name,
  location: location,
  image: image
});

const getCompanySchema = joi.object({
  id: id.required()
});

module.exports = { createCompanySchema, updateCompanySchema, getCompanySchema };
