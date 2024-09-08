import "./Navbar.css";
// import flagLogo from "./jambimony.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <section className="upperStrip">
        <section className="login_section">
          <select name="language" className="language_wrapper">
            <option value="Select Language">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Bhojpuri">Bhojpuri</option>
            <option value="Punjabi">Punjabi</option>
          </select>
          <div className="login_wrapper flex">
            <button id="loginBtn">Login</button>
            <button id="registerBtn">Register</button>
          </div>
        </section>
      </section>

      <section className="bottomStrip">
        <div className="logo_wrapper">
          <div className="logoImg">
            {/* <img src={flagLogo} alt="Logo" title="jambimony" /> */}
          </div>
          <div className="logoName">
            INDIAN CULTUR <br />
            AND TRADITIONS
          </div>
        </div>

        <ul className="nav_wrapper">
          <li>
            Destinations <i className="fa-solid fa-caret-down"></i>
            <div className="dropdown">
              <ul>
                <li>First Option</li>
                <li>Second Option</li>
                <li>Third Option</li>
                <li>Fourth Option</li>
              </ul>
            </div>
          </li>
          <li>
            Places to Visit <i className="fa-solid fa-caret-down"></i>
            <div className="dropdown">
              <ul>
                <li>First Option</li>
                <li>Second Option</li>
                <li>Third Option</li>
                <li>Fourth Option</li>
              </ul>
            </div>
          </li>
          <li>
            Plan Your Trip <i className="fa-solid fa-caret-down"></i>
            <div className="dropdown">
              <ul>
                <li>First Option</li>
                <li>Second Option</li>
                <li>Third Option</li>
                <li>Fourth Option</li>
              </ul>
            </div>
          </li>
          <li>
            Articles <i className="fa-solid fa-caret-down"></i>
            <div className="dropdown">
              <ul>
                <li>First Option</li>
                <li>Second Option</li>
                <li>Third Option</li>
                <li>Fourth Option</li>
              </ul>
            </div>
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className="search_wrapper flex">
          <div className="inputContainer flex">
            <input type="text" placeholder="Search here" />
            <i className="fa-solid fa-microphone" id="micBtn"></i>
          </div>
          <i className="fa-solid fa-magnifying-glass" id="searchBtn"></i>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
