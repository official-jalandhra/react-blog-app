import React, { Component } from "react";
import "../styles/leftGallary.css";
import Date from "./Date";

export default class LeftGallary extends Component {
  render() {
    return (
      <div>
        <div id="left-gallary">
          <div className="left-text">
            <div className="left-gallary-title">
              This sound Cloud <br></br> You loved is doomed.
            </div>
            <div className="left-gallary-date">
              <Date category="Travel" date=" / January 22, 2022" />
              <hr className="under" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
