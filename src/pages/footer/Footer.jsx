import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer flex">
      <section className="topSection">
        <div className="row">
          <div className="heading">Quick Links</div>
          <div className="subHeading linkHeading">
            <a href="#">Indian Culture</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="#">Incredible India</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="#">Ministry of Culture</a>
          </div>
          <div className="subHeading linkHeading">
            <a href="#">Swacch Bharat</a>
          </div>
        </div>
        <div className="row">
          <div className="heading">Travel With Us</div>
          <div className="subHeading linkHeading">
            <a href="#" target="_blank">
              Taj Mahal
            </a>
          </div>
          <div className="subHeading linkHeading">
            <a href="#" target="_blank">
              Red Fort
            </a>
          </div>
          <div className="subHeading linkHeading">
            <a href="#" target="_blank">
              Ayodhya
            </a>
          </div>
        </div>
        <div className="row">
          <div className="heading">Visit For More</div>
          <div className="subHeading linkHeading">
            <a href="#" target="_blank">
              My Government
            </a>
          </div>
          <div className="subHeading linkHeading">
            <a href="#" target="_blank">
              Digital India
            </a>
          </div>
          <div className="subHeading linkHeading">
            <a href="#" target="_blank">
              Ministry of Tourism
            </a>
          </div>
        </div>
        <div className="row">
          <div className="heading">Contact Us</div>
          <div className="subHeading">Anurag Singh</div>
          <div className="subHeading">Mrs. Ojas Kumari</div>
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
