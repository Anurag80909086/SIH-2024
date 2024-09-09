import CityCard from "../cityCard/CityCard";
import "./Cities.css";
import image1 from "./dehlhi.jpg";
import image2 from "./mumbai.jpg";
import image3 from "./punjab.jpg";
const Cities = () => {
  return (
    <div className="cityContainer flex">
      <h1>Indian Greate Cities</h1>
      <div className="cityWrapper">
        <CityCard url={image1} name="Delhi" cityDes="The Capital of India" />
        <CityCard url={image2} name="Mumbai" cityDes="The Capital of India" />
        <CityCard url={image3} name="Punjab" cityDes="The Capital of India" />
      </div>
    </div>
  );
};

export default Cities;
