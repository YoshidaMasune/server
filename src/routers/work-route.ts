import { fill_NULL_request_body } from './../middlewares/fillRequest';
import { Router } from "express"
import { createNewOne, deleteOne, getWorkAll, getById, updateOne } from "../controllers/work-controller";
import { authToken } from '../middlewares/auth';

const router = Router();

router.get('/', getWorkAll);

router.get('/:id', getById)

router.post('/', authToken, fill_NULL_request_body, createNewOne);

router.put('/:id', authToken, updateOne);

router.delete('/:id', authToken, deleteOne);


export default router;