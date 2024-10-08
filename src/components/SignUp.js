import { useRef } from "react";
import React from "react";
import { Form, Button, Card, CardBody } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const SignUp= () => {
    const emailRef=useRef();
    const passwordRef= useRef();
    const passwordConfirmRef = useRef();
    const {signup}=useAuth()

    function handleSubmit(e){
      e.preventDefault()

      signup(emailRef.current.value,passwordRef.current.value);
    }
    return (
      <div>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="email" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="email" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button className="w-100"type="submit">Sign Up</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text center mt-2">
          Already have an account?Login
        </div>
      </div>
    );
}
export default SignUp;

