import {
  Box,
  Button,
  Group,
  Modal,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Users } from "../../types/administration/administration";
import "../AddUsers/AddUsers.css";

export interface EditUsersModalProps {
  user: Users;
  title: string;
  opened: boolean;
  onClose: () => void;
  mutation: any;
}

export const EditUsersModal: React.FC<EditUsersModalProps> = ({
  user,
  title,
  opened,
  onClose,
  mutation,
}) => {
  const [visible, { toggle }] = useDisclosure(false);

  const [addRole, setAddRole] = useState<string | null>("");

  const roleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Registered", label: "Registered" },
  ];

  const form = useForm({
    initialValues: {
      role: user.role,
      userId: user.userId,
      userName: user.userName,
      confirmPassword: "",
      email: user.email,
      password: "",
    },
  });

  const handleClose = () => {
    onClose();
    window.location.reload();
  };

  const handleSubmit = () => {
    mutation.mutate(
      {
        ...form.values,
        userId: form.values.userId,
      },
      {
        onSuccess: () => {
          handleClose();
          window.location.reload();
        },
      }
    );
  };

  return (
    <Modal
      centered
      data-testid="edit-modal"
      size="lg"
      title={title}
      opened={opened}
      onClose={handleClose}
    >
      <Box>
        <form className="createNewsForm" onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            className="addUserElement"
            size="sm"
            required
            label="Name"
            placeholder="Name..."
            {...form.getInputProps("userName")}
          />
          <TextInput
            className="addUserElement"
            size="sm"
            required
            label="Email"
            placeholder="Email..."
            {...form.getInputProps("email")}
          />
          <PasswordInput
            className="addUserElement"
            {...form.getInputProps("password")}
            required
            label="Password"
            placeholder="Enter Password..."
            visible={visible}
            onVisibilityChange={toggle}
          />
          <PasswordInput
            className="addUserElement"
            {...form.getInputProps("confirmPassword")}
            required
            label="Confirm password"
            placeholder="Confirm Password..."
            visible={visible}
            onVisibilityChange={toggle}
          />
          <Select
            className="addUserElement"
            label="Role"
            placeholder="Role..."
            data={roleOptions}
            {...form.getInputProps("role")}
            searchable
            maxDropdownHeight={400}
            required
            value={addRole}
            onChange={(addRole) => setAddRole(addRole)}
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
