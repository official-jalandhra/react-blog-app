import React, { Component } from "react";
import Header from "./Header";
import Heading from "./heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";
import arrow from "../photos/south_black_24dp.svg";
import "../styles/categorypage.css";
import "../styles/latestArticles.css";

import tech2 from "../photos/tech2.webp";
import kabootar from "../photos/kabootar.webp";
import car1 from "../photos/car1.webp";
import tech1 from "../photos/tech1.webp";
import tech3 from "../photos/tech3.webp";
import tech4 from "../photos/tech4.webp";
import traffic from "../photos/traffic.webp";

export default class CategoryPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="content-container">
          <div className="outer-article-container">
            <div>
            <div className="article-container">
              <Heading heading={this.props.heading} />
              <Article
                image={tech1}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <div>
                <hr />
              </div>
              <Article
                image={tech2}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={tech3}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={tech4}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={traffic}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={kabootar}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                image={car1}
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
            </div>
            <div className="arrow">
              <img src={arrow} alt="arrow" /> LOAD MORE
            </div>
            </div>
            <div className="side-container">
              <TopPost />
              <Advertisment />
            </div>
          </div>
        </div>
      </>
    );
  }
}
