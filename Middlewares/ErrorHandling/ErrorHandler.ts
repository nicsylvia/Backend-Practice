import { Request, Response, NextFunction } from "express";
import { AppError, HTTPCODES } from "../../Utils/AppError"

const DevErrorHandler = (err: AppError, res: Response) =>{
    return res.status(HTTPCODES.BAD_REQUEST).json({
        name: err.name,
        message: err.message,
        httpcode: err.httpcodes,
        stack: err.stack
    })
};

export const ErrorHandler  = (res: Response, req: Request, err: AppError, next: NextFunction) =>{
    DevErrorHandler(err, res)
}