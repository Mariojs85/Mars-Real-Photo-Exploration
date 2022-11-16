import { Carousel } from "react-bootstrap";

const Specials = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Carousel>
        <Carousel.Item>
          <div
            style={{ width: "100%", height: "610px", background: "#3399FF" }}
          >
            <img
              src="/Photos/download.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="100%"
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ width: "100%", height: "610px", background: "#3399FF" }}
          >
            <img
              src="/Photos/6037_msl_banner (1).jpg"
              alt="Girl in a jacket"
              width="100%"
              height="100%"
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ width: "100%", height: "610px", background: "#3399FF" }}
          >
            <img
              src="/Photos/tyre size.png"
              alt="Girl in a jacket"
              width="100%"
              height="100%"
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ width: "100%", height: "610px", background: "#3399FF" }}
          >
            <img
              src="/Photos/Rover-Size-Comparison.png"
              alt="Girl in a jacket"
              width="100%"
              height="100%"
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ width: "100%", height: "610px", background: "#3399FF" }}
          >
            <img
              src="/Photos/MarsRoverhistrory.jpg"
              alt="Girl in a jacket"
              width="100%"
              height="100%"
            ></img>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ width: "100%", height: "610px", background: "#3399FF" }}
          >
            <iframe src='https://mars.nasa.gov/embed/24797/' width='100%' height='600'  scrolling='no' frameborder='0'></iframe>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{ width: "100%", height: "100%", background: "#3399FF" }}
          >
            <iframe src='https://mars.nasa.gov/embed/26979?autoplay=1&loop=1&autopause=0&muted=1"'allow="autoplay" width='100%' height='600'  scrolling='no' frameborder='0'></iframe>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Specials;
