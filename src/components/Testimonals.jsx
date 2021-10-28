import "../css/Testimonals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TestimonalCard from "./TestimonalCard";
import videoTesti from "../images/videoTestimonals.mp4";

const Testimonals = () => {
  return (
    <div id="testimonal" className="container-fluid">
      <div className="row" data-aos="fade-in">
        <div className="services-header col-md-12">
          <h1 className="display-5">TESTIMONALS</h1>
          <div className="hori-line"></div>
        </div>
        <div className="col-md-12 text-center">
          <video className="testimonalVideo" width="50%" autoplay controls>
            <source src={videoTesti} type="video/mp4" />
          </video>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6000}
        >
          <TestimonalCard
            name="Shahjahan Miah"
            designation="Satisfied Client"
            comment="This was a very good experience with really great results in a clean way. It is always tricky to find the right, truly organic Instagram growth service and Khurram provides just that. The communication is great, and this especially matters with this kind of service Will be back for more."
          />
          <TestimonalCard
            name="Pevin Williams"
            designation="Satisfied Client"
            comment="This seller has been amazing from day one. Would recommend him for any and all of your social media needs."
          />
          <TestimonalCard
            name="Angelia Merrit"
            designation="Satisfied Client"
            comment="This gentlemen has always been available for many many revisions to our project. We definitely continue to use his services! 1st class service."
          />
          <TestimonalCard
            name="Angelia Merrit"
            designation="Satisfied Client"
            comment="This gentlemen, Khurram does excellent work! you will not be disappointed. Detail oriented and very helpful. He assisted our organization tremendously! We will use his services again."
          />
          <TestimonalCard
            name="Fabio Obst"
            designation="Satisfied Client"
            comment="Great work. Done as requested and effort went into it. Can definitely recommend."
          />
          <TestimonalCard
            name="Maras"
            designation="Satisfied Client"
            comment="The seller is professional and decent. The delivery was on time and his work is fantastic. He has been my social media manager for a while now and i would definitely reccomend him to others. He is the best I have ever worked with."
          />
          <TestimonalCard
            name="Abdullah Ijaz"
            designation="Satisfied Client"
            comment="Very good seller replays quick has a good sense of what to do and makes things happen quickly overall loved my experience."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonals;
