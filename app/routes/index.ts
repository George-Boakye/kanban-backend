import { Router } from "express";
import boardRoutes from "./board";

const router = Router();

router.use(boardRoutes);

export default router;
