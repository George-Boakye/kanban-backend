import { Router } from "express";
import boardRoutes from "./board";
import taskRoutes from "./task";

const router = Router();

router.use(boardRoutes);
router.use(taskRoutes);

export default router;
