import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer flex">
      <section className="topSection">
        <div className="row">
          <div className="heading">Quick Links</div>

          <div className="subHeading linkHeading">
            <a href="/state_ut">State & UT</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="/festivals">Heritage Sites</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="/gallery">Gallery</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="/blog">Blog</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="/contact_us">Contact Us</a>
          </div>
        </div>
        <div className="row">
          <div className="heading">Travel With Us</div>
          <div className="subHeading linkHeading">
            <a href="/travel_with_us">Hotel Booking</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="/travel_with_us">Flight Tickets</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="/travel_with_us">Train Tickets</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="/travel_with_us">Bus Tickets</a>
          </div>
        </div>
        <div className="row">
          <div className="heading">Visit For More</div>
          <div className="subHeading linkHeading">
            <a href="https://www.india.gov.in/my-government" target="_blank">
              My Government
            </a>
          </div>
          <div className="subHeading linkHeading">
            <a href="https://www.digitalindia.gov.in/" target="_blank">
              Digital India
            </a>
          </div>
          <div className="subHeading linkHeading">
            <a href="https://tourism.gov.in/" target="_blank">
              Ministry of Tourism
            </a>
          </div>
          <div className="subHeading linkHeading">
            <a href="https://www.incredibleindia.gov.in/en" target="_blank">
              Incredible India
            </a>
          </div>
        </div>
        <div className="row">
          <div className="heading">Contact Us</div>
          <div className="subHeading">Anurag Singh</div>
          <div className="subHeading">Ojas Kumar</div>
          {/* <div className="subHeading">Aastha</div> */}
          <div className="subHeading">Priyanshu</div>
          <div className="subHeading">Dia Khurana</div>
        </div>
      </section>

      <section className="bottomSection">
        <p className="centerText">Developed by Jambimony Team</p>
      </section>
    </div>
  );
};

export default Footer;
