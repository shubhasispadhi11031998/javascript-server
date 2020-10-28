import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error: 'Not founf',
        code: 404
        // tslint:disable-next-line: semicolon
    })
    // tslint:disable-next-line: semicolon
}