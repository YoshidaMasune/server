import { Router } from "express";

const router = Router();

router.get('/users/:id', (req, res) => {
    res.send('test api at users')
})

export default router