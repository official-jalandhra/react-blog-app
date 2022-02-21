import React, { Component } from "react";
import "../styles/readMode.css";
import Date from "./Date";
import Avatar from "../photos/Avatar.png";
import Facebook from "../photos/Facebook.svg";
import Instagram from "../photos/Instagram.svg";
import Twitter from "../photos/Twitter.svg";
import Youtube from "../photos/Youtube.svg";
import Clap from "../photos/Clap.svg";
import Share from "../photos/Share.svg";
import FooterCard from "./FooterCard";
import FooterCardMobile from "./FooterCardMobile";

export default class HeaderInReadMode extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="the-siren">
            <div className="the">The</div>
            Siren
          </div> 
          <button className="get-started">Get Started</button>
        </nav>
        <div className="read-mode-container">
          <div className="read-mode-heading">
            5 Ways to animate a React app.
          </div>
          <div className="profile-container">
            <div className="avatar">
            <img src={Avatar} alt="Avatar" width={70} height={70} />
            </div>
            <div className="profile-name-and-date">
              <div>Jack Sparrow</div>
              <div>
                <Date color="color" date="feb 23, 2022 . 10 min read" />
              </div>
            </div>
            <div className="social-account">
              <img src={Facebook} alt="Facebook" width={30} height={30} />
              <img src={Twitter} alt="Twitter" width={30} height={30} />
              <img src={Instagram} alt="Instagram" width={30} height={30} />
              <img src={Youtube} alt="Youtube" width={30} height={30} />
            </div>
          </div>
          <div className="react-animation-img">

          </div>
          <p className="para-description">
            React Transition Group is an add-on component for managing component
            states and useful for defining entering and exiting transitions. It
            is not able to animate styles by itself. Instead, it exposes
            transition states, manages classes and group elements, and
            manipulates the DOM in useful ways. It makes of visual transitions
            much easier. The animation is a technique in which images are
            manipulated to appear as moving images.
          </p>
          <p className="para-talk-about">Let's talk about them</p>
          <div className="react-code"></div>
          <div className="tagName">
            <button>React</button>
            <button>Javacript</button>
            <button>Animation</button>
          </div>
          <div className="clap-share">
            <img src={Clap} alt="Clap" width={25} height={25} />
            <p>9.3K</p>
          </div>
          <hr style={{width: "100%", margin:"10px 0px"}}/>
          <div className="profile-container border-top">
            <img src={Avatar} alt="Avatar" width={70} height={70} />
            <div className="profile-name-and-date">
              <div className="written-by"> WRITTEN BY</div>
              <div>Jack Sparrow</div>
              <div>
                <Date color="color" date="feb 23, 2022 . 10 min read" />
              </div>
            </div>
          </div>
          <hr style={{width: "100%", margin:"20px 0px"}}/>
        </div>
        <div className="clap-share-container">
          <div className="clap-share">
            <img src={Clap} alt="Clap" width={25} height={25} />
            <p>9.3K</p>
          </div>
          <div className="clap-share">
            <img src={Share} alt="Share" width={25} height={25} />
            <p>Share this article</p>
          </div>
        </div>
        <div className="read-mode-footer">
          <div className="footer-heading">
            More From The Siren
          </div>
          <hr style={{width: "80vw", margin:"20px auto"}}/>
          <div className="footer-card">
            <FooterCard heading="Also tagged Reactjs"/>
            <FooterCard heading="Related reads"/>
            <FooterCard heading="Related reads"/>
          </div>
          <div className="footer-card-mobile-container">
            <FooterCardMobile/>
            <FooterCardMobile/>
            <FooterCardMobile/>
            <FooterCardMobile/>
          </div>
        </div>
      </div>
    );
  }
}
