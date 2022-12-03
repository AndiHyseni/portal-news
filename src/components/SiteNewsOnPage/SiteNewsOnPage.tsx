import { Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { News } from "../../types/news/news";
import "../SiteNewsOnPage/SiteNewsOnPage.css";

export interface NewsProps {
  homenews: News[];
}

export const SiteNewsOnPage: React.FC<NewsProps> = ({ homenews }) => {
  const navigate = useNavigate();
  return (
    <div className="sitepage">
      <h1 className="fokus">Në Fokus</h1>
      <>
        {homenews.map((news, index) => (
          <div
            key={index}
            className="sitediv"
            onClick={() => {
              navigate(`/news/${news.newsId}`);
            }}
          >
            <Image src={news.image} className="siteimage" />
            <div className="site">
              <h2 className="sitetitle">{news.title}</h2>
              <p className="sitep">
                {(news.categoryId === 1 && "Bota") ||
                  (news.categoryId === 2 && "Sport") ||
                  (news.categoryId === 3 && "Ekonomi")}
              </p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
