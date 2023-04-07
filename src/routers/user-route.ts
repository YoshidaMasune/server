import { Router } from "express";
import * as UserController from "../controllers/user-controller";

const router = Router();

router.get('/:id', UserController.getUserOne)

router.get('/', UserController.getUserAll);

router.put('/', UserController.updateUserOne)

export default router