import { Button } from "@mantine/core";
import { Heart } from "tabler-icons-react";
import jwt_decode from "jwt-decode";
import { News, SavedNewsPayload } from "../../types/news/news";
import "../NewsDetailsId/NewsDetailsId.css";

export interface SavedNewsProps {
  newsId: number;
  userId: string;
  savedNews: SavedNewsPayload | undefined;
  mutation: any;
}

export const AddSavedNewsButton: React.FC<SavedNewsProps> = ({
  newsId,
  userId,
  savedNews,
  mutation,
}) => {
  const newsIds = Number(newsId);
  const userIds = savedNews?.userId;

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