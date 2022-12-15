export interface News {
  newsId: number;
  category: number;
  categoryId: number;
  content: string;
  image: string;
  subTitle: string;
  tags: string;
  title: string;
  video: string;
}

export interface CreateNewsPayload {
  categoryId: number;
  content: string;
  expireDate: string;
  image: string;
  isDeleted: Boolean;
  isFeatured: Boolean;
  newsId: number;
  subTitle: string;
  tags: string;
  title: string;
  video: string;
}
