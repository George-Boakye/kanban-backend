"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("logger"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./app/routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.logger = logger_1.default.createLogger();
const port = process.env.PORT;
const db = process.env.DB_URL;
if (db)
    mongoose_1.default
        .connect(db)
        .then(() => {
        console.log("Db is connected");
    })
        .catch((error) => console.log("Failed to connect to db", error.message));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to Kanban Task Management App");
});
app.use("/api", index_1.default);
//Error Handler Middleware
app.use((err, req, res, next) => {
    if (!err) {
        err.status = 500;
    }
    res.status(err.status).send(err.message);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
exports.default = app;
