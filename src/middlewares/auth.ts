import { Application, Request, Response, NextFunction } from "express"

export const authToken = function (req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
}