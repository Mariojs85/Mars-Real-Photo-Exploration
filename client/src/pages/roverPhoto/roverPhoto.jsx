import { useParams } from "react-router-dom";
import DatePicker from "../../components/filterBy/datePicker/datePicker";
import SimpleCard from "../../components/simpleCard/simpleCard";
import { rovers } from "../../data/data";

import "./roverPhoto.css";

const Roverphoto = () => {
  const { rover } = useParams();

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
          <SimpleCard id={rover.name} img={rover.img} />
        ))}
      </div>
    </>
  );
};

export default Roverphoto;
