import clock from "../../assets/images/time.svg";
import "./MealCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MealCard = ({ data }) => {
  return (
    <div className="meal-card">
      <Link to={`/meals/${data.id}`}>
        <div className="left-and-right-container-meal">
      {data.image ? (
        <div className="left-container">
        <img className="meal-card-img" src={data.image} alt={data.meal_name} />
        </div>
        ) : null}
        <div className="right-container">
            <div className="title">
        {data.meal_name ? (
        <h2 className="meal-name">{data.meal_name}</h2>
        ) : null}
        {data.duration ? (
            <div className="clock-and-time">
        <img src={clock} alt="clock of duration" /> <p>{data.duration} mins</p></div>
        ) : null}
        </div>
        </div>
        </div>
      </Link>
    </div>
  );
};

MealCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    meal_name: PropTypes.string,
    duration: PropTypes.number,
    image: PropTypes.string,
    meal_type: PropTypes.string,
  }),
};

export default MealCard;
