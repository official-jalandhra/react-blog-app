import React, { Component } from "react";
import Header from "./Header";
import Heading from "./heading";
import Article from "./Article";
import TopPost from "./TopPost";
import Advertisment from "./Advertisment";
import arrow from "../photos/south_black_24dp.svg";
import "../styles/categorypage.css";
import "../styles/latestArticles.css";

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
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <div>
                <hr />
              </div>
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
                height="140"
                articleHeading="article-heading"
                paragraph="article-paraBig-1"
              />
              <Article
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
