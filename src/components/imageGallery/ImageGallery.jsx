import "./ImageGallery.css";
import image1 from "./diving1.jpg";
import image2 from "./diving1.jpg";
import image3 from "./diving1.jpg";
import image4 from "./diving1.jpg";
import image5 from "./diving1.jpg";
import image6 from "./diving1.jpg";
import image7 from "./diving1.jpg";
import image8 from "./diving1.jpg";
import image9 from "./diving1.jpg";
import image10 from "./diving1.jpg";
import image11 from "./diving1.jpg";
import image12 from "./diving1.jpg";
const ImageGallery = () => {
  return (
    <div className="imageGallery">
      <div className="imageCard">
        <img src={image1} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image2} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image3} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image4} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image5} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image6} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image7} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image8} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image9} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image10} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image11} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
      <div className="imageCard">
        <img src={image12} alt="" />
        <span className="textCenter">Some Food</span>
      </div>
    </div>
  );
};

export default ImageGallery;
