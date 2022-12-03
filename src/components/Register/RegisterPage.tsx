import { Container } from "@mantine/core";
import { useRegister } from "../../hooks/useAuth/useRegister";
import { Register } from "../../pages/Register/Register";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const RegisterPage: React.FC = () => {
  const createRegisterMutation = useRegister();
  return (
    <>
      <Navbar />
      <Container>
        <Register mutation={createRegisterMutation} />
      </Container>
      <Footer />
    </>
  );
};
