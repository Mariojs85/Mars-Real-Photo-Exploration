// import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import { useNavigate } from "react-router-dom";
import "./carousel.css"





const CarouselFade= () => {   
  
  return (
    <Carousel className="carusell" style={{}}  fade interval={null} >
      <Carousel.Item>
        <img  className= "d-block w-100"src="/Photos/download.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
      <p  style={{ textAlign:"center",fontSize: "22px", fontWeight: "bold", color: "white" }} >
                Curiosity amazing "selfie"
              </p>
        <img className="d-block w-100"src="/Photos/6037_msl_banner (1).jpg" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" d-block w-100"src="/Photos/tyre size.png" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"src="/Photos/Rover-Size-Comparison.png" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"src="/Photos/MarsRoverhistrory.jpg" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
      <p  style={{ textAlign:"center",fontSize: "22px", fontWeight: "bold", color: "white" }} >
                Curiosity record 1.8 billion pixel photo
              </p>
              <iframe height="260px" width="600px" title="c" src="https://mars.nasa.gov/embed/24797/" 
               scrolling="no"frameBorder="0"  
                       ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"src="/Photos/maxresdefault.jpg" alt="First slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
