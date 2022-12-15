import { BaseUrl } from "../../enums/baseUrl";
import { CATEGORIES } from "../../enums/categories/url";
import { Categories } from "../../types/categories/categories";
import { axiosInstance } from "../config";

export const getCategories = async (): Promise<Categories[]> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${CATEGORIES.GET_CATEGORY}`
  );
  return data;
};
