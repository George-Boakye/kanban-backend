"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const board_1 = __importDefault(require("../../controllers/board"));
const middlewares_1 = require("../../middlewares");
const baord_1 = require("../../validationSchema/baord");
const { validate } = middlewares_1.ValidationMiddleware;
const router = (0, express_1.Router)();
router.post("/board/create", validate(baord_1.baordSchema), board_1.default.addBoard);
exports.default = router;
