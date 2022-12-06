import React, { useState } from "react";

import CarouselFade from "./carousel";

const DisplayImageComponent = () => {
  const [isImageActive, setIsImageActive] = useState(false);

  return (
    <>
      {/* <div style={{textAlign:"center" , visibility: !isImageActive? 'visible' : 'hidden'}} > */}
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            color: "rgba(var(--bs-danger-rgb))",
            border: "0",
            padding: "0",
            backgroundColor: "rgb(36 38 42 / 0%)",
            borderRadius: "5%",
          }}
          //  onClick={()=>setIsImageActive(prev=>!prev)}>{!isImageActive?<h4>Click for Gallery</h4>:<h4>Manual Carousel</h4>} </button>
          onClick={() => setIsImageActive(true)}
        >
          {!isImageActive ? (
            <h4>Click for Gallery</h4>
          ) : (
            <h4>Manual Carousel</h4>
          )}{" "}
        </button>
      </div>
      <div>{isImageActive && <CarouselFade />}</div>
    </>
  );
};

export default DisplayImageComponent;
