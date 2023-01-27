import React from "react";
import "./Help.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tickIcon from "../../assets/tick_icon.png";
import trackIcon from "../../assets/track_icon.png";
import fanIcon from "../../assets/fan_icon.png";
import filesIcon from "../../assets/files_icon.png";
import clickIcon from "../../assets/click_icon.png";
import walkIcon from "../../assets/walk_icon.png";
import moneyIcon from "../../assets/money_icon.png";
import calenderIcon from "../../assets/calender_icon.png";
import heroMap from "../../assets/hero_map.png";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Help = () => {
  return (
    <>
      <div>
        <div className="signIn">
          <h3 className="signInText">Become super organised without effort</h3>
          <h2 className="signInHeading">
            Modernising Your Site's Sign-In Methods with 1calender
          </h2>
          <p className="signInDescription">
            Signing in and out of sites is a crucial part of the business. As a
            project manager, it is your task to make sure that your team fulfils
            their duty to sign in and out of sites. However, the old-school
            paper and pen log sheets are a thing of the past. 1Click's amazing
            features can help you modernise how you track your team's comings
            and goings in your sites.
          </p>
        </div>
        <h3 className="helpHeading">
          <img className="tickIcon" src={tickIcon} />
          Here's how 1Click can help you step up your project and team
          management
        </h3>
        <div className="helpPoints">
          <div className="helpPointsColOne">
            <div className="point">
              <h4 className="pointHeading">
                <img className="pointIcon" src={trackIcon} />
                Tracking The Team
              </h4>
              <p className="pointDescription">
                1Click keeps all your projects in neatly organised and labelled
                tabs, along with the team responsible and its members. This
                handy feature allows you to know who is supposed to be on Site
                A, Site B, and so on. 1Click's also has geofencing capabilities,
                allowing you to keep track of the comings and goings of your
                contractor and their team.
              </p>
            </div>
            <div className="point">
              <h4 className="pointHeading">
                <img className="pointIcon" src={fanIcon} />
                Going Green
              </h4>
              <p className="pointDescription">
                Protecting the environment is a cause most of humanity can get
                behind. With 1Click, you can do your part in preserving nature.
                Paper sign-in sheets contribute to the demand for paper, which
                involves chopping down trees. Pens and machines will likely be
                thrown into landfills. 1Click is cloud-based, meaning that you
                can reduce your sign-in and sign-out's carbon footprint by
                letting the app handle the process.
              </p>
            </div>
            <div className="point">
              <h4 className="pointHeading">
                <img className="pointIcon" src={filesIcon} />
                Staying On-Budget and On-Schedule
              </h4>
              <p className="pointDescription">
                One of the pains of being a project manager is making sure that
                your sites are running smoothly — on budget and on schedule.
                These two metrics, money and time, often come hand in hand in
                ensuring the success of any project. Being on-budget means that
                you can afford to be on schedule and continue progression in the
                project. On the other side of the coin, being on schedule
                indicates that you won't soon go over budget and things will
                continue running smoothly.
              </p>
            </div>
            <div className="point">
              <h4 className="pointHeading">
                <img className="pointIcon" src={clickIcon} />
                Keep Tabs On Your Team With 1Click
              </h4>
              <p className="pointDescription">
                Project management is not an easy job. When managing multiple
                sites, the job becomes exponentially difficult. It can even
                reach a point wherein it can get overwhelming. 1Click is your
                handy assistant to make managing even multiple projects at once
                easier than it will ever be.
              </p>
            </div>
          </div>
          <div className="helpPointsColTwo">
            <div className="point">
              <h4 className="pointHeading">
                <img className="pointIcon" src={walkIcon} />
                Automate Sign-Ins and Sign-Outs
              </h4>
              <p className="pointDescription">
                With 1Click's geofencing feature, you can see who comes and goes
                out of your project site in real-time.This is logged and can be
                viewed in the app, therefore making it a more efficient way to
                track sign-ins and sign-outs anytime, anywhere. With this
                feature, no one in your team will ever "forget" to sign in and
                sign out.
              </p>
            </div>
            <div className="point">
              <h4 className="pointHeading">
                <img className="pointIcon" src={calenderIcon} />
                Making Sure Contractors Stay On Schedule
              </h4>
              <p className="pointDescription">
                Money is one thing that's written on paper and usually set in
                stone once a deal is struck between you as project manager and
                the contractor. However, schedules are volatile. It may be due
                to nature, unseen circumstances, or at worst, issues with your
                contractor.
              </p>
            </div>
            <div className="point">
              <h4 className="pointHeading">
                <img className="pointIcon" src={moneyIcon} />
                Save On Costs
              </h4>
              <p className="pointDescription">
                Sure, signing in or out of project sites can be a quick process,
                but cumulatively, this can be time better spent on the project
                itself. Lines to the sign-in sheet can promote lallygagging,
                which can further waste valuable time. There are also the
                additional costs of hiring someone to manage the log-in sheets.
                It's also true that there are machines that can perform this
                task. However, said machines would require both regular and
                emergency maintenance. Cumulatively, this can come to thousands
                of dollars in savings if the old way of signing in and out is
                modernised with 1Click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
