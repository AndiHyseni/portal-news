import { Button, Image, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";

export interface LoginProps {
  mutation: any;
}

export const Login: React.FC<LoginProps> = ({ mutation }) => {
  const [visible, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
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
      <form className="loginForm" onSubmit={form.onSubmit(handleSubmit)}>
        <div className="loginHeader">
          <Image
            className="registerImage"
            src="../../images/PN.png"
            height={60}
            width={60}
          />
          <h1 className="loginH1text">Login</h1>
        </div>
        <Stack className="login" sx={{ maxWidth: 380 }} mx="auto">
          <TextInput
            {...form.getInputProps("email")}
            placeholder="Enter your email address"
            label="Email"
            withAsterisk
          />
          <PasswordInput
            {...form.getInputProps("password")}
            className="loginpassword"
            placeholder="Enter your password"
            label="Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
          <Button className="loginButton" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
};
