import { Request, Response, NextFunction } from "express";
import { AppError } from "../../Utils/AppError";

const DevErrorHandler = (req: Request, err : AppError, res: Response, next: NextFunction) => {
    return res.status(err.httpcodes).json({
        name: err.name,
        httpcode: err.httpcodes,
        stack : err.stack,
        message: err.message
    })
};

export const ErrorHandler = (err: Error, res: Request) => {
    DevErrorHandler(err, res)
}