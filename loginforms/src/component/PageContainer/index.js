import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UploadDocument from './pages/UploadDocument';
import ViewDocument from './pages/ViewDocument';
import { Route, Switch} from 'react-router-dom';
import * as SC from './styled';

export default () => {
  return (
    <SC.Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">React App</Link>
          {/* <Navbar.Brand>React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/upload-document">
                Upload Documents
              </Link>
              <Link className="nav-link" to="/view-document">
                View Documents
              </Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SC.PageContainer>
        <Switch>
          <Route path="/upload-document">
            <UploadDocument/>
          </Route>
          <Route path="/view-document">
            <ViewDocument/>
          </Route>
        </Switch>
      </SC.PageContainer>
    </SC.Container>
  )
}