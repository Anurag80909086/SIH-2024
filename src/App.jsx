import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import ImageSwiper from "./components/image-swiper/ImageSwiper";

import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <ImageSwiper /> */}
      <Routes>
        <Route path="/" element={""} />
      </Routes>
    </>
  );
};

export default App;
