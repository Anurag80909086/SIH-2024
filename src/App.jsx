import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ImageSwiper from "./components/image-swiper/ImageSwiper";
import CityCard from "./components/miniComponents/cityCard/CityCard";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <ImageSwiper />
      <Routes>
        <Route path="/city" element={<CityCard />} />
      </Routes>
    </>
  );
};

export default App;
