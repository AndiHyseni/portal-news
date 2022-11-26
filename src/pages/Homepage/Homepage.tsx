import { BasePage } from "../../components/BasePage/BasePage";
import { Container } from "@mantine/core";
import { HomepageNews } from "../../components/HomepageNews/HomepageNews";
import { useNews } from "../../hooks/useNews/useNews";
import "./Homepage.css";

export const Homepage: React.FC = () => {
  const { data } = useNews();

  return (
    <BasePage>
      <Container>
        <div className="homepage">
          {data && <HomepageNews homenews={data} />}
        </div>
      </Container>
    </BasePage>
  );
};
