import { Router } from "express";
import jwt from 'jsonwebtoken'
import bcript from 'bcrypt'

const router = Router();

router.post('/registor', async (req, res,) => {
    // let encryptedPassword = await bcript.hash(password, 10);
    // const token = jwt.sign(id: admin._id, )
})