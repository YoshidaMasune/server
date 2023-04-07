import { Router } from "express";
import jwt from 'jsonwebtoken'
import bcript from 'bcrypt'

const router = Router();

router.post('/login', async (req, res,) => {

    console.log(req.body)
    res.json({
        login: true,
        token: 'tuyfdfodcvo345__dkfjbe49fbjkdcladfglLLIUT@$_('
    })
})

export default router;