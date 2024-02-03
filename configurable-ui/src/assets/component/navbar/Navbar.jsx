import React from "react";
import './navbar.css'

function Navbar() {
  return (
    <>
      <nav>
        <div className="left">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
        <div className="right">
            <a href="#">Login</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
