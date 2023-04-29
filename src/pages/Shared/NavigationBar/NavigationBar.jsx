import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(err => console.log(err));
  };
  return (
    <div>
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
            </Nav>
            <Nav>
              <div className="d-flex align-items-center ">
                {user ? (
                  <>
                    <button className="btn">
                      <FaUserCircle className="fs-2"></FaUserCircle>
                    </button>
                    <Button onClick={handleLogOut} variant="secondary">
                      Log out
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
