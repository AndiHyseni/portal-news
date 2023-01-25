import {
  Box,
  Button,
  Group,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUser } from "../../hooks/useUsers/useAddUser";
import "../AddUsers/AddUsers.css";

export const AddUsers: React.FC = () => {
  const navigate = useNavigate();
  const addUserMutation = useAddUser();
  const [visible, { toggle }] = useDisclosure(false);

  const [addRole, setAddRole] = useState<string | null>("");

  const roleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Registered", label: "Registered" },
  ];

  const form = useForm({
    initialValues: {
      role: "",
      userId: "",
      userName: "",
      confirmPassword: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {
    addUserMutation.mutate(
      {
        ...form.values,
        userId: form.values.userId,
      },
      {
        onSuccess: () => {
          navigate("/users");
        },
        // onError: (error: AxiosError<ApiError>) => {
        //   if (
        //     error.response?.data.errorMessage === ErrorMessage.MORE_CARACTERS
        //   ) {
        //     form.setFieldError("title", "error");
        //   }
        // },
      }
    );
  };

  return (
    <Box>
      <form className="addUserForm" onSubmit={form.onSubmit(handleSubmit)}>
        <h1 className="addUserHeader">Add User</h1>
        <hr />
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

        <Group className="addUserButtons">
          <Button color={"red"} onClick={() => navigate("/users")}>
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
