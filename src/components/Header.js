import React, { Component } from "react";
import { Link } from "react-router-dom";
import '.././styles/header.css';

export default class Header extends Component {
  state={ display: "categories"}
  handleClick = () =>{
    this.state.display==="menu-box"? this.setState({display:"categories"}):this.setState({display:"menu-box"})

  }
  render() {
    return (
      <>
        <div className="header">
          <div id="title">
            <div id="the">The</div>
            Siren
          </div>
          <div className={this.state.display}>
            <ul>
              <Link to="/Home" ><li className="categorie-item">Home</li></Link>
              <Link to="/Bollywood" ><li className="categorie-item">Bollywood</li></Link>
              <Link to="/Technology" ><li className="categorie-item">Technology</li></Link>
              <Link to="/Hollywood" ><li className="categorie-item">Hollywood</li></Link>
              <Link to="/Fitness" ><li className="categorie-item">Fitness</li></Link>
              <Link to="/Food" ><li className="categorie-item">Food</li></Link>
            </ul>
          </div>
          <hr  className="header-hr"/>
          <div className={ "bar-icon"} onClick={this.handleClick}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
}
