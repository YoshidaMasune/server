import { Router } from 'express';
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from '../controllers/monk-controller';
const router = Router();

router.post('/', createOne);

router.get('/', getAll);

router.put('/:id', updateOne);

router.delete('/:id', deleteOne);

export default router;
