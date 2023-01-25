import React, { useContext } from "react";
import { UserContext } from "../../contexes/UserContext";
import { useCategories } from "../../hooks/useCategories/useCategories";
import { Role } from "../../types/auth/login";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export interface BasePageProps {
  children?: React.ReactNode;
}

export const BasePage: React.FC<BasePageProps> = ({ children }) => {
  const [userContext] = useContext(UserContext);
  const { data } = useCategories();

  return (
    <div>
      {data && <Navbar categories={data} />}
      {children}
      {!userContext.userRole?.includes(Role.ADMIN) && data && (
        <Footer categories={data} />
      )}
    </div>
  );
};
