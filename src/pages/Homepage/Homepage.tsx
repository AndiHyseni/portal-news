import { BasePage } from "../../components/BasePage/BasePage";
import { Container } from "@mantine/core";

export const Homepage: React.FC = () => {
  return (
    <BasePage>
      <Container>
        <div className="homepage">Homepage</div>
      </Container>
    </BasePage>
  );
};
