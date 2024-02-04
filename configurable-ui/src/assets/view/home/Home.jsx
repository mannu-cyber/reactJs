import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import homeimg from "../../images/homeimg.jpeg";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Home() {
  const animate = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(animate.current, {
      y: 20,
    });

    
  }, []);

  const animatehead = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

tl.from(animatehead.current.children,{
  opacity: 0,
  rotate: 8,
  duration: 0.5,
  y: 40,
  stagger: 0.1,
  transformOrigin: "center left",
  start: "center left",

})

  },[])

  return (
    <>
      <Navbar />

      <div className="home">
        <div className="left">
          <h5>building</h5>
          <h5>stunnig</h5>
          <h5>products, </h5>
          <h5>creating </h5>
          <h5>attractive </h5>
          <h5>brands </h5>
        </div>
        <div className="center" ref={animatehead}>
          <h1>Design. </h1>
          <h1>Deveopment. </h1>
          <h1>Knowledge. </h1>
        </div>

        <div className="right">
          <img ref={animate} src={homeimg} alt="" />
        </div>
      </div>

      <h1>ths is home page</h1>
    </>
  );
}

export default Home;
