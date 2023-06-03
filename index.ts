import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Logger from "logger";
import mongoose from "mongoose";
import apiRoutes from "./app/routes/index";

dotenv.config();

const app: Express = express();
export const logger = Logger.createLogger();
const port = process.env.PORT;
const db: string | undefined = process.env.DB_URL;

if (db)
  mongoose
    .connect(db)
    .then(() => {
      console.log("Db is connected");
    })
    .catch((error) => console.log("Failed to connect to db", error.message));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Kanban Task Management App");
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
