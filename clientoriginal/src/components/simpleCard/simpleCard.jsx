import "./simpleCard.css";

const SimpleCard = ({ name, img, id, missionTime, description, onClick }) => {
  return (
    <div className="simple-card-wrapper">
      <p id="name" onClick={() => onClick(id)}>
        {name}
      </p>
      <img src={img} alt="..." onClick={() => onClick(id)} />
      <hr />
      <p id="time">{missionTime}</p>
      <p id="description">{description}</p>
    </div>
  );
};

export default SimpleCard;
