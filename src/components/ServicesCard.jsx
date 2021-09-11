import { useState } from "react";
import PackageModal from "./PackageModal";

const ServicesCard = ({
  packageLevel,
  price,
  serviceName,
  detailServices,
  packageClass,
}) => {
  const [toggleDetails, setToggleDetails] = useState(false);
  return (
    <>
      <div
        className={`card service-card ${packageClass}`}
        style={{ height: toggleDetails ? "900px" : "500px" }}
      >
        <div className="box" data-aos="zoom-in">
          <div className="content">
            <div className="icon">
              <i className="fa fa-paper-plane"></i>
            </div>
            <h3>{packageLevel}</h3>
            <h4>
              <sup>$</sup>
              {price}
            </h4>
            <ul>
              {serviceName.map((item, ind) => (
                <li key={ind}>
                  <i className="fa fa-check"></i>
                  {item}
                </li>
              ))}
              {toggleDetails
                ? detailServices.map((item, ind) => (
                    <li key={ind}>
                      <i className="fa fa-check"></i>
                      {item}
                    </li>
                  ))
                : ""}
            </ul>
            {toggleDetails ? (
              <>
                <p onClick={() => setToggleDetails(false)}>Hide Details</p>
                <br />
                <button
                  href="#"
                  data-toggle="modal"
                  data-target="#packageModal"
                  className="order-now"
                >
                  Order Now
                </button>
              </>
            ) : (
              <p onClick={() => setToggleDetails(true)}>More Details</p>
            )}
          </div>
        </div>
      </div>
      <PackageModal id="packageModal" />
    </>
  );
};

export default ServicesCard;
