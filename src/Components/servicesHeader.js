import React from "react";
import Logo from "../MisterDetailLogo.png";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const servicesHeader = () => (
  <header>
    <Navbar
      fixed="top"
      light
      expand="xs"
      className="border-bottom border-gray bg-light"
      style={{ height: 80 }}
    >
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink tag={Link} to="/" className="font-weight-bold">
                  Home
                </NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink tag={Link} to="/About" className="font-weight-bold">
                  About
                </NavLink>
              </NavItem>

              <UncontrolledDropdown
                className="d-flex align-items-center"
                nav
                inNavbar
              >
                <DropdownToggle className="font-weight-bold" nav caret>
                  Full Detail Service
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    className="font-weight-bold text-secondary text-uppercase"
                    header
                    disabled
                  >
                    Popular Selections
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/Services">
                    Gold
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/Services">
                    Platinum
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/Services">
                    Diamond
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand
              tag={Link}
              to="/"
              className="d-inline-block p-0"
              style={{ width: 150 }}
            >
              <img
                src={Logo}
                alt="Mister Detail logo"
                className="position-relative img-fluid"
              />
            </NavbarBrand>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input
                type="search"
                className="mr-3"
                placeholder="Search Services"
              />
              <Button type="submit" color="info" outline>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default servicesHeader;
