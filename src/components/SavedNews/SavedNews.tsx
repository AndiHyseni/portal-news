import { Fragment } from "react";
import { SavedNewsPage } from "../../types/news/news";
import "../../pages/SavedNews/SavedNews.css";
import { Button, Image } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import { Link } from "react-router-dom";

export interface SavedNewsPageProps {
  savedNews: SavedNewsPage[];
  onDeleteSavedNews: (news: SavedNewsPage) => void;
}

export const SavedNewsC: React.FC<SavedNewsPageProps> = ({
  savedNews,
  onDeleteSavedNews,
}) => {
  return (
    <>
      {savedNews?.map((news, index) => (
        <Fragment key={index}>
          <div className="savedNews">
            <div className="savedNewsBox">
              <Image src={news.image} />
              <h1 className="savedNewsTitle">{news.title}</h1>
            </div>
            <div className="savedNewsButtons">
              <Button component={Link} to={`/news/details/${news.newsId}`}>
                Read more
              </Button>
              <Button
                color="red"
                onClick={() => {
                  onDeleteSavedNews(news);
                }}
              >
                <Trash size={20} strokeWidth={2} color={"white"} />
                Delete
              </Button>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
};
