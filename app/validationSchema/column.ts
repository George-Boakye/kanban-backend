import Joi from "joi";

export const columnSchema = Joi.object({
  name: Joi.string().required().trim(),
  tasks: Joi.array().items(),
});
