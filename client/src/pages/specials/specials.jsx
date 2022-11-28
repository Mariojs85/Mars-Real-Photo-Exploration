import { Carousel, Image } from "react-bootstrap";
import PaginatedList from "../../components/paginatedList/paginatedList";
import { rovers } from "../../data/data";
// import {poze} from "../poze"

const Specials = () => {
  return (
    <div className="">
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="450"
          height="255"
          src="https://www.youtube.com/embed/OO5CTBBgtXs?autoplay=1&mute=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
      {/* <div className="photo-galery">
        {rovers.map((rover) => (
          <Image
            href={rover.img}
            target="_blank"
            img={rover.img}
            src={rover.img}
            alt="...mars"
            className="photos-galery"
            width={320}
            height={320}
            phantomHeight={320}
            phantomWidth={320}
          />
        ))}
      </div> */}
      <div
        style={{
          overflow: "hidden",
          height: "90%",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <div className="">
          <iframe
            width="450"
            height="255"
            src="https://www.youtube.com/embed/OO5CTBBgtXs?autoplay=1&mute=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <div >
              <img
                src="/Photos/download.jpg"
                alt="..."
                width="60%"
                height="90%"
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              
            >
              <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                Curiosity Amazing "Selfie"
              </p>
              <img
                src="/Photos/6037_msl_banner (1).jpg"
                alt="..."
                width="60%"
                height="90%"
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              
            >
              <img
                src="/Photos/tyre size.png"
                alt="..."
                width="60%"
                height="90%"
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              
            >
              <img
                src="/Photos/Rover-Size-Comparison.png"
                alt="..."
                width="60%"
                height="90%"
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              
            >
              <img
                src="/Photos/MarsRoverhistrory.jpg"
                alt="..."
                width="60%"
                height="90%"
              ></img>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              
            >
              <p style={{ fontSize: "22px", fontWeight: "bold" }}>
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
