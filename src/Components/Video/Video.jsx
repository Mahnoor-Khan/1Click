import React from "react";
import "./Video.scss";
import sampleVideo from "../../assets/sample_video.mp4";
import heartIcon from "../../assets/heart_icon.png";

const Video = () => {
  return (
    <>
      <div className="videoPortion">
        <h3 className="videoHeading">
          Check out our Promo Video we have created for you{" "}
          <img className="heartIcon" src={heartIcon} />
        </h3>
        <video className="video" src={sampleVideo} controls width="992" />
      </div>
    </>
  );
};

export default Video;
