import express, { Application } from 'express';
import 'dotenv/config';
import newsRouter from './routes/newsRouted';

const app: Application = express();

// Use routes
app.use(newsRouter);

// Start the server
const PORT: number = parseInt(process.env.PORT || '3000', 10);
const HOST: string = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}/news`);
});
