import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Form.css";
import logo from "./logo.png";

const Forum = () => {
  return (
    <Form>
      <br></br>
      <h1>First React App</h1>
      <br></br>
      <p>
        Web programming, also known as web development, is the creation of
        dynamic web applications. Examples of web applications are social
        networking sites like Facebook or e-commerce sites like Amazon. The good
        news is that learning web development is not that hard! In fact, many
        argue it’s the best form of coding for beginners to learn. It’s easy to
        set up, you get instant results and there’s plenty of online training
        available. A lot of people learn web coding because they want to create
        the next Facebook or find a job in the industry. But it’s also a good
        choice if you just want a general introduction to coding, since it’s
        super easy to get started. No matter whether you’re looking for a career
        or just want to learn coding, learning how to develop for the web is for
        you. It’s one of the smartest decisions you will ever make!
      </p>
      <img src={logo} />
      <br></br>
      <br></br>
      <div id = "orm" >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Forum;
