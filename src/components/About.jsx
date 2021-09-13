import "../css/About.css";
import Profile from "../images/profile.png";
import HireModal from "./HireModal";
const About = () => {
  return (
    <>
      <div id="about" className="about container">
        <div className="row" data-aos="fade-in">
          <div className="col-md-6" data-aos="flip-left">
            <div className="about-image">
              <img src={Profile} alt="Profile" />
            </div>
          </div>
          <div className="col-md-6">
            <h5>ABOUT ME</h5>
            <h1 className="display-4">DO SOME AWESOME STUFF WITH ME.</h1>
            <div className="designation-div">
              <span></span>
              <small>Social Media Solution Provider / Problem Solver</small>
            </div>
            <p className="about-details mt-3 text-justify">
              I’m a BBA Student and a Social Media Marketing Manager and have
              done various projects and learned tricks and techniques and after
              implementing I came across helping people by letting them you
              about the strategies that I’ve learned in my entire Social Media
              Marketing Management journey.
            </p>
            <p className="about-details text-justify">
              If you are a Blogger, YouTuber. Or a website owner for sure you
              know how hard it is to be on the top in this up-ranking Social
              Media genre and how many problems are blocking our way to get on
              the top and that’s why I’m here to provide you with the solutions
              and techniques to get through those barriers.
            </p>
            <p className="about-details text-justify">
              You are just a step away to get a consultation from me. I’m just a
              text away. Here, I’m going to let you know all the aspects of
              Social Media growth and will let you know the hacks that I’ve
              learned in my journey.
            </p>
            <button
              className="hireBtn"
              data-toggle="modal"
              data-target="#hiringModal"
            >
              Hire
            </button>
            <HireModal id="hiringModal" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
