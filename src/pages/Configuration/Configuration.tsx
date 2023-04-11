import { Container } from "@mantine/core";
import { Sidebar } from "../../components/Administration/Sidebar";
import { BasePage } from "../../components/BasePage/BasePage";
import "../Configuration/Configuration.css";

export const Configuration: React.FC = () => {
  return (
    <BasePage>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Container style={{ width: "100%" }}>
          <div className="configurationDiv"></div>
        </Container>
      </div>
    </BasePage>
  );
};
