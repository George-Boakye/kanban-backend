import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoutes from "./app/routes/index";
import cors from "cors";
import morgan from "morgan";
import logger from "./config/logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const db: string | undefined = process.env.DB_URL;

const stream = {
  write: (message: string) => logger.http(message),
};

app.use(
  morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms",
    { stream }
  )
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (db)
  mongoose
    .connect(db)
    .then(() => {
      logger.info("Db is connected");
    })
    .catch((error) =>
      logger.error(`Failed to connect to db, ${error.message}`)
    );

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Kanban Task Management App");
});

app.use("/api", apiRoutes);

//Error Handler Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    err.status = 500;
  }
  res.status(err.status).send(err.message);
});

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
