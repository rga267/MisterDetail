import React, { Fragment } from "react";
import logo from "../MisterDetailLogo.png";
import "../App.css";
import ServicesHeader from "../Components/servicesHeader";

function Services() {
  return (
    <Fragment>
      <ServicesHeader />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Services Page</p>
        </header>
      </div>
    </Fragment>
  );
}

export default Services;
