import { useParams } from "react-router-dom";
import { useNewsId } from "../../hooks/useNews/useNewsId";

export const NewsDetails: React.FC = () => {
  const { newsId } = useParams();
  const { data } = useNewsId(Number(newsId));
  console.log("Andi", data);
  return <div>Andi</div>;
};
