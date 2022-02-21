import React, { Component } from "react";
import "../styles/date.css";

export default class Date extends Component {
  render() {
    return (
      <>
        <div className="date">
          {this.props.category}
          <span className={this.props.color}>{this.props.date}</span>
        </div>
      </>
    );
  }
}
