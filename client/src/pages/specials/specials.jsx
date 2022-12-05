import SimpleSlider from "../../components/displayImage";
import DisplayImageComponent from "../../components/displayImage";
// import DemoCarousel from "../../components/carousel";
import "./specials.css";

const Specials = () => {
  // const handleGallery= (e) =>{
  //   e.preventDefaul();
  //   console.log('The link was clicked.');

  // }
  // return
  //   // alert("I'm an alert")
  // // )

  return (
    <div
      style={{
        justifyContent: "center",
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: `repeat(auto-fit, 490px)`,
        gridTemplateRows: `repeat(3, 380px)`,
      }}
    >
      <div>
        <h4 class="text-danger text-center">Spirit</h4>{" "}
        <iframe
          src="https://mars.nasa.gov/gltf_embed/24883"
          width="490px"
          height="355"
          frameborder="0"
        />
      </div>
      <div style={{ position: "relative" }}>
        <h4 class="text-danger text-center">History</h4>
        <iframe
          width="490px"
          height="355"
          src="https://www.youtube.com/embed/OO5CTBBgtXs?autoplay=1&mute=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div>
        <h4 class="text-danger text-center">Opportunity</h4>
        <iframe
          src="https://mars.nasa.gov/gltf_embed/24883"
          width="490px"
          height="355"
          frameborder="0"
        />
      </div>
      <div>
        <h4 class="text-danger text-center">Curiosity</h4>
        <iframe
          src="https://mars.nasa.gov/gltf_embed/24584"
          width="490px"
          height="355"
          frameborder="0"
        />
      </div>
      <div>
        {/* <h4 class="text-danger text-center">Photo gallery</h4> */}

        <p id="btnSpecials">{}
          <DisplayImageComponent />
        </p>
      </div>
      <div>
        <h4 class="text-danger text-center">Perseverance</h4>
        <iframe
          src="https://mars.nasa.gov/gltf_embed/25042"
          width="490px"
          height="355"
          frameborder="0"
        />
      </div>
    </div>
  );
};

export default Specials;
