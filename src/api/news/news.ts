import { BaseUrl } from "../../enums/baseUrl";
import { NEWS } from "../../enums/news/url";
import { ApiResponse } from "../../types/api/ApiResponse";
import { News } from "../../types/news/news";
import { axiosInstance } from "../config";

export const getNews = async (): Promise<News[]> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${NEWS.GET_NEWS}`
  );
  return data;
};

export const getNewsId = async (newsId: number): Promise<News[]> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${NEWS.GET_NEWSID}/${newsId}`
  );
  return data;
};
