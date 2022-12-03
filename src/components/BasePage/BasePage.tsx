import React, { useContext } from "react";
import { UserContext } from "../../contexes/UserContext";
import { Role } from "../../types/auth/login";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export interface BasePageProps {
  children?: React.ReactNode;
}

export const BasePage: React.FC<BasePageProps> = ({ children }) => {
  const [userContext] = useContext(UserContext);

  return (
    <div>
      <Navbar />
      {children}
      {!userContext.userRole?.includes(Role.ADMIN) && <Footer />}
    </div>
  );
};
