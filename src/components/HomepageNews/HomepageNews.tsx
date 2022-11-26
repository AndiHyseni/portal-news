import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { Fragment } from "react";
import { News } from "../../types/news/news";
import "./HomepageNews.css";

export interface NewsProps {
  homenews: News[];
}

export const HomepageNews: React.FC<NewsProps> = ({ homenews }) => {
  console.log("news", homenews);

  return (
    <div>
      <>
        {homenews.map((news, index) => (
          <Fragment key={index}>
            <Carousel
              sx={{ maxWidth: 320 }}
              mx="auto"
              withIndicators
              height={500}
            >
              <Carousel.Slide>
                <Image src={news.image} />
              </Carousel.Slide>
            </Carousel>
            <h1>{news.title}</h1>
          </Fragment>
        ))}
      </>
    </div>
  );
};
