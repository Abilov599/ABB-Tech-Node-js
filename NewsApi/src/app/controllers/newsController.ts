// controllers/newsController.ts
import { Request, Response } from 'express';
import { getNewsArticle, NewsArticle } from '../models/newsModel';
import { renderNews } from '../views/newsView';

// In a real application, you would have an array of news articles
// For this example, we'll have a single article.
const articles: NewsArticle[] = [getNewsArticle()];

export const getNews = (req: Request, res: Response): void => {
  try {
    const { page = '1', size = '10' } = req.query;
    const parsedPage = parseInt(page as string, 10);
    const parsedSize = parseInt(size as string, 10);

    if (isNaN(parsedPage) || isNaN(parsedSize) || parsedPage <= 0 || parsedSize <= 0) {
      res.status(400).json({ error: 'Invalid page or size parameters' });
      return;
    }

    // Calculate the start and end indices for pagination
    const startIndex = (parsedPage - 1) * parsedSize;
    const endIndex = parsedPage * parsedSize;

    // Get articles for the current page
    const articlesForPage = articles.slice(startIndex, endIndex);

    // Return the paginated articles
    renderNews(res, articlesForPage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
