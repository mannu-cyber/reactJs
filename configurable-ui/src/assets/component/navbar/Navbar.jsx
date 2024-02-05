import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  const animate = useRef(null);
  const logoAni = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline();

tl.from(logoAni.current,{
  y:20,
opacity:0,
})

    .from(animate.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
    });
  }, []);

  return (
    <>
      <nav >
        <Link ref={logoAni} to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <div className="left" ref={animate}>
          <Link to="/work">Work</Link>
          <Link to="/company">Company</Link>
          <Link to="/blogs">Blog</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="right">
          <Link to="/login"></Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
