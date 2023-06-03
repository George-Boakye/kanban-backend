"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const boardSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    columns: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Column",
        },
    ],
}, { timestamps: true });
const Board = (0, mongoose_1.model)("Board", boardSchema);
exports.default = Board;
