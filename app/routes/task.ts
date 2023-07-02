import { Router } from "express";
import TaskController from "../controllers/task";
import { ValidationMiddleware } from "../middlewares";
import { createTaskSchema, getAllColumnTasksSchema, getTaskSchema } from "../validationSchema/task";

const { validate } = ValidationMiddleware;

const router = Router();

router.post("/tasks", validate(createTaskSchema), TaskController.createTask);
router.get("/tasks", validate(getAllColumnTasksSchema), TaskController.getAllTasks);
router.get("/tasks/:id", validate(getTaskSchema), TaskController.getTask);

export default router;
