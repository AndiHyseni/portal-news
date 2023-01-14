import {
  Box,
  Button,
  Group,
  Modal,
  Switch,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCategories } from "../../hooks/useCategories/useCreateCategories";
import { Categories } from "../../types/categories/categories";

export interface CreateCategoriesModalProps {
  title: string;
  opened: boolean;
  onClose: () => void;
}

export const CreateCategoriesModal: React.FC<CreateCategoriesModalProps> = ({
  title,
  opened,
  onClose,
}) => {
  const createCategoriesMutation = useCreateCategories();
  const [showOnline, setShowOnline] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      categoryId: 0,
      name: "",
      description: "",
      showOnline: false,
    },
  });

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    createCategoriesMutation.mutate(
      {
        ...form.values,
        categoryId: +form.values.categoryId,
        showOnline: form.values.showOnline === true ? true : false,
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
        <form className="createNewsForm" onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            className="createCategoriesElement"
            size="sm"
            required
            label="Name"
            placeholder="Name..."
            {...form.getInputProps("name")}
          />
          <Textarea
            className="createCategoriesElement"
            size="sm"
            required
            label="Description"
            placeholder="Description..."
            {...form.getInputProps("description")}
          />
          <Switch
            label="Show Online"
            checked={showOnline}
            onChange={(event) => setShowOnline(event.currentTarget.checked)}
          />
          <Group position="right" mt="md">
            <Button
              data-testid="submit-button"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              color="red"
              data-testid="submit-button"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};
