import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="" className="logo" />

        <div className="left">
          <a href="#">Work</a>
          <a href="#">Company</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
          <a href="#">Contact</a>
        </div>
        <div className="right">
          <a href="#">Login/SignUP</a>
        </div>
      </nav>

      <div className="hero">
        <div className="brand"></div>
        <div className="center"></div>

        <div className="img"></div>
      </div>
    </>
  );
}

export default Navbar;
