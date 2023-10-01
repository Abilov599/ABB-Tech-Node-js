// models/newsModel.ts
export interface NewsArticle {
  id: number;
  title: string;
  text: string;
}

const newsArticle: NewsArticle = {
  id: 3,
  title: 'A Fox in Chernihiv Zoo Gives Birth to a Cub',
  text: 'A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!',
};

export const getNewsArticle = (): NewsArticle => {
  return newsArticle;
};
