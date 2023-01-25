import { useNavigate } from "react-router-dom";
import { Button, Image } from "@mantine/core";
import { News } from "../../types/news/news";
import "../MostWatchedNews/MostWatchedNews.css";
import { Carousel } from "@mantine/carousel";

export interface NewsProps {
  mostwatched: News[];
}

export const MostWatchedNews: React.FC<NewsProps> = ({ mostwatched }) => {
  const navigate = useNavigate();
  return (
    <div className="mostwatchedpage">
      <h1 className="mostwatched">Më të shikuarat</h1>
      <>
        <Carousel
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={1}
        >
          {mostwatched.map((news, index) => (
            <>
              <Carousel.Slide>
                <div key={index} className="mostwatcheddiv">
                  <Image src={news.image} className="mostwatchedimage" />
                  <div className="mostwatchedsite">
                    <h2 className="mostwatchedtitle">{news.title}</h2>
                    <Button
                      className="readMoreOnMostWatched"
                      onClick={() => {
                        navigate(`/news/${news.newsId}`);
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Carousel.Slide>
            </>
          ))}
        </Carousel>
      </>
    </div>
  );
};
