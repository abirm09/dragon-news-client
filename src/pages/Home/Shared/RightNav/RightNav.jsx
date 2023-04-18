import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../../assets/qZone1.png";
import qZone2 from "../../../../assets/qZone2.png";
import qZone3 from "../../../../assets/qZone3.png";
import "./RightNav.css";
const RightNav = () => {
  return (
    <div>
      <div className="mt-3">
        <h4>Log in with</h4>
        <Button variant="outline-primary " className="w-100">
          <FaGoogle></FaGoogle> Log in with google.
        </Button>
        <Button variant="outline-secondary text-dark" className="mt-2 w-100">
          <FaGithub></FaGithub> Log in with github.
        </Button>
      </div>
      <div className="mt-3">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="fw-bold">
            <FaFacebookF className="text-primary"></FaFacebookF> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="fw-bold">
            <FaTwitter className="text-primary"></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="fw-bold">
            <FaInstagram className="text-danger"></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-3 p-3" style={{ background: "#F3F3F3" }}>
        <h4>Q-Zone</h4>
        <div className="text-center">
          <img src={qZone1} alt="qZone1" />
          <img src={qZone2} alt="qZone1" />
          <img src={qZone3} alt="qZone1" />
        </div>
      </div>
      <div className="p-4 right-side-bottom text-white mt-3">
        <h4>Create an Amazing Newspaper</h4>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default RightNav;
