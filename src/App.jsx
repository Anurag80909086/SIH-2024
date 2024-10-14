import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Contact_us from "./pages/contact_us/Contact_us";
import "./App.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<Contact_us />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
