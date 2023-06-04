"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columnSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.columnSchema = joi_1.default.object({
    name: joi_1.default.string().required().trim(),
    tasks: joi_1.default.array().items(),
});
