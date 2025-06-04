import React from 'react';
import { Carousel } from "react-bootstrap";
import image1 from "../assets/images/pizza1.jpg";
import image2 from "../assets/images/pizza2.jpg";
import image3 from "../assets/images/pizza3.jpg";
import image4 from "../assets/images/pizza4.jpg";
import image5 from "../assets/images/pizza5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselComponent() {
  return (
    <Carousel interval={500}>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption style={{ fontFamily: "serif" }}>
          <h3>Neapolitan Pizza</h3>
          <p>
            If you are looking for a traditional Italian pizza, the Neapolitan
            is the best option
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption style={{ fontFamily: "serif" }}>
          <h3>Chicago Deep Dish</h3>
          <p>
            A thick crust pizza with lots of cheese and toppings
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption style={{ fontFamily: "serif" }}>
          <h3>Margherita Pizza</h3>
          <p>
            Simple and classic with tomato, mozzarella and basil
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Fourth slide" />
        <Carousel.Caption style={{ fontFamily: "serif" }}>
          <h3>Pepperoni Pizza</h3>
          <p>
            America's favorite pizza with spicy pepperoni
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Fifth slide" />
        <Carousel.Caption style={{ fontFamily: "serif" }}>
          <h3>Veggie Supreme</h3>
          <p>
            Loaded with fresh vegetables and cheese
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;