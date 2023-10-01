import express, { Application } from 'express';
import 'dotenv/config';
import newsRouter from './routes/newsRoutes';
import { loggingMiddleware } from './middleware/loggingMiddleware';

const app: Application = express();

// Use JSON body parser
app.use(express.json());
// Use the logging middleware
app.use(loggingMiddleware);
// Use routes
app.use('/api', newsRouter);

// Start the server
const PORT: number = parseInt(process.env.PORT || '3000', 10);
const HOST: string = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}/api/news`);
});
