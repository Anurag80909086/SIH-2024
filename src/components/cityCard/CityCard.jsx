import "./CityCard.css";
const CityCard = (props) => {
  const { url, name, cityDes } = props;
  return (
    <div className="cityCard">
      <img src={url} alt="city" />
      <div className="name">
        <span>{name}</span>
        <p>{cityDes}</p>
      </div>
    </div>
  );
};

export default CityCard;
