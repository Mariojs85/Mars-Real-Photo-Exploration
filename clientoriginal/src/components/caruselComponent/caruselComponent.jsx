import React from "react";
import { Carousel } from "react-bootstrap";

const Carusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ width: "100%", height: "480px", background: "#3399FF" }}>
          <img
            src="/Photos/backgr1.jpg"
            alt="Girl in a jacket"
            width="100%"
            height="500"
          ></img>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: "100%", height: "480px", background: "blue" }}>
          <img
            src="/Photos/MarsRoverImage_900x670.jpg"
            alt="Girl in a jacket"
            width="100%"
            height="500"
          ></img>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: "100%", height: "480px", background: "black" }}>
          <img
            src="/Photos/spirit_Edited.jpg"
            alt="Girl in a jacket"
            width="100%"
            height="500"
          ></img>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: "100%", height: "480px", background: "green" }}>
          <img
            src="/Photos/edu_rover_large_Edited.jpg"
            alt="Girl in a jacket"
            width="100%"
            height="500"
          ></img>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: "100%", height: "480px", background: "green" }}>
          <img
            src="/Photos/curiosity-arm-extended-l_Edited.jpg"
            alt="Girl in a jacket"
            width="100%"
            height="500"
          ></img>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: "100%", height: "480px", background: "green" }}>
          <img
            src="/Photos/maxresdefault (1).jpg"
            alt="Girl in a jacket"
            width="100%"
            height="500"
          ></img>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carusel;
