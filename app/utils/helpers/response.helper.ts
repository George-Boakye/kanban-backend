import { Response, Request } from "express";
import { apiMessages } from "../constants";

const { SUCCESS_RESPONSE, SUCCESS, NOT_FOUND_API, FAIL } = apiMessages;

export interface SuccessResponse<T> {
  status?: string;
  message?: string;
  code?: number;
  data: T;
}
interface iErrorResponse<T> {
  status?: string;
  message?: string;
  code?: number;
  data?: T;
}

class ResponseHelper {
  static successResponse<T>(
    res: Response,
    { data, message = SUCCESS_RESPONSE, code = 200 }: SuccessResponse<T>
  ) {
    return res.status(code).json({
      status: SUCCESS,
      message,
      data,
    });
  }

  static errorResponse<T>(
    res: Response,
    { data, message = NOT_FOUND_API, code = 404 }: iErrorResponse<T>
  ) {
    return res.status(code).json({
      status: FAIL,
      message,
      data,
    });
  }
}

export default ResponseHelper;
