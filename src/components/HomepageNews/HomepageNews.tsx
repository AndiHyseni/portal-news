import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { Fragment } from "react";
import { News } from "../../types/news/news";
import "./HomepageNews.css";

export interface NewsProps {
  homenews: News[];
}

export const HomepageNews: React.FC<NewsProps> = ({ homenews }) => {
  const sortedHomepageNews = [...homenews].sort((a, b) => b.newsId - a.newsId);

  return (
    <div>
      <>
        <Carousel sx={{ maxWidth: 1500 }} mx="auto" loop withIndicators>
          {sortedHomepageNews.map((news, index) => (
            <Fragment key={index}>
              <Carousel.Slide>
                <Image src={news.image} />
                <div className="shadow">
                  <h1 className="title">{news.title}</h1>
                  <p className="subtitle">{news.subTitle}</p>
                </div>
              </Carousel.Slide>
            </Fragment>
          ))}
        </Carousel>
      </>
    </div>
  );
};
