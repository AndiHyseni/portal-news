import { Box, Button, Group, Modal, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Users } from "../../types/administration/administration";
import { News, SavedNewsPage } from "../../types/news/news";

export interface DeleteSavedNewsModalProps {
  savedNews: SavedNewsPage;
  userId: Users;
  title: string;
  text: string;
  opened: boolean;
  mutation: any;
  onClose: () => void;
}

export const DeleteSavedNewsModal: React.FC<DeleteSavedNewsModalProps> = ({
  savedNews,
  userId,
  title,
  text,
  opened,
  mutation,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    mutation.mutate(
      {
        newsId: savedNews.newsId,
        userId: userId.userId,
      },
      {
        onSuccess: () => {
          handleClose();
        },
      }
    );
  };

  return (
    <Modal
      centered
      data-testid="delete-modal"
      size="lg"
      title={title}
      opened={opened}
      onClose={handleClose}
    >
      <Box>
        <Text size="sm">{text}</Text>
        <Group position="right" mt="md">
          <Button
            data-testid="submit-button"
            type="button"
            onClick={handleSubmit}
          >
            Yes
          </Button>
          <Button
            color="red"
            data-testid="submit-button"
            type="button"
            onClick={handleClose}
          >
            No
          </Button>
        </Group>
      </Box>
    </Modal>
  );
};
