import clock from "../../assets/images/time.svg";
import "./MealCard.css";
import PropTypes from "prop-types";

const MealCard = ({ data }) => {
  return (
    <div className="meal-card">
      <img src={data.image} alt={data.meal_name} />
      <h2>{data.meal_name}</h2>
      <img src={clock} alt="clock of duration" /> <p>{data.duration} mins</p>
    </div>
  );
};

MealCard.propTypes = {
  data: PropTypes.shape({
    meal_name: PropTypes.string,
    duration: PropTypes.number,
    image: PropTypes.string,
    meal_type: PropTypes.string,
  }),
};

export default MealCard;
