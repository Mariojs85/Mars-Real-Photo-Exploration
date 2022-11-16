import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "../../components/filterBy/datePicker/datePicker";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { rovers } from "../../data/data";
import { getPhotos } from "../../services/api";


import "./roverPhoto.css";

const Roverphoto = () => {
  const { rover } = useParams();


  // const [cardData, setCardData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await getPhotos();
  //     const data = await res.json();
  //     console.log(data)
  //     const photo_manifest = data.map((manifest) => {
  //       return {
  //         name: {
  //           data: manifest.name,
  //           label: "name",
  //           type: "text",
  //         },
  //         landing_date: {
  //           data: manifest.landing_date,
  //           label: "landing_date",
  //           type: "text",
  //         },
  //         status: {
  //           data: manifest.status,
  //           label: "status",
  //           type: "text",
  //         },
  //         max_sol: {
  //           data: manifest.max_sol,
  //           label: "max_sol",
  //           type: "number",
  //         },
  //         max_date: {
  //           data: manifest.max_date,
  //           label: "max_date",
  //           type: "date",
  //         },
  //         total_photos: {
  //           data: manifest.total_photos,
  //           label: "total_photos",
  //           type: "number",
  //         },
  //       };
  //     });
  //     setCardData(photo_manifest);
  //     console.log(setCardData)
  //   }
  //   getData();
  // }, []);

  return (
    <>
   
      <h1 className="text-white text-center">{rover}</h1>
      <br />
      <br />
      <br />
      <div className="abc">
        <h3>by Earth date</h3>
      <DatePicker  />
      </div>      
      <div className="home-cards-container m-4 gap-2 ">
        {rovers.map((rover) => (
          <SimpleCard id={rover.name} img={rover.img}/>
        ))}
      </div>
    </>
  );
};

export default Roverphoto;
