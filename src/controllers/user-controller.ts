import { Request, Response } from "express"
import { User } from "../models/user-model"

// GET USER ALL 
export const getUserAll = async (req: Request, res: Response) => {
    try {
        const data = User.find().then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    } catch (error) {
        console.log(error)
    }
}

// GET USE ONE
export const getUserOne = (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const data = User.findById(id).exec().then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

//

export const updateUserOne = (req: Request, res: Response) => {

}