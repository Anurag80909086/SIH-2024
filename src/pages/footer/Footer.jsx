import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer flex">
      <section className="topSection">
        <div className="row">
          <span className="greenText">Travel With us</span>
        </div>
        <div className="row">
          <div className="heading">Dekho Apna Desh!</div>
          <div className="subHeading">Indian Culture</div>
          <div className="subHeading">Incredible !ndia</div>
          <div className="subHeading">Ministry of Culture</div>
          <div className="subHeading">Swacch Bharat</div>
        </div>
        <div className="row">
          <div className="heading">Visit For More</div>
          <div className="subHeading">My Government</div>
          <div className="subHeading">Digital India</div>
          <div className="subHeading">Ministry of Tourism</div>
        </div>
        <div className="row">
          <div className="heading">Contact Us</div>
          <div className="subHeading">Anurag</div>
          <div className="subHeading">Ojas</div>
          <div className="subHeading">Astha</div>
          <div className="subHeading">Priyanshu</div>
          <div className="subHeading">Diya</div>
        </div>
      </section>

      <section className="bottomSection">
        <p className="centerText">Developed by Ojas and Team</p>
      </section>
    </div>
  );
};

export default Footer;
