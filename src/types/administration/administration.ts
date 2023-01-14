export interface Rapport {
  admins: number;
  angry: number;
  categories: number;
  happy: number;
  news: number;
  sad: number;
  saved: number;
  users: number;
  vIews: number;
}

export interface Users {
  email: string;
  role: string;
  userId: string;
  userName: string;
}

export interface Views {
  id: number;
  newsTitle: string;
  nrOfClicks: number;
}

export interface ViewsDetails {
  fingerPrintId: string;
  news: string;
  newsId: number;
  user: string;
  userId: string;
  watchId: number;
  watchedOn: string;
}
