
import { useNavigate } from "react-router-dom";
import { useSplash } from "../../components/Preloader/splashPhoto";
import SimpleCard from "../../components/simpleCard/simpleCard";

import { rovers } from "../../data/data";
import "./home.css";

const Home = () => {


  
  
  new Promise((resolve) => resolve);
    const {isShown} = useSplash({      
    });


    const navigate = useNavigate();



  const handleRedirect = (selected) => {
    console.log(selected);

    navigate(`/roverPhoto/${selected}`);
  };
 
  return isShown ? null : (
    <div className="homeContent"  >
      <h2 className="text-white text-center">Select a rover to see Mars</h2>
      <div className="home-cards-container  m-4 gap-2 d-flex flex-wrap justify-content-between">
        {rovers.map((rover, id) => (
          <SimpleCard          
            name={rover.name}
            id={rover.name}
            img={rover.img}
            missionTime={rover.missionTime}
            description={rover.description}
            onClick={handleRedirect}
            key={rover.name}
            
            
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
