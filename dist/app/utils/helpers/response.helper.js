"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const __1 = require("../../..");
const { SUCCESS_RESPONSE, SUCCESS, NOT_FOUND_API, FAIL } = constants_1.apiMessages;
class ResponseHelper {
    static successResponse(res, { data, message = SUCCESS_RESPONSE, code = 200 }) {
        return res.status(code).json({
            status: SUCCESS,
            message,
            data,
        });
    }
    static apiErrLogMessage(error, req) {
        return __1.logger.error(`${error.name} - ${error.status} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    }
    static errorResponse(req, res, error) {
        const aggregateError = Object.assign({}, error);
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
exports.default = ResponseHelper;
