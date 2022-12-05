
import React, { useState } from 'react';

import CarouselFade from './carousel';



const DisplayImageComponent = (
  
) => {
  const [isImageActive, setIsImageActive] = useState(false);
  
  return (
    <>
    
    <div style={{textAlign:"center" , visibility: !isImageActive? 'visible' : 'hidden'}} >
      
      <button style={{color:"rgba(var(--bs-danger-rgb))",border:"0",margin:"0",padding:"0", backgroundColor:"rgb(36 38 42 / 0%)", borderRadius:"5%", marginTop:".7rem" }}
       onClick={()=>setIsImageActive(prev=>!prev)}> <h4>Click for Gallery</h4> </button>

    </div>
    <div>
      {isImageActive && <CarouselFade/> }

    </div>
    </>
  );
};

export default DisplayImageComponent;