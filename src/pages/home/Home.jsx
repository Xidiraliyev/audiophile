import React from "react";
import { Link } from "react-router-dom";
// import '../../components/buttons/Button.css'
import "./Home.css";
import CategoryCards from "../../components/categoryCards/CategoryCards";

function Home() {
  return (
    // HER0
    <div>
      <div className="hero">
        <div className="hero__container container">
          <div className="hero__left">
            <p className="hero__subtitle">NEW PRODUCT</p>
            <h1 className="hero__title">XX99 Mark II Headphones</h1>
            <p className="hero__info-text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="headphones1" className="button button1">
              See product
            </Link>
          </div>
          <div className="hero__right"></div>
        </div>
      </div>
      <CategoryCards />
      {/* ABOUT ITEMS */}
      <div className="speaker1">
          
      </div>
    </div>
  );
}

export default Home;
