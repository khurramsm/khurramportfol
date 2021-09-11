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
            price="150"
            serviceName={[
              "Personalized Social Media Deck",
              "Competitor Analysis",
              "Complete Social Media Strategy",
            ]}
            detailServices={[
              "Social Media Profile Optimization ",
              "Dedicated Account Manager ",
              "16 Custom Posts/Month Total ",
              "2 Ad Standard Video Post",
              "2 Social Networks ",
              "Up To $500 Monthly Ad Budget ",
              "Comprehensive Monthly Report ",
            ]}
            packageClass="basic"
          />
          <ServicesCard
            packageSlug="Standard"
            packageLevel="Standard"
            price="250"
            serviceName={[
              "Personalized Social Media Deck",
              "Competitor Analysis",
              "Complete Social Media Strategy",
            ]}
            detailServices={[
              "Social Media Profile Optimization ",
              "Dedicated Account Manager ",
              "24 Custom Posts/Month Total ",
              "4 Ad Standard Video Post",
              "3 Social Networks ",
              "Up To $500 Monthly Ad Budget ",
              "Comprehensive Monthly Report ",
              "Chatbot Integration ",
              "Retargeting ",
              "A/B Split Testing ",
            ]}
            packageClass="standard"
          />
          <ServicesCard
            packageSlug="Premium"
            packageLevel="Premium"
            price="300"
            serviceName={[
              "Personalized Social Media Deck",
              "Competitor Analysis",
              "Complete Social Media Strategy",
            ]}
            detailServices={[
              "Social Media Profile Optimization ",
              "Dedicated Account Manager ",
              "32 Custom Posts/Month Total ",
              "4 Ad Standard Video Post",
              "4 Social Networks ",
              "Up To $1,000 Monthly Ad Budget ",
              "Comprehensive Monthly Report ",
              "Influencer Marketing ",
              "Retargeting ",
              "A/B Split Testing ",
            ]}
            packageClass="premium"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
