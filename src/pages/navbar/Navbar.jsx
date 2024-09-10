import { NavLink } from "react-router-dom";
import logo from "./Logo.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar" id="fixedd">
      <div className="leftSide">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightSide">
        <ul className="navContainer">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="heritage_site">
            <li>Heritage Sites</li>
          </NavLink>
          <NavLink to="travel_with_us">
            <li>Travel With Us</li>
          </NavLink>
          <NavLink to="gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink to="our_pride">
            <li>Our Pride</li>
          </NavLink>
          <NavLink to="blog">
            <li>Blog</li>
          </NavLink>
        </ul>
        <div className="searchContainer flex">
          <div className="searchBar flex">
            <input type="text" placeholder="Search here" />
            <i className="fa-solid fa-microphone"></i>
          </div>
          <i className="fa-solid fa-magnifying-glass" id="searchBtn"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
