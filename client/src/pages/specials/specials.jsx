import { Carousel, Image } from "react-bootstrap";
import PaginatedList from "../../components/paginatedList/paginatedList";
import { rovers } from "../../data/data";
// import {poze} from "../poze"

const Specials = () => {
  return (    
      <div style={{ display: "grid",  
        gridGap: "5px",  
        gridTemplateColumns: `repeat(auto-fit, 450px)`,
        gridTemplateRows: `repeat(2, 350px)`   }}>
        <div><iframe
          src="https://mars.nasa.gov/gltf_embed/24883"width="450px"height="355"frameborder="0"/>
          </div>
        <div style={{position : "relative"}}>
        <iframe width="450px"height="355"src="https://www.youtube.com/embed/OO5CTBBgtXs?autoplay=1&mute=0"title="YouTube video player"frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div>
        <iframe src="https://mars.nasa.gov/gltf_embed/24883"width="450px"height="355"frameborder="0"/>
        </div>
        <div>
        <iframe src="https://mars.nasa.gov/gltf_embed/24584" width="450px" height="355" frameborder="0" />
        </div>
        <div>
        <iframe src="https://mars.nasa.gov/gltf_embed/25042" width="450px" height="355" frameborder="0" />
        </div>
      </div>
     
      
        
        
        
      
      // <>
      //   <div className="photo-galery">
      //     {rovers.map((rover) => (
      //       <Image
      //         href={rover.img}
      //         target="_blank"
      //         img={rover.img}
      //         src={rover.img}
      //         alt="...mars"
      //         className="photos-galery"
      //         width={320}
      //         height={320}
      //         phantomHeight={320}
      //         phantomWidth={320}
      //       />
      //     ))}
      //   </div>
      
        // <Carousel>
        //   <Carousel.Item>
        //     <div>
        //       <img
        //         src="/Photos/download.jpg"
        //         alt="..."
        //         width="60%"
        //         height="90%"
        //       ></img>
        //     </div>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <div>
        //       <p
        //         style={{ fontSize: "32px", fontWeight: "bold", color: "white" }}
        //       >
        //         Curiosity Amazing "Selfie"
        //       </p>
        //       <img
        //         src="/Photos/6037_msl_banner (1).jpg"
        //         alt="..."
        //         width="60%"
        //         height="90%"
        //       ></img>
        //     </div>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <div>
        //       <img
        //         src="/Photos/tyre size.png"
        //         alt="..."
        //         width="60%"
        //         height="90%"
        //       ></img>
        //     </div>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <div>
        //       <img
        //         src="/Photos/Rover-Size-Comparison.png"
        //         alt="..."
        //         width="60%"
        //         height="90%"
        //       ></img>
        //     </div>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <div>
        //       <img
        //         src="/Photos/MarsRoverhistrory.jpg"
        //         alt="..."
        //         width="60%"
        //         height="90%"
        //       ></img>
        //     </div>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <div>
        //       <p
        //         style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}
        //       >
        //         Curiosity record 1.8 billion pixel photo
        //       </p>
        //       <iframe
        //         title="c"
        //         src="https://mars.nasa.gov/embed/24797/"
        //         width="100%"
        //         height="600"
        //         scrolling="no"
        //         frameBorder="0"
        //       ></iframe>
        //     </div>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <div>
        //       <p
        //         style={{ fontSize: "32px", fontWeight: "bold", color: "white" }}
        //       >
        //         Perseverance high resolution shots
        //       </p>
        //       <iframe
        //         title="d"
        //         src='https://mars.nasa.gov/embed/26979?autoplay=1&loop=1&autopause=0&muted=1"'
        //         allow="autoplay"
        //         width="100%"
        //         height="600"
        //         scrolling="no"
        //         frameBorder="0"
        //       ></iframe>
        //     </div>
        //   </Carousel.Item>
        // </Carousel>
      // </div>
    
    
  );
};

{/* <div className="mx-auto">
  <iframe
    width="450"
    height="355"
    src="https://www.youtube.com/embed/OO5CTBBgtXs?autoplay=1&mute=0"
    className="mx-auto"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div> */}
export default Specials;
