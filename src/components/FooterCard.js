import React, { Component } from "react";
import "../styles/footercard.css";
import Mountain from "../photos/mountain2.jpg";
import Date from "./Date";
import Avatar from "../photos/Avatar.png";

export default class FooterCard extends Component {
  render() {
    return (
      <>
        <div className="desktop-footer-card">
          <div className="footer-card-heading">{this.props.heading}</div>
          <div className="footer-card-image">
            <img src={Mountain} alt="mountain" width={300} />
            <p>
              Joshua Tree <br /> Overnight Adventure
            </p>
          </div>
          <div className="profile-container">
            <img src={Avatar} alt="Avatar" width={50} height={50} />
            <div className="footer-profile-name-and-date">
              <div>Jack Sparrow</div>
              <div className="footer-date">
                <Date color="color" date="feb 23, 2022 . 10 min read" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
