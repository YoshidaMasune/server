import { Application, Request, Response, NextFunction } from "express"

export const authToken = function(req:Request, res:Response, next: NextFunction) {
    const token = req.headers['access-token'];

}