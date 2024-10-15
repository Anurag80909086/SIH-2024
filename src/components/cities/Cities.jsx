import CityCard from "../cityCard/CityCard";
import "./Cities.css";
import image1 from "./tajmahal.jpg";
import image2 from "./redfort.jpg";
import image3 from "./swaminarayan.jpg";
const Cities = () => {
  return (
    <div className="cityContainer flex">
      <h1>Immersive 360° & AR/VR Tours of India&apos;s Iconic Monuments</h1>
      <div className="cityWrapper">
        <CityCard
          url={image1}
          name="Taj Mahal"
          cityDes=""
          cityTitle="Taj Mahal"
          cityUrl="https://www.airpano.com/embed.php?3D=taj-mahal-india"
        />
        <CityCard
          url={image2}
          name="Agra Fort"
          cityDes=""
          cityTitle="Agra Fort"
          cityUrl="https://www.airpano.com/embed.php?3D=agra-fort-india"
        />
        <CityCard
          url={image3}
          name="Swaminarayan Akshardham"
          cityDes=""
          cityTitle="Swaminarayan Akshardham"
          cityUrl="https://www.airpano.com/embed.php?3D=akshardham-india"
        />
      </div>
    </div>
  );
};

export default Cities;
