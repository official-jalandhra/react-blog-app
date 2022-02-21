import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../photos/mountain1.webp";
import "../styles/article.css";
import Date from "./Date";

export default class Article extends Component {
  render() {
    return (
      <>
        <div className="article">
          <img
            src={logo}
            alt="Article"
            width={200}
            height={this.props.height} 
          />
          <div className="article-text">
            <Link to="/ReadMode">
              <div>
                <div className={this.props.articleHeading}>
                  Catch waves with <br /> an adventure guide
                </div>
                <p className={this.props.paragraph}>
                  Joshua Tree National Park is a vast protected California. It's
                  characterized by rugged.
                </p>
              </div>
            </Link>
            <div>
              <Date
                category="Travel"
                date=" / January 22, 2022"
                color="color"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
