import PropTypes from "prop-types";
import "./NutritionInfo.css";
import NutrientsCircle from "../NutrientsCircle/NutrientsCircle";

const NutritionInfo = ({ data }) => {


  return (
    <div>
      <h2 className="nutrient-card-title">{`Nutrition`}</h2>
      <div>
        {/* Pass the nutrition data as a prop to NutrientsCircle */}
        <NutrientsCircle data={data} />
      </div>
      <div className="nutrient-card-container">
        {data.map((nutrient) => (
          <ul key={nutrient.nutrient_name} className="nutrient-card-ul">
            <div className="nutrient-card-name">
              <li>{nutrient.nutrient_name}</li>
              <p>
                {nutrient.nutrient_name !== "Calories"
                  ? nutrient.nutrient_value + " g"
                  : nutrient.nutrient_value + " kcal"}
              </p>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

NutritionInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nutrient_name: PropTypes.string.isRequired,
      nutrient_type: PropTypes.string.isRequired,
      nutrient_value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default NutritionInfo;
