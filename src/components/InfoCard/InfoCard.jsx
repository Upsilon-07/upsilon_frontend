import line from "../../assets/images/line.svg";
import clock from "../../assets/images/time.svg";
import vector from "../../assets/images/Vector.png";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "./InfoCard.css";

const InfoCard = ({ data }) => {
  const location = useLocation()
  return (
    <div className="infoCard">
      {data.lesson_name || data.meal_name || data.image ? (
        <div className="card-lesson-card">
          <h2 className="card-lesson-title">
            {data.lesson_name ? data.lesson_name : data.meal_name}
          </h2>
          <img className={location.pathname.includes("meals") ? "card-recipe-image": "card-lesson-image"} src={data.image} alt="" />
        </div>
      ) : null}

      <div className="card-header-top">
        {data.duration ? (
          <div className="clock-and-duration-info">
            <img src={clock} alt="clock of duration" />{" "}
            <h4>Duration: <span>{data.duration} mins</span></h4>
          </div>
        ) : null}
        {data.lesson_type || data.meal_type ? (
          <div className="vector-and-type">
            <img src={vector} className="vector" alt="vector" />
            <h4>Type: <span>{data.lesson_type ? data.lesson_type : data.meal_type}</span></h4>
          </div>
        ) : null}
      </div>
      {data.description ? (
        <p className="card-description">{data.description}</p>
      ) : null}
      <img className="line" src={line} alt="line" />
    </div>
  );
};

InfoCard.propTypes = {
  data: PropTypes.shape({
    lesson_name: PropTypes.string,
    meal_name: PropTypes.string,
    image: PropTypes.string,
    duration: PropTypes.number,
    lesson_type: PropTypes.string,
    meal_type: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default InfoCard;
