import Video from "../../components/video/Video";
import Map from "../../components/map/Map";
import ImageGallery from "../../components/imageGallery/ImageGallery";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Video />
      <ImageSlider />
      <Map />
      <ImageGallery />
    </div>
  );
};

export default Home;
