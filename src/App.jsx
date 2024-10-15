import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Contact_us from "./pages/contact_us/Contact_us";
import Festivals from "./pages/festivals/Festivals";
import StateUt from "./pages/state_ut/StateUt";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact_us />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/state_ut" element={<StateUt />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
