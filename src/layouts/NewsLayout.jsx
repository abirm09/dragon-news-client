import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Category from "../pages/Home/category/Category";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
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
