import React, { Component } from "react";
import Header from "../components/header";
import MissionCard from "../components/mission";
import News from "../components/news";
import Weather from "../components/weather";
import Featured from "../components/featuredPosts";
import "./style.css";

class Landing extends Component {
  state = {};

  //lifecycle methods
  //functional methods
  render() {
    return (
      <div className="App">
        <Header />
        <MissionCard />
        <div className="container-landing">
          <News />
          <Weather />
        </div>
        <Featured />
      </div>
    );
  }
}

export default Landing;
