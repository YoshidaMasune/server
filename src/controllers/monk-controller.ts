import { validRequestFeildWithArray } from './../middlewares/fillRequest';
import { Response, Request, NextFunction } from "express";
import { Monk } from "../models/monk-model";


export const createOne = async (req:Request, res:Response, next: NextFunction) => {

    try {
        const monkvalid = validRequestFeildWithArray(['first_name', 'last_name', 'prefix'], req.body.monk);
        if (monkvalid) {

            const monk_doc = await Monk.create({
                ...req.body.monk
            })
    
            monk_doc.save().then(() => {
                res.send('monk save successfull')
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
        }else {

            res.status(400).send('check your request')
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}