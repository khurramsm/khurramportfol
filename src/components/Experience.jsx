import "../css/Experience.css";
import ExperienceBox from "./ExperienceBox";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="container">
        <div className="row" data-aos="fade-in">
          <div className="experience-header col-md-12">
            <small>QUALIFICATION</small>
            <h1 className="display-5">MY EXPERIENCE</h1>
            <div className="hori-line"></div>
          </div>
          <div className="col-md-6 mb-5">
            In my journey, I’ve developed several E-commerce stores, gave a
            boost to YouTube Channels, did Facebook Ads, and along with this,
            I’ve done Instagram Influencers account management, TIKTOK
            marketing, LinkedIn, Twitter, and Pinterest management. Also, with
            the worldwide client’s satisfaction, I’ve worked on all other Social
            Media platforms as well.
            <br />
            <br />
            Here, you can look upon my{" "}
            <a
              className="text-info"
              href="#portfolio"
              style={{ textDecoration: "none" }}
            >
              portfolio
            </a>{" "}
            to see how I help to build a better tomorrow for my clients through
            Social Media.
          </div>
          <div className="col-md-1">
            <div className="exp-duration-line">
              {" "}
              <div className="circle-top"></div>{" "}
              <div className="line-vertical"></div>{" "}
              <dic className="circle-bottom"></dic>{" "}
            </div>
          </div>
          <div className="col-md-5">
            <ExperienceBox
              duration="SEP 2017 - OCT 2018"
              place="Zeeba's Techno"
              design="Ass. Store Manager"
              workDetail="Work for Zeeba's Techno, manage store utilities and staff, deal with the in store customer problems and issues."
            />
            <ExperienceBox
              duration="DEC 2018 - DEC 2019"
              place="Mont Enterprises"
              design="Sale Staff Manager"
              workDetail="Work for Mont Enterprises, manage store sales and sales staff, deal with the in store customer with monthly target."
            />
            <ExperienceBox
              duration="DEC 2019 - PRESENT"
              place="Upwork, Fiverr"
              design="Freelance Social Media Manager"
              workDetail="Work as freelance social media manager on different platforms like upwork and fiverr. Also provide my professional services through my social platforms like facebook and instagram."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
