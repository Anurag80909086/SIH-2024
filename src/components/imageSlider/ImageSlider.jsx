import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <div className="imageSlider flex">
      <h1>Some iconic heritage sites in India</h1>
      <p>
        Witness the grand Architecture! How about taking your kids on an
        exploration of India heritage this holiday season?
      </p>
      <div className="slides">
        <div className="slide s1">
          <p>Agra Fort</p>
        </div>
        <div className="slide s2">
          <p>Ajanta Caves</p>
        </div>
        <div className="slide s3">
          <p>Elephanta Caves</p>
        </div>
        <div className="slide s4">
          <p>Ellora Caves</p>
        </div>
        <div className="slide s5">
          <p>Sun Temple</p>
        </div>
        <div className="slide s6">
          <p>Fatehpur Sikri</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
