import React from "react";
import Header from "../pages/Home/Shared/Header/Header";
import Footer from "../pages/Home/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Home/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Home/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            corrupti nam deleniti iusto accusamus ab blanditiis illo
            consequuntur nobis voluptas reiciendis assumenda est fugit quaerat
            ratione voluptatem explicabo. Consectetur, vitae.
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
