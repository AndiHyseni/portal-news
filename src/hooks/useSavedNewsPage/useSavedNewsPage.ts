import { useQuery } from "@tanstack/react-query";
import { savedNewsPage, savedOneNewsPage } from "../../api/news/news";

export const useSavedNewsPage = (userId: string) => {
  return useQuery(["useSavedNewsPage", userId], () => savedNewsPage(userId));
};

export const useSavedOneNewsPage = (userId: string) => {
  return useQuery(["useSavedNewsPage", userId], () => savedOneNewsPage(userId));
};
