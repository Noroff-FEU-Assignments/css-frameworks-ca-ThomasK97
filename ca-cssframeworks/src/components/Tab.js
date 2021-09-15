import React from 'react'
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Carousel, Tabs, Tab, Container, Row, Col, Accordion } from 'react-bootstrap';
import image4 from './../Tab images/tab-1.jpg';
import image5 from './../Tab images/tab-2.jpg';
import image6 from './../Tab images/tab-3.jpg';


function TabComponent() {
    return (
        <>
        <div className="intro">
            <h2>We do YAY things</h2>
            <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, 
               a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
               finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur 
               faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
               Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        </div>
        <Accordion defaultActiveKey="0" className="d-md-none">
  <Accordion.Item eventKey="0">
    <Accordion.Header>First</Accordion.Header>
    <Accordion.Body>
    <img src={image4}></img>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Seccond</Accordion.Header>
    <Accordion.Body>
    <img src={image5}></img>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Third</Accordion.Header>
    <Accordion.Body>
        <img src={image6}></img>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


  <div className="d-none d-md-block">

       
  <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="first" title="First">
      <div className="tab-content">
          <img src={image4}></img>
          <div className="tab-content-row">
          <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
              Sed condimentum mattis rhoncus. </p>
          
              
          </div>
          
      </div>
    
  </Tab>
  <Tab eventKey="seccond" title="Seccond">
  <div className="tab-content">
          <img src={image5}></img>
          <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
              Sed condimentum mattis rhoncus.</p>
      </div>
   
  </Tab>
  <Tab eventKey="third" title="Third">
  <div className="tab-content">
          <img src={image6}></img>
          <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, 
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a 
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. 
              Sed condimentum mattis rhoncus.</p>
      </div>
    
  </Tab>
</Tabs>
</div> 
</>
  
    )
}

export default TabComponent
