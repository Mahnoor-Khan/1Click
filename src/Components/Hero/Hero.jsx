import React from "react";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appleLogo from "../../assets/apple_logo.png";
import playstoreLogo from "../../assets/playstore_logo.png";
import heroMap from "../../assets/hero_map.png";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="descriptionSection">
          <div>
            <span className="heading">
              Team <span className="tracking">Tracking</span>{" "}
            </span>
            <span className="heading">Made Easy</span>
            <p className="description">
              A geolocation app that tracks you and your team members within a
              specified site and lets you send notifications that only activate
              when someone is within that site
            </p>
          </div>
          <div className="emailSection">
            <span className="emailHeading">Enjoy your 14 day free trial</span>
            <div className="emailAddress">
              <input type="email" placeholder="Email Address"></input>
              <button className="earlyBtn">
                Get Early Access
                <FontAwesomeIcon icon={faAngleRight} className="arrow" />
              </button>
            </div>
          </div>
          <div className="downloadSection">
            <span className="emailHeading">Download our App on </span>
            <div className="downloadBtns">
              <button className="downloadBtn">
                <img src={appleLogo} className="logos" />
                Apple Store
              </button>
              <button className="downloadBtn playstoreBtn">
                <img src={playstoreLogo} className="logos" />
                Play Store
              </button>
            </div>
          </div>
        </div>
        <img className="mapImg" src={heroMap} />
      </div>
    </>
  );
};

export default Hero;
