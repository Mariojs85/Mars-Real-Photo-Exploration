import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Carusel from "../../components/caruselComponent/caruselComponent";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { getPhotos } from "../../services/api";
import { rovers } from "../../data/data";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getPhotos()
      .then((res) => {
       const arr =Object.values(res) 
       
        console.log(arr);
        
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRedirect = (selected) => {
    console.log(selected);
    navigate(`/roverPhoto/${selected}`);
  };

  return (
    <>
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
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
