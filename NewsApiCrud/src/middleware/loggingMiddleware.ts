import { Request, Response, NextFunction } from 'express';

export const loggingMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  const { method, url, query, body } = req;
  console.log(`[${method}] ${url} query:${JSON.stringify(query)} body:${JSON.stringify(body)}`);
  next();
};
