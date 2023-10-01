// src/controllers/newsController.ts
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid'; // For generating UUIDs
import { NewsArticle } from '../models/newsModel';
import newsArticles from '../../data/newsData.json'; // Load news data

export const getAllNews = (req: Request, res: Response): void => {
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
    const articlesForPage = newsArticles.slice(startIndex, endIndex);

    res.json(articlesForPage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getNewsById = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const article = newsArticles.find((a) => a.id === id);

    if (!article) {
      res.status(404).json({ error: 'News article not found' });
      return;
    }

    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createNews = (req: Request, res: Response): void => {
  try {
    const { title, text } = req.body;

    // Generate a unique ID for the new article
    const id = uuidv4();

    // Create a new news article object
    const newArticle: NewsArticle = {
      id,
      title,
      text,
    };

    // Add the new article to the array
    newsArticles.push(newArticle);

    res.json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateNews = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    // Find the article by ID
    const articleIndex = newsArticles.findIndex((a) => a.id === id);

    if (articleIndex === -1) {
      res.status(404).json({ error: 'News article not found' });
      return;
    }

    // Update the article's title
    newsArticles[articleIndex].title = title;

    res.json(newsArticles[articleIndex]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteNews = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;

    // Find the index of the article to delete
    const articleIndex = newsArticles.findIndex((a) => a.id === id);

    if (articleIndex === -1) {
      res.status(404).json({ error: 'News article not found' });
      return;
    }

    // Remove the article from the array
    newsArticles.splice(articleIndex, 1);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
