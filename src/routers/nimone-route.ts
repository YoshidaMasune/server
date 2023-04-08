import { Router } from 'express'
import * as nimoneController from '../controllers/nimone';
import { authToken } from '../middlewares/auth';

const router = Router();

router.post('/', authToken, nimoneController.newNimone);

router.get('/', nimoneController.readAll);

router.get('/:id', authToken, nimoneController.readOne);

export default router;