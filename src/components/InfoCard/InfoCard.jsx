import line from "../../assets/images/Line 14.png";
import clock from "../../assets/images/time.svg";
import vector from "../../assets/images/Vector.png";
import PropTypes from "prop-types";

import "./InfoCard.css";

const InfoCard = ({ data }) => {
  return (
    <div className="infoCard">
      {data.lesson_name || data.image ? (
        <div className="card-lesson-card">
          <p className="card-lesson-title">{data.lesson_name}</p>
          <img className="card-lesson-image" src={data.image} alt="" />
        </div>
      ) : null}

      <div className="card-header-top">
        {data.duration ? (
          <div className="clock-and-duration-info">
            <img src={clock} alt="clock of duration" />{" "}
            <h4>Duration: {data.duration} mins</h4>
          </div>
        ) : null}
        {data.lesson_type ? (
          <div className="vector-and-type">
            <img src={vector} className="vector" />
            <h4>Type: {data.lesson_type}</h4>
          </div>
        ) : null}
      </div>
      {data.description ? (
        <p className="card-description">{data.description}</p>
      ) : null}
      <img className="line" src={line} />
    </div>
  );
};

InfoCard.propTypes = {
  data: PropTypes.shape({
    lesson_name: PropTypes.string,
    image: PropTypes.string,
    duration: PropTypes.string,
    lesson_type: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default InfoCard;
