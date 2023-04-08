import { Router } from 'express';
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from '../controllers/monk-controller';
import { authToken } from '../middlewares/auth';
const router = Router();

router.post('/', authToken, createOne);

router.get('/', getAll);

router.put('/:id', authToken, updateOne);

router.delete('/:id', authToken, deleteOne);

export default router;
