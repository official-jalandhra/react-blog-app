import React, { Component } from "react";

import "../styles/latestArticles.css";

import Heading from "./heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";

import westArrow from "../photos/west_black_24dp.svg";
import eastArrow from "../photos/east_black_24dp.svg";
import Date from "./Date";

export default class LatestArticles extends Component {
  render() {
    return (
      <>
        <div className="latestArticle-container">
          <Heading heading={"Latest Articles"} />
          <div className="outer-article-container">
            <div className="article-container">
              <div>
              <hr style={{ width: "100%" }} />
              </div>
              <Article
                height="200"
                articleHeading="article-heading1"
                paragraph="article-paraBig"
              />
              <div>
              <hr style={{ width: "100%" }} />
              </div>
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <hr style={{ width: "100%" }} />
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <hr style={{ width: "100%" }} />
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <div className="arrow">
                <div className="arrow-img"></div>
                LOAD MORE
              </div>
              <div className="article-gallary">
                <div className="article-gallary-title">
                  <img src={westArrow} alt="westArrow" />
                  Title of vertical Gallary
                  <img src={eastArrow} alt="eastArrow" />
                </div>
                <div className="article-gallary-date">
                  <Date category="Travel " date="/ January 22, 2022" />
                </div>
              </div>
            </div>
            <div className="arrow">
                <div className="arrow-img"></div>
                LOAD MORE
              </div>
            <div className="side-container">
              <Advertisment />
              <TopPost />
            </div>
          </div>
        </div>
      </>
    );
  }
}
