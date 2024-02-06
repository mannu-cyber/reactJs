import "./home.css";
import Navbar from "../../component/navbar/Navbar";
import homeimg from "../../images/homeimg.jpeg";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CASE_STUDY } from "../../component/config";
import CaseCard from "../../component/case/CaseCard";



function Home() {
  const animate = useRef(null);
  const animatehead = useRef(null);
  const animeh5 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(animeh5.current.children, {
      opacity: 0,
      stagger: 0.1,
      y: 10,
      rotate: 20,
      transformOrigin: "center left ",
      start: "center left",
    })

      .from(animatehead.current.children, {
        opacity: 0,
        rotate: 8,
        y: 40,
        stagger: 0.1,
        transformOrigin: "center left",
        start: "center left",
      })

      .from(animate.current, {
        y: 20,

        opacity: 0,
      });
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline();
  // }, []);

  return (
    <>
 

      <Navbar />

      <div className="home">
        <div className="left" ref={animeh5}>
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

      <div className="second-page">
        <h1 className="case">
          Case Study <i className="ri-arrow-right-up-line"></i>
        </h1>
 

 <div className="case-study-wrapper">
      {CASE_STUDY.map((caseobj, index)=>{

        const {title, discritption}  = caseobj;
        return (<CaseCard title={title} discritption={discritption} key={index}/>)

      })}

      </div>
      </div>
    </>
  );
}

export default Home;
