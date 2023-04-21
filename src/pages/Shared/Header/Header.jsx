import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="logo" />
        <h6>Journalism Without Fear or Favour</h6>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover={true} speed={50} className="text-danger">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <div>
        <Navbar bg="light" expand="lg" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Career</Nav.Link>
              </Nav>
              <Nav>
                <div className="d-flex">
                  <Nav.Link href="">Profile</Nav.Link>
                  <Button variant="secondary">Login</Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
