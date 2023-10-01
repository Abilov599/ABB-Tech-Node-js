// views/newsView.ts
import { Response } from 'express';
import { NewsArticle } from '../models/newsModel';

export const renderNews = (res: Response, newsArticles: NewsArticle | NewsArticle[]): void => {
  res.json(newsArticles);
};
