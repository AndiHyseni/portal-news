import { Button, Image, Text } from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import jwtDecode from "jwt-decode";
import { useParams } from "react-router-dom";
import { Heart } from "tabler-icons-react";
import { addReaction } from "../../api/administration/administration";
import { useAddReaction } from "../../hooks/useReactions/useAddReactions";
import { useReactionsDetails } from "../../hooks/useReactions/useReactionsDetails";
import {
  AddReaction,
  ReactionsDetails,
} from "../../types/administration/administration";
import { News } from "../../types/news/news";
import "../NewsDetailsId/NewsDetailsId.css";

export interface NewsDetailsProps {
  news: News;
  reactionDetails: ReactionsDetails;
}

export const NewsDetailsId: React.FC<NewsDetailsProps> = ({
  news,
  reactionDetails,
}) => {
  const videoDetails: string = news?.video!;
  const [count1, handlers1] = useCounter(0, { min: 0, max: 10000 });
  const [count2, handlers2] = useCounter(0, { min: 0, max: 10000 });
  const [count3, handlers3] = useCounter(0, { min: 0, max: 10000 });
  const addReactionMutation = useAddReaction();
  const { data } = useReactionsDetails(news.newsId);

  var token: any =
    localStorage.getItem("jwt") != null
      ? jwtDecode(localStorage.getItem("jwt")!)
      : null;

  var id: string =
    token != null
      ? token[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ]
      : news.userId;
  const handleSubmit = (reaction: number) => {
    addReactionMutation.mutate({
      newsId: news.newsId,
      userId: id,
      reaction: reaction,
    });
  };

  return (
    <div className="details">
      <Image src={news?.image} />
      <h1 className="titleDetails">{news?.title}</h1>
      <h2 className="subtitleDetails">{news?.subTitle}</h2>
      <p className="contentDetails">{news?.content}</p>
      {
        <div
          className="videoDetails"
          dangerouslySetInnerHTML={{ __html: videoDetails }}
        ></div>
      }
      <div className="tagsDetails">
        {news?.tags != null &&
          news?.tags.split(",").map((tag) => (
            <Button className="tagsButton" key={tag}>
              {tag}
            </Button>
          ))}
      </div>
      <div className="savedButton">
        <Button className="tagsButton">
          <Heart size={25} strokeWidth={2} color={"white"} />
        </Button>
      </div>
      <div className="reactions">
        <h1 className="reactionTitle">Cili është reagimi juaj për këtë?</h1>
        <div className="reactionEmoji">
          <Text className="counter">{count1}</Text>
          <Image
            onClick={() => handleSubmit(1)}
            src="../../images/happy.png"
            className="reactionImage"
            height={150}
            width={150}
          />
          <Text className="counter">{count2}</Text>
          <Image
            onClick={() => handleSubmit(2)}
            src="../../images/sad.png"
            className="reactionImage"
            height={150}
            width={150}
          />
          <Text className="counter">{count3}</Text>
          <Image
            onClick={() => handleSubmit(3)}
            src="../../images/angry.jpg"
            className="reactionImage"
            height={150}
            width={150}
          />
        </div>
      </div>
    </div>
  );
};
