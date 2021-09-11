import "../css/Portfolio.css";
import { Carousel } from "react-responsive-carousel";
import insights5 from "../images/insights1.jpeg";
import insights4 from "../images/insights2.jpeg";
import insights3 from "../images/insights3.jpeg";
import insights2 from "../images/insights4.jpeg";
import insights1 from "../images/insights5.jpeg";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="row" data-aos="fade-in">
          <div className="services-header col-md-12">
            <small>PORTFOLIO</small>
            <h1 className="display-5">MY PORTFOLIO</h1>
            <div className="hori-line"></div>
          </div>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6000}
          >
            <div className="myCarousel projectCarousel">
              <img src={insights1} alt="work" />
            </div>
            <div className="myCarousel projectCarousel">
              <img src={insights2} alt="work" />
            </div>
            <div className="myCarousel projectCarousel">
              <img src={insights3} alt="work" />
            </div>
            <div className="myCarousel projectCarousel">
              <img src={insights4} alt="work" />
            </div>
            <div className="myCarousel projectCarousel">
              <img src={insights5} alt="work" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
