import React, { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import slideImg from "../img/Doctor_professional_team_cartoon_art_illustration.jpg";
import slideImg2 from "../img/5188822.jpg";
import slideImg3 from "../img/5207289.jpg";
import "./Home.css";
import HealthService from "../HealthService/HealthService";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="slider">
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideImg3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <Row xs={1} md={3} className="g-4 ">
          {services.map((service) => (
            <HealthService service={service}></HealthService>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
