import { Router } from 'express'
import * as nimoneController from '../controllers/nimone';

const router = Router();

router.post('/', nimoneController.newNimone);

router.get('/', nimoneController.readAll);

router.get('/:id', nimoneController.readOne);

export default router;