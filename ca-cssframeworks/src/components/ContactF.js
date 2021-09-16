import React from 'react'
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Carousel, Tabs, Tab, Container, Row, Col, Accordion, Card, CardGroup} from 'react-bootstrap';

function ContactF() {
    return (
        <>
        <div className="Header-intro">
        <h2>Submit your details</h2>
        </div>
        <br></br>
        <br></br>
        <Container>
         <Row>
          <Col md={6}><Form>
  <Form.Group>
    
    <Form.Control type="text" placeholder="Name" />
    
  </Form.Group>

  <Form.Group>
    
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <Form.Control as="textarea" rows="6" placeholder="Message" />
  <br></br>
  <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
  <br></br>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
</Col>
          
         </Row>
        </Container>
        
        
        
            
        </>
    )
}

export default ContactF;
