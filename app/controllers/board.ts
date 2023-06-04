import { Board, Column } from "../models";
import { Request, Response, NextFunction } from "express";
import { ResponseHelper } from "../utils/helpers";

const { successResponse } = ResponseHelper;

class BoardController {
  static async addBoard(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, columns } = req.body;

      const columnIds = await Column.insertMany(columns);

      const board = await Board.create({
        name,
        columns: columnIds.map((column) => column._id),
      });
      return successResponse(res, {
        data: board,
        code: 201,
      });
    } catch (error: any) {
      next(error);
    }
  }
}

export default BoardController;
