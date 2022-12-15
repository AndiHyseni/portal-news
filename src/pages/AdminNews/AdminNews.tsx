import { Button, Container } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { CirclePlus } from "tabler-icons-react";
import { Sidebar } from "../../components/Administration/Sidebar";
import { BasePage } from "../../components/BasePage/BasePage";
import { NewsTable } from "../../components/Tables/NewsTable";
import { useNews } from "../../hooks/useNews/useNews";

export const AdminNews: React.FC = () => {
  const { data } = useNews();
  const navigate = useNavigate();
  return (
    <BasePage>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Container>
          <Button onClick={() => navigate("/news/add")}>
            <CirclePlus size={20} strokeWidth={2} color={"white"} />
            Add News
          </Button>
          {data && <NewsTable newses={data} />}
        </Container>
      </div>
    </BasePage>
  );
};
