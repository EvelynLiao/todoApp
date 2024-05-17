import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import landImg from "../assets/landBg.png";
import Intro from "../component/Intro";

const LandingPage = () => {

  return (
    <>
      <div className="land-container">
        <Intro
          title="Stay on Track, Stay on Top!"
          subtitle="Todo app helps you effortlessly organize tasks, prioritize with ease, 
        and achieve more every day!"
        />

        <div className="land-cta">
          <Link to="/todoPage">
            <button>Start for free</button>
          </Link>
        </div>

        <div className="land-img">
          <img src={landImg} alt="landing-img" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
