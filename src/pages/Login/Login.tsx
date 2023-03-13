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
    validate: {
      email: (value) => {
        if (!value) {
          return "Email is required";
        }
        if (!/^\S+@\S+$/.test(value)) {
          return "Invalid email";
        }
        return null;
      },
      password: (value) => {
        if (!value) {
          return "Password is required";
        }
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }
        if (!/[a-z]/.test(value)) {
          return "Password must contain at least one lowercase letter";
        }
        if (!/\d/.test(value)) {
          return "Password must contain at least one number";
        }
        if (!/[$@#!%&*?]/.test(value)) {
          return "Password must contain at least one special character";
        }
        return null;
      },
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
        onError: () => {
          form.setErrors({ password: "Incorrect password" });
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
