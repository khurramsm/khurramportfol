import "../css/TopJumbotron.css";
import Profile from "../images/profile.png";
import HireModal from "./HireModal";

const TopJumbotron = () => {
  return (
    <>
      <div id="home" className="jumbotron jumbotron-fluid">
        <div className="row container">
          <div className="col-md-6 left-div">
            <h1 className="display-4">
              HI! I'M <span>KHURRAM</span>
            </h1>
            <h4 className="lead">
              I'M A <span>SOCIAL MEDIA</span> PROBLEM SOLVER
            </h4>
            <p className="">
              I’m Khurram Social Media solutions provider. With over 2 years of
              Experience, I’ve learned several techniques and strategies to out
              rank your competitor’s and grow your Social Media presence.
            </p>
            <button
              className="hireBtn"
              data-toggle="modal"
              data-target="#hiringModal"
            >
              Hire
            </button>
            <HireModal id="hiringModal" />
            <div className="social-links">
              <a
                href="https://www.facebook.com/Sheikh.M.Khurram"
                target="blank"
                className="social-link mr-1"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              {/* <a
                href="https://twitter.com"
                target="blank"
                className="social-link mr-1"
                disabled
              >
                <i className="fab fa-twitter"></i>
              </a> */}
              <a
                href="https://instagram.com/khurramsmm"
                target="blank"
                className="social-link mr-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-khurram-2575641b0"
                target="blank"
                className="social-link mr-1"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="mailto:khurrumsmm@gmail.com"
                target="blank"
                className="social-link mr-1"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center" data-aos="zoom-in">
            <img
              className="jumbotron-profile-image"
              src={Profile}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopJumbotron;
