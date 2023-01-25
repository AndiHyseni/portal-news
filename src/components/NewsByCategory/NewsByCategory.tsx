import { Image } from "@mantine/core";
import { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { News } from "../../types/news/news";
import "../NewsByCategory/NewsByCategory.css";

export interface NewsByCategoryProps {
  news: News[];
}

export const NewsByCategoryC: React.FC<NewsByCategoryProps> = ({ news }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {news
        .filter((x) => x.categoryId == Number(categoryId))
        .map((news, index) => {
          return (
            <Fragment key={index}>
              <div className="newsByCategory">
                <div className="newsByCategoryBox">
                  <Image
                    className="newsByCategoryImage"
                    src={news.image}
                    onClick={() => navigate(`/news/${news.newsId}`)}
                  />
                  <div
                    className="newsByCategoryTitle"
                    onClick={() => navigate(`/news/${news.newsId}`)}
                  >
                    {news.title}
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
    </>
  );
};
