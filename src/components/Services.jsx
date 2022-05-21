import "../css/Services.css";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <div id="services" className="services">
      <div className="container">
        <div className="row" data-aos="fade-in">
          <div className="services-header col-md-12">
            <small>SERVICES</small>
            <h1 className="display-5">MY SERVICES</h1>
            <div className="hori-line"></div>
          </div>
        </div>
        <div className="card-deck services-card mb-2">
          <ServicesCard
            packageSlug="Basic"
            packageLevel="Basic"
            price="250"
            serviceName={[
              "Personalized Social Media Deck",
              "Competitor Analysis",
              "Dedicated Account Manager",
            ]}
            detailServices={[
              "16 Custom Posts",
              "Post Copywriting + Hashtag Research",
              "2 Social Networks ",
              "Up To $500 Monthly Ad Budget ",
              "Comprehensive Monthly Report ",
            ]}
            packageClass="basic"
          />
          <ServicesCard
            packageSlug="Standard"
            packageLevel="Standard"
            price="750"
            serviceName={["All Basic Benefits, Plus"]}
            detailServices={[
              "24 Custom Posts",
              "2 Ad Standard Video Post",
              "3 Social Networks ",
              "Up To $500 Monthly Ad Budget ",
              "Brand Optimized Website up to 4 Pages",
            ]}
            packageClass="standard"
          />
          <ServicesCard
            packageSlug="Premium"
            packageLevel="Premium"
            price="1500"
            serviceName={["All Standard Benefits, Plus"]}
            detailServices={[
              "32 Custom Posts",
              "4 Ad Standard Video Post",
              "4 Social Networks ",
              "Up To $1,000 Monthly Ad Budget ",
              "Brand Logo 2 Concept",
              "Brand Optimized Website up to 8 Pages",
            ]}
            packageClass="premium"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
