import { fill_NULL_request_body } from './../middlewares/fillRequest';
import { Router } from "express"
import { createNewOne, deleteOne, getWorkAll, getById, updateOne } from "../controllers/work-controller";

const router = Router();

router.get('/', getWorkAll);

router.get('/:id', getById)

router.post('/', fill_NULL_request_body, createNewOne);

router.put('/:id', updateOne);

router.delete('/:id', deleteOne);


export default router;