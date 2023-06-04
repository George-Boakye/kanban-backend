import { Router } from "express";
import BoardController from "../../controllers/board";
import { ValidationMiddleware } from "../../middlewares";
import { baordSchema } from "../../validationSchema/baord";

const { validate } = ValidationMiddleware;

const router = Router();

router.post("/board/create", validate(baordSchema), BoardController.addBoard);

export default router;
