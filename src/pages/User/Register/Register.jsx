import React from "react";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(result => {
        sendUserData(result.user, name, photoUrl);
      })
      .catch(err => console.log(err));
  };
  const sendUserData = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  const handleCheck = event => {
    setAccepted(event.target.checked);
  };
  return (
    <>
      <div className="bg-light min-vh-100">
        <Container>
          <div className=" d-flex justify-content-center">
            <div className="bg-white  p-5 w-100" style={{ maxWidth: "752px" }}>
              <h3 className="text-center fw-bold pb-3">
                Register your account
              </h3>
              <hr className="pb-3" />
              <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    className="py-2"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUrl">
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Photo URL"
                    name="photoUrl"
                    className="py-2"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    className="py-2"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPAssword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="py-2"
                  />
                </Form.Group>
                <Form.Check
                  id="terms"
                  onClick={handleCheck}
                  label={
                    <>
                      Accept <Link to="/terms">Terms & conditions</Link>
                    </>
                  }
                  className="user-select-none"
                ></Form.Check>
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-100 py-2"
                  disabled={!accepted}
                >
                  Register
                </Button>
              </Form>
              <Form.Text className="text-center pt-3 d-inline-block w-100">
                Already have an account ?{" "}
                <Link className="text-danger fw-bold" to="/login">
                  Login
                </Link>
              </Form.Text>
              <Form.Text className="text-danger"></Form.Text>
              <Form.Text className="text-success"></Form.Text>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Register;
