import "./CityCard.css";
import stateImg from "./delhi.jpg";

const CityCard = () => {
  return (
    <>
      <div className="cityCard" title="delhi">
        <div className="imageContainer">
          <img src={stateImg} alt="" />
        </div>
        <h2 className="cityName">Delhi</h2>
      </div>
    </>
  );
};

export default CityCard;
