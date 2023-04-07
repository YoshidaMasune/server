import { Request, Response, NextFunction } from 'express';
import { Nimone } from '../models/nimone-model';

export const newNimone = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { wid, uid } = req.body;
        const monks: [] = req.body.monks
        const mid = req.body.mid || undefined;

        // new Documennt
        const newNimone = new Nimone;

        try {
            newNimone.work = wid;
            newNimone.user = uid;
            newNimone.monk = monks
            // when not own monk
            if (mid === undefined) {
                newNimone.own = mid;
            }
            const saveDoc = await newNimone.save();
            res.json(saveDoc);
        }
        catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export const readAll = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = Nimone.find({});
        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

export const readOne = async (req: Request, res: Response) => {

    try {
        const nid = req.body.nid;
        const data = Nimone.findOne({ _id: nid });
        res.json(data)

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}