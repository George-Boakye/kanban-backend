import { Board, Column } from "../models";
import { Request, Response } from "express";
import { ResponseHelper } from "../utils/helpers";

const { successResponse, errorResponse } = ResponseHelper;

class BoardController {
  static async addBoard(req: Request, res: Response) {
    try {
      const { name, columns } = req.body;

      const columnIds = await Column.insertMany(columns);
      console.log("Ids", columnIds);

      const board = await Board.create({
        name,
        columns: columnIds.map((column) => column._id),
      });
      return successResponse(res, {
        data: board,
        code: 201,
      });
    } catch (error: any) {
      console.log(error);
    }
  }
}

export default BoardController;
