import { Router } from "express";
import * as UserController from "../controllers/user-controller";
import { authToken } from "../middlewares/auth";

const router = Router();

router.get('/:id', UserController.getUserOne)

router.get('/', UserController.getUserAll);

router.put('/', authToken, UserController.updateUserOne)

export default router