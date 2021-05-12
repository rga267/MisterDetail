import React, { Fragment } from "react";
import logo from "../MisterDetailLogo.png";
import "../App.css";
import AboutHeader from "../Components/aboutHeader";

function About() {
  return (
    <Fragment>
      <AboutHeader />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>About Page</p>
        </header>
      </div>
    </Fragment>
  );
}

export default About;
