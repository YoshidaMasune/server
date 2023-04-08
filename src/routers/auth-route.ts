import { Router } from "express";
import jwt from 'jsonwebtoken'
import bcript from 'bcrypt'
import { Admin } from "../models/admin-model";
import dotenv from 'dotenv'

dotenv.config();
const router = Router();

const TOKEN_KEY = process.env.TOKEN_KEY || "pidjIDODVDKEITOJGKENINFC"

router.post('/login', async (req, res) => {

    try {
        const { username, password } = req.body;

        console.log(req.body)
        const admin = await Admin.findOne({ username: username });
        const comprarePassword = await bcript.compare(password, admin?.password || '');
        let token;

        if (admin && comprarePassword) {
            token = jwt.sign({ adminId: admin._id, username }, TOKEN_KEY, { expiresIn: '2h' })
            res.status(200).json(admin);
        } else {
            res.status(400).send('not found admin record')
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }

})

router.post('/registor', async (req, res, next) => {

    try {
        const { username, email, password } = req.body;
        let encryptedPassword = await bcript.hash(password, 10);

        const newAdmin = new Admin({
            username: username,
            password: encryptedPassword,
            email: email,
        })
        const token = jwt.sign({ adminId: newAdmin._id, username }, TOKEN_KEY, { expiresIn: "2h" })
        newAdmin.token = token;

        newAdmin.save()
        res.status(200).json(newAdmin)
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
})

export default router;