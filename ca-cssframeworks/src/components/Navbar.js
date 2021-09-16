import React from 'react';
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Carousel, Tabs, Tab, Container, Row, Col, Accordion } from 'react-bootstrap';



function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link className="active" href="/">Home</Nav.Link>
      <Nav.Link href="/news">News</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Go</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigation;




