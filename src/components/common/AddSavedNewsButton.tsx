import { Button } from "@mantine/core";
import { Heart } from "tabler-icons-react";
import jwt_decode from "jwt-decode";
import { News, SavedNewsPayload } from "../../types/news/news";
import "../NewsDetailsId/NewsDetailsId.css";
import { Users } from "../../types/administration/administration";
import jwtDecode from "jwt-decode";

export interface SavedNewsProps {
  newsId: number;
  savedNews: SavedNewsPayload | undefined;
  mutation: any;
}

export const AddSavedNewsButton: React.FC<SavedNewsProps> = ({
  newsId,
  savedNews,
  mutation,
}) => {
  const token: any =
    localStorage.getItem("jwt") != null
      ? jwtDecode(localStorage.getItem("jwt")!)
      : null;
  const newsIds = Number(newsId);
  const userIds =
    token[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];

  const handleSubmit = () => {
    mutation.mutate({
      newsId: newsIds,
      userId: userIds,
    });
  };

  return (
    <>
      {
        <Button className="detailsButtonList" onClick={() => handleSubmit()}>
          <Heart size={20} strokeWidth={2} color={"white"} /> Save
        </Button>
      }
    </>
  );
};
