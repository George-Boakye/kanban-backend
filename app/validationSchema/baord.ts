import Joi from "joi";
import { columnSchema } from "./column";

export const baordSchema = Joi.object({
  name: Joi.string().required().trim().min(1).max(5000),
  columns: Joi.array().items(columnSchema),
});
