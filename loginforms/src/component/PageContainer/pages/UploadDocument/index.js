import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as SC from './styled';

export default () => {

  const [date, setDate] = useState(new Date());

  let formObject = {};
  const handleSubmit = (event) => {
    formObject = {};
    const formData = new FormData(event.currentTarget);
    console.log(event.currentTarget.value);
    event.preventDefault();

    let i =0;
    for (let [key, value] of formData.entries()) {
        
      console.log(key, value);
      
    }
    const value = Object.fromEntries(formData.entries());

    console.log("Form object Stringy : " + JSON.stringify(value));

    /*axios.post('/url', JSON.stringify(value))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  };

  return (
    <SC.Container>
      <SC.FormContainer>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Document Number</Form.Label>
              <Form.Control
                required
                placeholder="Enter email"
                required
                name="documentNumber" 
                placeholder="Enter document number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Supplier Name</Form.Label>
              <Form.Control
                required
                name="supplierNumber" 
                placeholder="Enter supplier number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Document Currency</Form.Label>
              <Form.Control
                required
                name="documentCurrency" 
                placeholder="Enter document currency"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Document Amount</Form.Label>
              <Form.Control
                required
                name="documentAmount" 
                placeholder="Enter document amount"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Document Date</Form.Label>
              <DatePicker
                name="documentDate"
                selected={date}
                onChange={date => setDate(date)}
                className="form-control"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
      </SC.FormContainer>
    </SC.Container>
  )
}