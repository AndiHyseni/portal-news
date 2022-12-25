import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/Login/LoginPage";
import { RegisterPage } from "../components/Register/RegisterPage";
import { AddNewsPage } from "../pages/AdminNews/AddNewsPage";
import { AdminNews } from "../pages/AdminNews/AdminNews";
import { EditNewsPage } from "../pages/AdminNews/EditNewsPage";
import { AdminNewsDetails } from "../pages/AdminNewsDetails/AdminNewsDetails";
import { AdminUsers } from "../pages/AdminUsers/AdminUsers";
import { Homepage } from "../pages/Homepage/Homepage";
import { NewsDetails } from "../pages/NewsDetails/NewsDetails";
import { ErrorPage } from "./ErrorPage";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
        <Route path="/denied" element={<ErrorPage />} />
        <Route path="/news" element={<AdminNews />} />
        <Route path="/news/add" element={<AddNewsPage />} />
        <Route path="/news/details/:newsId" element={<AdminNewsDetails />} />
        <Route path="/news/edit/:newsId" element={<EditNewsPage />} />
        <Route path="/users" element={<AdminUsers />} />
      </Routes>
    </BrowserRouter>
  );
};
