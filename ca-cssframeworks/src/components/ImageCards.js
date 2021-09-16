import React from 'react';
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Carousel, Tabs, Tab, Container, Row, Col, Accordion, Card, CardGroup} from 'react-bootstrap';
import image1 from './../News images/news-1.jpg';
import image2 from './../News images/news-2.jpg';
import image3 from './../News images/news-3.jpg';
import image7 from './../News images/news-4.jpg';
import image8 from './../News images/news-5.jpg';
import image9 from './../News images/news-6.jpg';
import image10 from './../News images/news-7.jpg';
import image11 from './../News images/news-8.jpg';


function ImageCards() {
    return (
        <>
        

<Card>
    <div className="Header-intro">
        <h2>News</h2>
    </div>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#seccond">2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#third">
          3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#fourth">4</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <CardGroup>
  <Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src={image1} />
    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image2} />

    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={image3} />
    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
      
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
  <Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src={image7} />
    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
</CardGroup>
<CardGroup>
  <Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src={image8} />
    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image9} />

    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={image10} />
    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
      
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
  <Card style={{ width: '8rem' }}>
    <Card.Img variant="top" src={image11} />
    <Card.Body>
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
    </Card.Body>
    <br></br>
      <Button variant="primary">More</Button>
    
  </Card>
</CardGroup>

  
</Card>
            
        </>
    )
}

export default ImageCards;


