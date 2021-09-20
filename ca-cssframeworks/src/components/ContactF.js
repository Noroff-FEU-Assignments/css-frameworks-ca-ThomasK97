import React from 'react'
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Carousel, Tabs, Tab, Container, Row, Col, Accordion, Card, CardGroup} from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";



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
<Col md={6}><span><FaEnvelope/>hello@yay.com</span>
<br></br>
<br></br>

<span> <FaPhoneAlt/>123 456 7890</span>

<br></br>
<br></br>

<span><FaMapMarkerAlt/>123 Some Street
Somewhere
Some City
10000</span></Col>
          
         </Row>
        </Container>



        
        
            
        </>
    )
}

export default ContactF;
