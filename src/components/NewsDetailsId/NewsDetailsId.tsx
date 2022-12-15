import { Button, Image } from "@mantine/core";
import { News } from "../../types/news/news";
import "../NewsDetailsId/NewsDetailsId.css";

export interface NewsDetailsProps {
  news: News | undefined;
}

export const NewsDetailsId: React.FC<NewsDetailsProps> = ({ news }) => {
  const videoDetails: string = news?.video!;
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
        {news?.tags.split(",").map((tag) => (
          <Button className="tagsButton" key={tag}>
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};
