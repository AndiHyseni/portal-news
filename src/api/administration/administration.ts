import {
  RAPPORT,
  USERS,
  VIEWS,
} from "../../enums/administration/administration";
import { BaseUrl } from "../../enums/baseUrl";
import {
  Rapport,
  Users,
  Views,
  ViewsDetails,
} from "../../types/administration/administration";
import { axiosInstance } from "../config";

export const getRapport = async (): Promise<Rapport> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${RAPPORT.RAPPORT}`
  );
  return data;
};

export const getUsers = async (): Promise<Users[]> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${USERS.GET_USERS}`
  );
  return data;
};

export const deleteUsers = async (userId: string): Promise<void> => {
  const { data } = await axiosInstance.delete(
    `${BaseUrl.DEVELOPMENT}/${USERS.GET_ACCOUNT}/${userId}`
  );
  return data;
};

export const getViews = async (): Promise<Views[]> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${VIEWS.GET_VIEWS}`
  );
  return data;
};

export const getViewsDetails = async (
  newsId: number
): Promise<ViewsDetails[]> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${VIEWS.GET_WATCHED}/${newsId}`
  );
  return data;
};
