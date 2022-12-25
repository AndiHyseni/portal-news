import { RAPPORT, USERS } from "../../enums/administration/administration";
import { BaseUrl } from "../../enums/baseUrl";
import { Rapport, Users } from "../../types/administration/administration";
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
