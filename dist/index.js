"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./app/routes/index"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("./config/logger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const db = process.env.DB_URL;
const stream = {
    write: (message) => logger_1.default.http(message),
};
app.use((0, morgan_1.default)(":remote-addr :method :url :status :res[content-length] - :response-time ms", { stream }));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
if (db)
    mongoose_1.default
        .connect(db)
        .then(() => {
        logger_1.default.info("Db is connected");
    })
        .catch((error) => logger_1.default.error(`Failed to connect to db, ${error.message}`));
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
    logger_1.default.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
exports.default = app;
