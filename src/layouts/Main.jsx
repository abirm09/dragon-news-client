import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../pages/Home/category/Category";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
const Main = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      document.title = `Dragon news | Home`;
    } else {
      document.title = `Dragon news | ${location.pathname.split("/")[1]}-${
        location.pathname.split("/")[2]
      }`;
    }
  }, [location]);
  return (
    <>
      <Header />
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
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

export default Main;
