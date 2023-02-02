import { Fragment, useContext } from "react";
import { SavedNewsPage } from "../../types/news/news";
import "../../pages/SavedNews/SavedNews.css";
import { Button, Image } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserContext } from "../../contexes/UserContext";
import { Role } from "../../types/auth/login";

export interface SavedNewsPageProps {
  savedNews: SavedNewsPage[];
  onDeleteSavedNews: (news: SavedNewsPage) => void;
}

export const SavedNewsC: React.FC<SavedNewsPageProps> = ({
  savedNews,
  onDeleteSavedNews,
}) => {
  var token: any =
    localStorage.getItem("jwt") != null
      ? jwtDecode(localStorage.getItem("jwt")!)
      : null;

  var role: string =
    token != null
      ? token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      : "";

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
              {role == "Registered" && (
                <Button component={Link} to={`/news/${news.newsId}`}>
                  Read more
                </Button>
              )}
              {role == "Admin" && (
                <Button component={Link} to={`/news/details/${news.newsId}`}>
                  Read more
                </Button>
              )}
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
