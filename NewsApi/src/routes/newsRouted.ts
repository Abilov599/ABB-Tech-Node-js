import { Router, Request, Response } from 'express';
import { getNews } from '../app/controllers/newsController';

const newsRouter: Router = Router();

// Define routes
newsRouter.get('/news', (req: Request, res: Response) => {
  getNews(req, res);
});

export default newsRouter;
