"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baordSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const column_1 = require("./column");
exports.baordSchema = joi_1.default.object({
    name: joi_1.default.string().required().trim().min(1).max(5000),
    columns: joi_1.default.array().items(column_1.columnSchema),
});
