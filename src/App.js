import React, { Fragment } from "react";
import logo from "./MisterDetailLogo.png";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import Header from "./Components/header";
import SideCard from "./Components/sidecard";

function App() {
  return (
    <Fragment>
      <Header />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome</p>
        </header>
      </div>

      <main className="my-5 py-5">
        <Container className="px-0">
          <Row
            noGutters
            className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
          >
            <Col
              tag="aside"
              className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
            >
              <SideCard />
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
