import { Button, Image, Menu } from "@mantine/core";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Logout, User, UserPlus } from "tabler-icons-react";
import { UserContext } from "../../contexes/UserContext";
import { Role } from "../../types/auth/login";
import "../Navbar/Navbar.css";

export const Navbar = () => {
  const [userContext] = useContext(UserContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <Link to="/">
        <Image src="../../images/PN.png" height={50} width={50} />
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
          <Menu>
            <Menu.Target>
              <h1 className="username">
                {userContext.username}{" "}
                <ChevronDown
                  className="usernameArrow"
                  size={20}
                  strokeWidth={2}
                  color={"white"}
                />
              </h1>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => navigate(`/saved`)}>
                <h1 className="menuItem">Saved News</h1>
              </Menu.Item>
              <Menu.Item onClick={logout}>
                {" "}
                <Logout
                  className="logoutbutton"
                  size={20}
                  strokeWidth={2}
                  color={"black"}
                />
                <h1 className="menuItem">Logout</h1>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          {/* <Button onClick={logout}>
            <Logout
              className="logoutbutton"
              size={20}
              strokeWidth={2}
              color={"white"}
            />{" "}
            <h1>Logout</h1>
          </Button> */}
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
