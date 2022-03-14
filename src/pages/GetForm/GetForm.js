import React from "react";
import { Button, Form } from "react-bootstrap";

const GetForm = () => {
    const submitForm=(e)=>{
        e.preventDefault()
console.log("hlw riaz");
    }
  return (
    <div className="tableForm">
      <h1>Get form</h1>
      <br />
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default GetForm;
