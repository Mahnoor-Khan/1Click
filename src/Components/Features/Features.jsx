import React from "react";
import "./Features.scss";
import starIcon from "../../assets/star_icon.png";
import logo from "../../assets/1Click.png";
import bullet from "../../assets/bullet_icon.png";
import appleLogo from "../../assets/apple_logo.png";
import settingsIcon from "../../assets/settings_icon.png";
import brainIcon from "../../assets/brain_icon.png";
import handIcon from "../../assets/hand_icon.png";
import paperIcon from "../../assets/paper_icon.png";
import groupIcon from "../../assets/group_icon.png";
import fileIcon from "../../assets/file_icon.png";
import mobileImg from "../../assets/mobile_img.png";
import playstoreLogo from "../../assets/playstore_logo.png";

const Features = () => {
  return (
    <>
      <div className="features">
        <h1 className="featuresHeading">
          <img className="featureHeadingIcon" src={starIcon} /> Designed to be
          simple
        </h1>
        <div className="featureDesAndImg">
          <div className="featuresDescriptions">
            <div>
              <h3 className="feature">
                <img className="bullet" src={bullet} />
                No Trainings
              </h3>
              <p className="description">
                Save time in trying to figure out a new piece of tech. 1Click is
                quick and easy to use.
              </p>
            </div>
            <div>
              <h3 className="feature">
                <img className="bullet" src={bullet} />
                Reliable and Convenient
              </h3>
              <p className="description">
                It works! Providing precise location data on any number of team
                members across multiple site.
              </p>
            </div>
            <div>
              <h3 className="feature">
                <img className="bullet" src={bullet} />
                Real-Time updates
              </h3>
              <p className="description">
                Fine tune your team’s time management and increase the
                efficiency of your business.
              </p>
            </div>
            <div className="downloadSection">
              <img className="logo" src={logo} />
              <div className="download">
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
          </div>
          <img className="mobileImg" src={mobileImg} />
        </div>
        <div className="trySection">
          <h1 className="tryHeading">Why should you try 1Click ?</h1>
          <div className="tryPoints">
            <div className="tryPointRowOne">
              <h1 className="tryPoint">
                <img className="tryPointIcon" src={handIcon} />
                Its simple to use
              </h1>
              <h1 className="tryPoint">
                <img className="tryPointIcon" src={brainIcon} />
                Enables you make better decision
              </h1>
              <h1 className="tryPoint">
                <img className="tryPointIcon" src={settingsIcon} />
                Completely Automated
              </h1>
            </div>
            <div className="tryPointRowTwo">
              <h1 className="tryPoint">
                <img className="tryPointIcon" src={fileIcon} />
                Makes sight safer and organized
              </h1>
              <h1 className="tryPoint">
                <img className="tryPointIcon" src={groupIcon} />
                Creates productive teams
              </h1>
              <h1 className="tryPoint">
                <img className="tryPointIcon" src={paperIcon} />
                Less Paperwork
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
