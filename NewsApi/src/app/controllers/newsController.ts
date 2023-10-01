import { Request, Response } from 'express';
import newsData from '../../data/newsData.json'; // Load news data
import { NewsArticle } from '../models/newsModel';

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
    const articlesForPage: NewsArticle[] = newsData.slice(startIndex, endIndex);

    res.json(articlesForPage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
