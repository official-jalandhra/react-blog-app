import "./App.css";

import React, { Component } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Bollywood from './components/Bollywood'
import Technology from './components/Technology'
import Hollywood from './components/Hollywood'
import Fitness from './components/Fitness'
import Food from './components/Food'
import ReadMode from './components/ReadMode'

export default class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
            <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/Bollywood" element={<Bollywood/>}></Route>
            <Route exact path="/Technology" element={<Technology />}></Route>
            <Route exact path="/Hollywood" element={<Hollywood />}></Route>
            <Route exact path="/Fitness" element={<Fitness />}></Route>
            <Route exact path="/Food" element={<Food />}></Route>
            <Route exact path="/ReadMode" element={<ReadMode/>}></Route>
            </Routes>
        </HashRouter>
      </>
    );
  }
}
