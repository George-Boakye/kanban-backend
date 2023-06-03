"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const columnSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    tasks: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
    boardId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Board" },
}, { timestamps: true });
const Column = (0, mongoose_1.model)("Column", columnSchema);
exports.default = Column;
