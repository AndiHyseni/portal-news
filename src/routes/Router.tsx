import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/Login/LoginPage";
import { RegisterPage } from "../components/Register/RegisterPage";
import { Homepage } from "../pages/Homepage/Homepage";
import { Login } from "../pages/Login/Login";
import { NewsDetails } from "../pages/NewsDetails/NewsDetails";
import { Register } from "../pages/Register/Register";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
