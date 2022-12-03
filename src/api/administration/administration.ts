import { RAPPORT } from "../../enums/administration/administration";
import { BaseUrl } from "../../enums/baseUrl";
import { Rapport } from "../../types/administration/administration";
import { axiosInstance } from "../config";

export const getRapport = async (): Promise<Rapport> => {
  const { data } = await axiosInstance.get(
    `${BaseUrl.DEVELOPMENT}/${RAPPORT.RAPPORT}`
  );
  return data;
};
