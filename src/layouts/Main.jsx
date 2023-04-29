import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../pages/Shared/Loading/Loading";
const Main = () => {
  const location = useLocation();
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    if (location.pathname == "/") {
      document.title = `Dragon news | Home`;
    } else {
      document.title = `Dragon news | ${location.pathname.split("/")[1]}-${
        location.pathname.split("/")[2]
      }`;
    }
  }, [location]);
  if (loading) {
    return <Loading />;
  }
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
