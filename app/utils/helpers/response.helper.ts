import { Response, Request } from "express";
import { apiMessages } from "../constants";
import { logger } from "../../..";

const { SUCCESS_RESPONSE, SUCCESS, NOT_FOUND_API, FAIL } = apiMessages;

export interface SuccessResponse<T> {
  status?: string;
  message?: string;
  code?: number;
  data: T;
}

interface Error {
  name: any;
  status: any;
  message: any;
  errors: any;
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

  static apiErrLogMessage(error: Error, req: Request) {
    return logger.error(
      `${error.name} - ${error.status} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    );
  }

  static errorResponse(req: Request, res: Response, error: Error) {
    const aggregateError = { ...error };
    ResponseHelper.apiErrLogMessage(aggregateError, req);
    if (error.name === "CastError") {
      return res.status(404).json({
        status: FAIL,
        message: NOT_FOUND_API,
        errors: error.message,
      });
    }
    return res.status(aggregateError.status).json({
      status: FAIL,
      message: aggregateError.message,
      errors: aggregateError.errors,
    });
  }
}

export default ResponseHelper;
