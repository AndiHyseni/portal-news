import { Image } from "@mantine/core";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { addViews } from "../../api/administration/administration";
import { AddViewModel } from "../../types/administration/administration";
import { Categories } from "../../types/categories/categories";
import { News } from "../../types/news/news";
import "../SiteNewsOnPage/SiteNewsOnPage.css";

export interface NewsProps {
  homenews: News[];
  categories: Categories[];
}
var token: any =
  localStorage.getItem("jwt") != null
    ? jwtDecode(localStorage.getItem("jwt")!)
    : "";

var id: string =
  token != null
    ? token[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ]
    : "";

export const SiteNewsOnPage: React.FC<NewsProps> = ({
  homenews,
  categories,
}) => {
  const navigate = useNavigate();

  const addView = (newsId: number) => {
    const model: AddViewModel = {
      userId: id,
      newsId: newsId,
      fingerPrintId: "",
      watchId: 2,
    };
    addViews(model);
  };

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
                addView(news.newsId);
                navigate(`/news/${news.newsId}`);
              }}
            />
            <div className="site">
              <h2
                className="sitetitle"
                onClick={() => {
                  addView(news.newsId);
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
