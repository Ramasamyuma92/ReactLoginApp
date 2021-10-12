import React from 'react';
import { Container, Table } from 'react-bootstrap';
import * as SC from './styled';

export default () => {
  return (
    <SC.Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Document Number</th>
              <th>Supplier Name</th>
              <th>Document Currency</th>
              <th>Document Amount</th>
              <th>Document Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>$</td>
              <td>100,000</td>
              <td>10/12/2021</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>$</td>
              <td>200,000</td>
              <td>10/12/2021</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>$</td>
              <td>300,000</td>
              <td>10/12/2021</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </SC.Container>
  )
}