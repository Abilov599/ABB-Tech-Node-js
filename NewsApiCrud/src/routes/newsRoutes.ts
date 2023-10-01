import { Router } from 'express';
import { createNews, deleteNews, getAllNews, getNewsById, updateNews } from '../app/controllers/newsController';

const newsRouter: Router = Router();

// Define the routes and map them to controller functions
newsRouter.get('/news', getAllNews);
newsRouter.get('/news/:id', getNewsById);
newsRouter.post('/news', createNews);
newsRouter.put('/news/:id', updateNews);
newsRouter.delete('/news/:id', deleteNews);

export default newsRouter;
