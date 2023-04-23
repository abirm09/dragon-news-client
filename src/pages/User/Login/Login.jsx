import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="bg-light min-vh-100">
        <Container>
          <div className=" d-flex justify-content-center">
            <div className="bg-white  p-5 w-100" style={{ maxWidth: "752px" }}>
              <h3 className="text-center fw-bold pb-3">Login your account</h3>
              <hr className="pb-3" />
              <Form className="w-100 ">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email "
                    className="py-2"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="py-2"
                  />
                </Form.Group>
                <Button variant="secondary" className="w-100 py-2">
                  Log in
                </Button>
              </Form>
              <Form.Text className="text-center pt-3 d-inline-block w-100">
                Don't have an account ?{" "}
                <Link className="text-danger fw-bold" to="/register">
                  Register
                </Link>
              </Form.Text>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
