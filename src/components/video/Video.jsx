import videoLink from "./v1.mp4";
import "./Video.css";
const Video = () => {
  return (
    <div className="video flex">
      <video id="video" autoPlay loop muted>
        <source type="video/mp4" src={videoLink} />
      </video>

      <div className="textContainer ">
        <h1
          className="typewrite"
          data-period="2000"
          data-type='[ "Incredible!ndia", "Dekho Apna Desh!", " Explore the Indian Culture and Heritage." ]'
        ></h1>
        <p className="pText">
          India is a country dotted with stunning wildlife diversity, and rich
          traditions. While the Western coast greets you with mouth-watering
          delicacies, the East part invites you to experience its greenery.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default Video;
