import React from "react";
import "./About.scss";
import chargeIcon from "../../assets/charge_icon.png";
import user1 from "../../assets/user_1.png";
import user2 from "../../assets/user_2.png";
import user3 from "../../assets/user_3.png";
import user4 from "../../assets/user_4.png";
import user5 from "../../assets/user_5.png";
import user6 from "../../assets/user_6.png";
import oneIcon from "../../assets/one_icon.png";
import twoIcon from "../../assets/two_icon.png";
import threeIcon from "../../assets/three_icon.png";
import locationIcon from "../../assets/location_icon_2.png";
import privacyIcon from "../../assets/privacy_icon.png";
import dollarIcon from "../../assets/dollar_icon.png";
import cloudIcon from "../../assets/cloud_icon.png";

const About = () => {
  return (
    <div className="aboutSection">
      <div className="sectionOne">
        <h1 className="sectionOneHeading">
          <img className="chargeIcon" src={chargeIcon} />
          Endless <span className="applicationSpan">applications</span> of user
          case studies
        </h1>
        <div className="sectionOneCards">
          <div className="cardRows">
            <div className="card">
              <div className="cardData">
                <img className="userImg" src={user4} />
                <div className="aboutPosition">
                  <h3 className="position">Sport Owner</h3>
                  <p className="positionDescription">
                    Sports Coach Set tracks and areas, monitor performance
                    times, and use notifications to oversee head counts and
                    activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="cardData">
                <img className="userImg" src={user5} />
                <div className="aboutPosition">
                  <h3 className="position">Painter</h3>
                  <p className="positionDescription">
                    By tracking a 30-worker team, you’re able to identify who’s
                    on site and trigger task-specific messages the moment they
                    arrive.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="cardData">
                <img className="userImg" src={user6} />
                <div className="aboutPosition">
                  <h3 className="position">Shop Owner</h3>
                  <p className="positionDescription">
                    Send your customers special offers or allow them to redeem
                    gifts more effectively by knowing when they’re in store.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cardRows">
            <div className="card">
              <div className="cardData">
                <img className="userImg" src={user1} />
                <div className="aboutPosition">
                  <h3 className="position">Accountant</h3>
                  <p className="positionDescription">
                    Optimise your payroll by using our time metrics to fine tune
                    your business’s time management.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="cardData">
                <img className="userImg" src={user2} />
                <div className="aboutPosition">
                  <h3 className="position">Retailor</h3>
                  <p className="positionDescription">
                    Supply property access details to clients via messages
                    triggered by their arrival at the property.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="cardData">
                <img className="userImg" src={user3} />
                <div className="aboutPosition">
                  <h3 className="position">Cafe Owner</h3>
                  <p className="positionDescription">
                    Offer more rapid service by identifying your customers the
                    moment they arrive to pick up their food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionTwo">
        <h1 className="sectionHeading">
          How{" "}
          <span className="logoSpanOne">
            1<span className="logoSpanTwo">Click</span>
          </span>{" "}
          works ?
        </h1>
        <div className="sectionTwoCrds">
          <div className="cardTwo">
            <img className="numberIcons" src={oneIcon} />
            <p className="cardTwoDescription">
              Simply download 1Click, enter the address you want to monitor then
              invite your team members to install the app.
            </p>
          </div>
          <div className="cardTwo">
            <img className="numberIcons" src={twoIcon} />
            <p className="cardTwoDescription">
              Anyone you invite who enters your monitored site will then be
              checked in and out and have their on-site location recorded
              automatically.
            </p>
          </div>
          <div className="cardTwo">
            <img className="numberIcons" src={threeIcon} />
            <p className="cardTwoDescription">
              Create notifications for your team members that will only activate
              when they are within your monitored site.
            </p>
          </div>
        </div>
      </div>
      <div className="sectionThree">
        <div className="sectionThreeHeading">
          <h3 className="logo">
            <span className="logoSpan">1</span>Click
          </h3>
          <h1 className="threeHeading">The digital personal book you need</h1>
        </div>
        <p className="setionThreeDescription">
          Knowing the people you manage can be extremely beneficial in making
          sure that your projects run as smoothly as possible. If you're
          managing multiple projects, nobody expects you to remember everyone's
          name. With the help of 1Click, you can have a cloud-based project
          directory that's always handy, and always available. 1Click allows you
          to have all your project sites organised in tabs. Under those tabs,
          you can also have a list of the people involved in each project and
          site.
        </p>
      </div>
      <div className="sectionFour">
        <div className="cardFour">
          <h1 className="cardFourHeading">
            <img className="locationIcon" src={locationIcon} />
            Location based software without the set backs
          </h1>
          <p className="cardFourDescriotion">
            Powered by patented technology that does not cause battery drain,
            the data you receive is completely accurate and dependable. With the
            location tracking app working even if your team has forgotten to
            switch it on, 1Click gives you a complete picture of your team’s
            location in a single easy-to-use interface.
          </p>
        </div>
        <div className="cardFour">
          <h1 className="cardFourHeading">
            <img className="privacyIcon" src={privacyIcon} />
            Privacy with a difference
          </h1>
          <p className="cardFourDescriotion">
            As important as the app’s simplicity and reliability is its
            security. With 1Click only ever tracking you when you’re in a
            specified site, your privacy is assured. What’s more, any data
            collected by the app remains yours — we won’t share it with anybody.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
