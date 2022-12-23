export interface News {
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

export interface SavedNewsPayload {
  newsId: number;
  userId: string;
}
