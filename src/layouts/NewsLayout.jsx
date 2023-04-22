import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet, useLocation } from "react-router-dom";

const NewsLayout = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Dragon news | ${location.state}`;
  }, [location]);
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default NewsLayout;
