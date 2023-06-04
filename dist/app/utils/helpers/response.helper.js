"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const { SUCCESS_RESPONSE, SUCCESS, NOT_FOUND_API, FAIL } = constants_1.apiMessages;
class ResponseHelper {
    static successResponse(res, { data, message = SUCCESS_RESPONSE, code = 200 }) {
        return res.status(code).json({
            status: SUCCESS,
            message,
            data,
        });
    }
    static errorResponse(req, res, error) { }
}
exports.default = ResponseHelper;
