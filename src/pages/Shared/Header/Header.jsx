import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../Provider/AuthProvider";
import NavigationBar from "../NavigationBar/NavigationBar";
const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="logo" className="img-fluid" />
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
    </Container>
  );
};

export default Header;
