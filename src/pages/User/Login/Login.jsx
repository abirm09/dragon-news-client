import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location?.state?.from?.pathname || "/");
  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then(result => {
        navigate(location?.state?.from?.pathname || "/");
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <div className="bg-light min-vh-100">
        <Container>
          <div className=" d-flex justify-content-center">
            <div className="bg-white  p-5 w-100" style={{ maxWidth: "752px" }}>
              <h3 className="text-center fw-bold pb-3">Login your account</h3>
              <hr className="pb-3" />
              <Form className="w-100" onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
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
                <Button
                  variant="secondary"
                  type="submit"
                  className="w-100 py-2"
                >
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
