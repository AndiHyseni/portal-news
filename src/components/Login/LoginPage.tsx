import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useLogin } from "../../hooks/useAuth/useLogin";
import { Login } from "../../pages/Login/Login";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const LoginPage: React.FC = () => {
  const createLoginMutation = useLogin();

  useEffect(() => {
    console.log("mutation", createLoginMutation);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Login mutation={createLoginMutation} />
      </Container>
      <Footer />
    </>
  );
};
