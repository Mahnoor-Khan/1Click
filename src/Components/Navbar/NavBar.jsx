import React from "react";
import "./Navbar.scss";
import logo from "../../assets/1Click.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <div className="menuItems">
        <span className="innerMenuItem">Home</span>
        <span className="innerMenuItem">Blog</span>
        <span className="innerMenuItem">Privacy Policy</span>
        <span className="innerMenuItem">Contact</span>
        <button className="getStrtBtn">
          Get Started
          <FontAwesomeIcon
            className="arrowIcon"
            icon={faAngleRight}
            size="2x"
            color="white"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
