import { Task } from "../models";
import { Request, Response, NextFunction } from "express";
import { ResponseHelper } from "../utils/helpers";

const { successResponse, errorResponse } = ResponseHelper;

class TaskController {
  static async createTask(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { title, status, description, subtasks, column } = request.body;

      const task = await Task.create({
        title,
        status,
        description,
        subtasks,
        column,
      });

      return successResponse(response, {
        data: task,
        code: 201,
      });
    } catch (error: any) {
      next(error);
    }
  }

  static async getAllTasks(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const tasks = await Task.find({
        column: request.query.column,
      });

      return successResponse(response, {
        data: tasks,
        code: 200,
      });
    } catch (error: any) {
      next(error);
    }
  }

  static async getTask(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const task = await Task.findById(request.params.id);

      return successResponse(response, {
        data: task,
        code: 200,
      });
    } catch (error: any) {
      return errorResponse(response, {
        message: "Task not found.",
        code: 404,
      });
    }
  }
}

export default TaskController;
