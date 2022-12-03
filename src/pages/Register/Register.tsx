import { Button, Image, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import "../Register/Register.css";

export interface RegisterProps {
  mutation: any;
}

export const Register: React.FC<RegisterProps> = ({ mutation }) => {
  const [visible, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = () => {
    mutation.mutate(
      {
        ...form.values,
      },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <>
      <form className="registerForm" onSubmit={form.onSubmit(handleSubmit)}>
        <div className="registerHeader">
          <Image
            className="registerImage"
            src="../../images/PN.png"
            height={60}
            width={60}
          />
          <h1 className="registerH1text">Register</h1>
        </div>
        <Stack className="register" sx={{ maxWidth: 380 }} mx="auto">
          <TextInput
            {...form.getInputProps("email")}
            placeholder="Enter your email address"
            label="Email"
            withAsterisk
          />
          <PasswordInput
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Enter your password"
            visible={visible}
            onVisibilityChange={toggle}
          />
          <PasswordInput
            className="confirmPassword"
            {...form.getInputProps("confirmPassword")}
            label="Confirm password"
            placeholder="Confirm your password"
            visible={visible}
            onVisibilityChange={toggle}
          />
          <Button className="registerButton" type="submit">
            Register
          </Button>
        </Stack>
      </form>
    </>
  );
};
