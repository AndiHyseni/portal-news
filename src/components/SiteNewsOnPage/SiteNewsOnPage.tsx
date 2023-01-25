import { Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Categories } from "../../types/categories/categories";
import { News } from "../../types/news/news";
import "../SiteNewsOnPage/SiteNewsOnPage.css";

export interface NewsProps {
  homenews: News[];
  categories: Categories[];
}

export const SiteNewsOnPage: React.FC<NewsProps> = ({
  homenews,
  categories,
}) => {
  const navigate = useNavigate();
  return (
    <div className="sitepage">
      <h1 className="fokus">Në Fokus</h1>
      <>
        {homenews.map((news, index) => (
          <div key={index} className="sitediv">
            <Image
              src={news.image}
              className="siteimage"
              onClick={() => {
                navigate(`/news/${news.newsId}`);
              }}
            />
            <div className="site">
              <h2
                className="sitetitle"
                onClick={() => {
                  navigate(`/news/${news.newsId}`);
                }}
              >
                {news.title}
              </h2>
              <p className="sitep">
                <>
                  {categories
                    .filter((x) => x.categoryId == news.categoryId)
                    .map((news) => {
                      return (
                        <div
                          className="sitec"
                          onClick={() => {
                            navigate(`/category/${news.categoryId}`);
                          }}
                        >
                          {news.name}
                        </div>
                      );
                    })}
                </>
              </p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
