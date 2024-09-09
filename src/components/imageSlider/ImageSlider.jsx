import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <div className="imageSlider flex">
      <h1>Where science meets the sacred!</h1>
      <p>
        Witness the grand Architecture! How about taking your kids on an
        exploration of India heritage this holiday season?
      </p>
      <div className="slides">
        <div className="slide s1">
          <p>Modhera Sun Temple</p>
        </div>
        <div className="slide s2">
          <p>Adi Annamalai temple</p>
        </div>
        <div className="slide s3">
          <p>Meenakshi Amman Temple</p>
        </div>
        <div className="slide s4">
          <p>Khajuraho Temple</p>
        </div>
        <div className="slide s5">
          <p>Varaha Temple</p>
        </div>
        <div className="slide s6">
          <p>Virupaksha Temple</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
