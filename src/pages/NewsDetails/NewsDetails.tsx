import { Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import { BasePage } from "../../components/BasePage/BasePage";
import { NewsDetailsId } from "../../components/NewsDetailsId/NewsDetailsId";
import { useNewsId } from "../../hooks/useNews/useNewsId";
import { useReactionsDetails } from "../../hooks/useReactions/useReactionsDetails";

export const NewsDetails: React.FC = () => {
  const { newsId } = useParams();
  const { data } = useNewsId(Number(newsId));
  const { data: reactionDetails } = useReactionsDetails(Number(newsId));

  return (
    <BasePage>
      <Container>
        {data && (
          <NewsDetailsId news={data} reactionDetails={reactionDetails![0]} />
        )}
      </Container>
    </BasePage>
  );
};
