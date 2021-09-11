const ExperienceBox = ({ duration, place, design, workDetail }) => {
  return (
    <div className="expBox">
      <div className="year__company" data-aos="zoom-in">
        <h5>{duration}</h5>
        <h5>{place}</h5>
      </div>
      <div className="text" data-aos="zoom-in">
        <h4>{design}</h4>
        <p>{workDetail}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
