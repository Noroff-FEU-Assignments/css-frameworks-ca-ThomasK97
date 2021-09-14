import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from './../Carousel images/carousel-1.jpg';
import image2 from './../Carousel images/carousel-2.jpg';
import image3 from './../Carousel images/carousel-3.jpg';
import './../components/HeroSlider.css';



function HeroSlider() {
    return (
        <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default HeroSlider

