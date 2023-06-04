"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../../utils/helpers");
const { validateInput } = helpers_1.GenericHelper;
class ValidationMiddleware {
    /**
     * @static
     */
    static validate(schema) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield validateInput(schema, req.body);
                next();
            }
            catch (error) {
                res.status(404).json({
                    error,
                });
            }
        });
    }
}
exports.default = ValidationMiddleware;
