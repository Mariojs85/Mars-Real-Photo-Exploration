import { Carousel } from "react-bootstrap";

const Specials = () => {
  return (
    <div >
      <div 
      style={{
        overflow: "hidden",
        height: "90%",
        
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        gap: "1rem",
      }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OO5CTBBgtXs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <div style={{ width: "100%", height: "610px" }}>
              <img
                src="/Photos/download.jpg"
                alt="Girl in a jacket"
                width="60%"
                height="90%"
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{ width: "100%", height: "610px", background: "#3399FF" }}
            >
              <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                Curiosity Amazing "Selfie"
              </p>
              <img
                src="/Photos/6037_msl_banner (1).jpg"
                alt="Girl in a jacket"
                width="60%"
                height="90%"
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
                width="60%"
                height="90%"
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
                width="60%"
                height="90%"
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
                width="60%"
                height="90%"
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{ width: "100%", height: "100%", background: "#3399FF" }}
            >
              <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                Curiosity record 1.8 billion pixel photo
              </p>
              <iframe
                title="c"
                src="https://mars.nasa.gov/embed/24797/"
                width="100%"
                height="600"
                scrolling="no"
                frameBorder="0"
              ></iframe>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{ width: "100%", height: "100%", background: "#3399FF" }}
            >
              <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                Perseverance high resolution shots
              </p>
              <iframe
                title="d"
                src='https://mars.nasa.gov/embed/26979?autoplay=1&loop=1&autopause=0&muted=1"'
                allow="autoplay"
                width="100%"
                height="600"
                scrolling="no"
                frameBorder="0"
              ></iframe>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Specials;
