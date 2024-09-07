import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import ImageSwiper from "./components/image-swiper/ImageSwiper";
import CityCard from "./components/miniComponents/cityCard/CityCard";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <ImageSwiper /> */}
      <Routes>
        <Route path="/" element={<CityCard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
