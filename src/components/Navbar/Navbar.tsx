import { Image } from "@mantine/core";
import { Link } from "react-router-dom";
import { User, UserPlus } from "tabler-icons-react";
import "../Navbar/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Image src="../images/PN.png" height={50} width={50} />
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
      <div className="loginNavbar">
        <User size={20} strokeWidth={2} color={"white"} />
        <h1 style={{ paddingRight: "10px" }}>Login</h1>
        <hr style={{ height: "20px", width: "0px" }} />
        <UserPlus
          size={20}
          strokeWidth={2}
          color={"white"}
          style={{ paddingLeft: "10px" }}
        />
        <h1>Register</h1>
      </div>
    </div>
  );
};
