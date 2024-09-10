import videoLink from "./v1.mp4";
import "./Video.css";
import Typewriter from "typewriter-effect";

const Video = () => {
  return (
    <div className="video flex">
      <video id="video" autoPlay loop muted>
        <source type="video/mp4" src={videoLink} />
      </video>

      <div className="textContainer ">
        <Typewriter
          options={{
            strings: [
              "Dekho Apna Desh",
              "Incredible India !",
              "The heart of India beats in its rich heritage.",
              "Explore Indian Culture",
              "In India, every corner tells a story.",
              "India’s culture: A mosaic of traditions, beliefs, and customs.",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
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
