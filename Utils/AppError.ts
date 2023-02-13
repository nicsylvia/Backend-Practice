export enum HTTPCODES {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    FOUND = 302,
    BAD_REQUEST = 400,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

interface ErrorTags {
    name?: string,
    message?: string,
    isOperational?: boolean,
    httpcode: HTTPCODES
}

export class AppError extends Error {
    public readonly name: string;
    public readonly isOperational: boolean = true;
    public readonly httpcodes: HTTPCODES;

    constructor ( args: ErrorTags ) {
        super(args.message)

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = args.name || "Error";
        this.httpcodes = args.httpcode;

        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational
        }

        Error.captureStackTrace(this);
    }
}