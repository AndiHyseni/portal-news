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
import { EditAdmin } from "../../types/administration/administration";
import "../AddUsers/AddUsers.css";

export interface EditUserProps {
  editUser: EditAdmin;
  mutation: any;
}

export const EditUsers: React.FC<EditUserProps> = ({ editUser, mutation }) => {
  const navigate = useNavigate();
  const [visible, { toggle }] = useDisclosure(false);

  const [addRole, setAddRole] = useState<string | null>("");

  const roleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Registered", label: "Registered" },
  ];

  const form = useForm({
    initialValues: {
      role: editUser.role,
      userId: editUser.userId,
      userName: editUser.userName,
      confirmPassword: "",
      email: editUser.email,
      password: "",
    },
  });

  const handleSubmit = () => {
    mutation.mutate(
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
        <h1 className="addUserHeader">Edit User</h1>
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
