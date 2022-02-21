import React, { Component } from "react";
import topPost from "../photos/mountain2.jpg";
import Heading from "./heading";
import '../styles/topPost.css'
import Date from './Date'
export default class TopPost extends Component {
  render() {
    return (
      <>
        <div className="top-posts-container">
          <Heading heading="Top Posts" />
          <div className="postImage">
          </div>
          <div className="top-post-text">
            <div className="article-heading">
              Catch waves with an <br /> adventure guide
            </div>
            <div className="one">1</div>
          </div>
          <Date category="Travel" date=" / January 22, 2022" color="color" />
          <hr style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }} />
          <div className="post-flex">
              <img src={topPost} alt="topPost" width={80} height={80} />
            <div>
              <div className="top-post-text">
                <div className="article-heading">
                  Catch waves with <br /> adventure guide
                </div>
                <div className="one">2</div>
              </div>
              <Date category="Travel" date=" / January 22, 2022" color="color" />
            </div>
          </div>
          <hr style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }} />
          <div className="post-flex">
              <img src={topPost} alt="topPost" width={80} height={80} />
            <div>
              <div className="top-post-text">
                <div className="article-heading">
                  Catch waves with <br /> adventure guide
                </div>
                <div className="one">3</div>
              </div>
              <Date category="Travel" date=" / January 22, 2022" color="color" />
            </div>
          </div>
          <hr style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }} />
          <div className="post-flex">
              <img src={topPost} alt="topPost" width={80} height={80} />
            <div>
              <div className="top-post-text">
                <div className="article-heading">
                  Catch waves with <br /> adventure guide
                </div>
                <div className="one">4</div>
              </div>
              <Date category="Travel" date=" / January 22, 2022" color="color" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
