import { Router } from "express";
import BoardController from "../../controllers/board";

const router = Router();

router.post("/board/create", BoardController.addBoard);

export default router;
