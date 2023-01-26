import React from "react";
import "./Performance.scss";
import rocketIcon from "../../assets/rocket_icon.png";
import clockIcon from "../../assets/clock_icon.png";
import locationIcon from "../../assets/location_icon.png";
import notificationIcon from "../../assets/notification_icon.png";
import dollarIcon from "../../assets/dollar_icon.png";
import cloudIcon from "../../assets/cloud_icon.png";

const Performance = () => {
  return (
    <div className="performancePortion">
      <h1 className="performanceHeading">
        <img className="rocketIcon" src={rocketIcon} />
        Boost your performance
      </h1>
      <div className="performancePoints">
        <div className="performancePointsOne">
          <div className="points">
            <div className="pointsData">
              <img className="pointIcon" src={clockIcon} />
              <h2 className="pointHeading">Time Metrics</h2>
              <p className="pointDescription">
                Gain insights into how much time you and your team are actually
                spending on a task
              </p>
            </div>
          </div>
          <div className="points">
            <div className="pointsData">
              <img className="pointIcon" src={locationIcon} />
              <h2 className="pointHeading">Team Tracking</h2>
              <p className="pointDescription">
                Find out where anyone is without having to waste time contacting
                them Automate checking in or out of your sites without the need
                to do anything.
              </p>
            </div>
          </div>
          <div className="points">
            <div className="pointsData">
              <img className="pointIcon" src={notificationIcon} />
              <h2 className="pointHeading">Notifications</h2>
              <p className="pointDescription">
                You can create messages that will automatically be triggered and
                sent the moment the relevant team member enters or leaves the
                site
              </p>
            </div>
          </div>
        </div>
        <div className="performancePointsTwo">
          <div className="points">
            <div className="pointsData">
              <img className="pointIcon" src={cloudIcon} />
              <h2 className="pointHeading">Business Modernisation</h2>
              <p className="pointDescription">
                Use our time analytics data to upgrade your operational
                workflow.
              </p>
            </div>
          </div>
          <div className="points">
            <div className="pointsData">
              <img className="pointIcon" src={dollarIcon} />
              <h2 className="pointHeading">Enhanced profitability</h2>
              <p className="pointDescription">
                With 1Click logging your own or teams attendance, you won't lose
                out on hours you didn't record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
