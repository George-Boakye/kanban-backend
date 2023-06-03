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
const models_1 = require("../models");
const helpers_1 = require("../utils/helpers");
const { successResponse, errorResponse } = helpers_1.ResponseHelper;
class BoardController {
    static addBoard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, columns } = req.body;
                const columnIds = yield models_1.Column.insertMany(columns);
                console.log("Ids", columnIds);
                const board = yield models_1.Board.create({
                    name,
                    columns: columnIds.map((column) => column._id),
                });
                return successResponse(res, {
                    data: board,
                    code: 201,
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = BoardController;
