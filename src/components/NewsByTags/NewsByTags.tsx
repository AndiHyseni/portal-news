import { Image } from "@mantine/core";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useNewsByTags } from "../../hooks/useNews/useNewsByTags";
import { News } from "../../types/news/news";
import "../NewsByTags/NewsByTags.css";

export interface NewsByTagsProps {
  news: News[];
}

export const NewsByTagsC: React.FC<NewsByTagsProps> = ({ news }) => {
  const { tags } = useParams();
  const { data: tagNews } = useNewsByTags(String(tags));
  const navigate = useNavigate();

  return (
    <>
      {tagNews && tagNews.length > 0 ? (
        tagNews.map((news, index) => {
          return (
            <Fragment key={index}>
              <div className="newsByTags">
                <div className="newsByTagsBox">
                  <Image
                    className="newsByTagsImage"
                    src={news.image}
                    onClick={() => navigate(`/news/${news.newsId}`)}
                  />
                  <div
                    className="newsByTagsTitle"
                    onClick={() => navigate(`/news/${news.newsId}`)}
                  >
                    {news.title}
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })
      ) : (
        <div>No news found for this tag.</div>
      )}
    </>
  );
};
