import { Image } from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { User, UserPlus } from "tabler-icons-react";
import { UserContext } from "../../contexes/UserContext";
import { Role } from "../../types/auth/login";
import "../Navbar/Navbar.css";

export const Navbar = () => {
  const [userContext] = useContext(UserContext);
  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <Link to="/">
        <Image src="../images/PN.png" height={50} width={50} />
      </Link>
      {(!userContext.token ||
        userContext.userRole?.includes(Role.REGISTERED)) && (
        <div style={{ display: "flex" }}>
          <Link to="/">
            <div className="navbarItem">Bota</div>
          </Link>
          <Link to="/">
            <div className="navbarItem">Sport</div>
          </Link>
          <Link to="/">
            <div className="navbarItem">Ekonomi</div>
          </Link>
        </div>
      )}
      {userContext.token && (
        <div className="loginNavbar">
          <h1>{userContext.username}</h1>
          <h1 onClick={logout}>Logout</h1>
        </div>
      )}
      {!userContext.token && (
        <div className="loginNavbar">
          <Link to="/login">
            <User size={20} strokeWidth={2} color={"white"} />
          </Link>
          <Link
            to="/login"
            className="logintext"
            style={{ paddingRight: "10px" }}
          >
            <b>Login</b>
          </Link>
          <hr style={{ height: "20px", width: "0px" }} />
          <Link to="/register">
            <UserPlus
              size={20}
              strokeWidth={2}
              color={"white"}
              style={{ paddingLeft: "10px" }}
            />
          </Link>
          <Link to="/register" className="logintext">
            <b>Register</b>
          </Link>
        </div>
      )}
    </div>
  );
};
