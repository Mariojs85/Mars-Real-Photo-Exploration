import { useNavigate } from "react-router-dom";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { rovers } from "../../data/data";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = (selected) => {
    console.log(selected);

    navigate(`/roverPhoto/${selected}`);
  };

  return (
    <>
      {/* <body>
        <div className="intro-obj">
          <h1 className="intro-text">WELCOME TO MARS EXPLORATION</h1>
          <img src="./Photos/9102_Rover_Tracks_2-web.jpg" alt="..." />
        </div>
      </body> */}
      <h2 className="text-white text-center">Select a rover to see Mars</h2>
      <div className="home-cards-container m-4 gap-2 d-flex flex-wrap justify-content-between">
        {rovers.map((rover, i) => (
          <SimpleCard
            name={rover.name}
            id={rover.name}
            img={rover.img}
            missionTime={rover.missionTime}
            description={rover.description}
            onClick={handleRedirect}
            key={rover.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
