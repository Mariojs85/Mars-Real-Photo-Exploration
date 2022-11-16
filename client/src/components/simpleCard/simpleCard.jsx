import "./simpleCard.css";

const SimpleCard = ({ img, id, missionTime, description, onClick }) => {
  return (
    <div  className="simple-card-wrapper" >
      <p id="name" onClick={() => onClick(id)}>{id}</p>
      <img  src={img} alt="..." onClick={() => onClick(id)}/>
      <hr />
      <p id="time">{missionTime}</p>      
      
      
      <p id="description">{description}</p>
     </div>
  );
};

export default SimpleCard;
