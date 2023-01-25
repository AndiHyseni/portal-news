import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useLogin } from "../../hooks/useAuth/useLogin";
import { useCategories } from "../../hooks/useCategories/useCategories";
import { Login } from "../../pages/Login/Login";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const LoginPage: React.FC = () => {
  const createLoginMutation = useLogin();
  const { data } = useCategories();

  useEffect(() => {
    console.log("mutation", createLoginMutation);
  }, []);

  return (
    <>
      {data && <Navbar categories={data} />}
      <Container>
        <Login mutation={createLoginMutation} />
      </Container>
      {data && <Footer categories={data} />}
    </>
  );
};
