"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const board_1 = __importDefault(require("../../controllers/board"));
const router = (0, express_1.Router)();
router.post("/board/create", board_1.default.addBoard);
exports.default = router;
