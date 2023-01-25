import { BasePage } from "../../components/BasePage/BasePage";
import { Container } from "@mantine/core";
import { HomepageNews } from "../../components/HomepageNews/HomepageNews";
import { useNews } from "../../hooks/useNews/useNews";
import "./Homepage.css";
import { SiteNewsOnPage } from "../../components/SiteNewsOnPage/SiteNewsOnPage";
import { useRapport } from "../../hooks/useRaport/useRaport";
import { useContext } from "react";
import { UserContext } from "../../contexes/UserContext";
import { Administration } from "../../components/Administration/Administration";
import { Role } from "../../types/auth/login";
import { Sidebar } from "../../components/Administration/Sidebar";
import { MostWatchedNews } from "../../components/MostWatchedNews/MostWatchedNews";
import { useCategories } from "../../hooks/useCategories/useCategories";

export const Homepage: React.FC = () => {
  const { data } = useNews();
  const { data: raportData } = useRapport();
  const [userContext] = useContext(UserContext);
  const { data: categori } = useCategories();

  return (
    <>
      {(!userContext.token ||
        userContext.userRole?.includes(Role.REGISTERED)) && (
        <BasePage>
          <Container>
            <div className="homepage">
              {data && <HomepageNews homenews={data} />}
            </div>
            <div>
              {data && categori && (
                <SiteNewsOnPage homenews={data} categories={categori} />
              )}
            </div>
            <div>{data && <MostWatchedNews mostwatched={data} />}</div>
          </Container>
        </BasePage>
      )}
      {userContext.userRole?.includes(Role.ADMIN) && (
        <BasePage>
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Container style={{ width: "100%" }}>
              <div className="homepageadmin">
                {raportData && <Administration raport={raportData} />}
              </div>
            </Container>
          </div>
        </BasePage>
      )}
    </>
  );
};
