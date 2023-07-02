import Joi from "joi";

const createTaskSchema = Joi.object({
  title: Joi.string().required().trim().min(1).max(5000),
  description: Joi.string().required().trim().min(1).max(5000),
  status: Joi.string().required().trim().min(1).max(5000),
  subtasks: Joi.array(),
  column: Joi.string().required().trim().min(1).max(5000),
});

const getAllColumnTasksSchema = Joi.object({
  query: Joi.object({
    column: Joi.string().required().hex().length(24),
  }),
});

const getTaskSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().required().hex().length(24),
  }),
});

export { createTaskSchema, getAllColumnTasksSchema, getTaskSchema };
