import { Router } from "express";
import { createOne } from "../controllers/monk-controller";

const router = Router();

router.post('/', createOne)

export default router