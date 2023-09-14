import PropTypes from "prop-types";
import "./NutritionInfo.css";

const NutritionInfo = ({ data }) => {
    
  const nutrientTypes = {};
  data.forEach((nutrient) => {
    if (!nutrientTypes[nutrient.nutrient_type]) {
      nutrientTypes[nutrient.nutrient_type] = 0;
    }
  });

  return (
    <div className="nutrient-card-container">
      <h2 className="nutrient-card-title">{`Nutrition`}</h2>
      {data.map((nutrient) => (
        <ul key={nutrient.nutrient_name} className="nutrient-card-ul"> {/* Use className here */}
          <div className="nutrient-card-name">
            <li>{nutrient.nutrient_name}</li>
            <p>
              {nutrient.nutrient_name !== 'Calories'
                ? nutrient.nutrient_value + ' g'
                : nutrient.nutrient_value + ' kcal'}
            </p>
          </div>
        </ul>
      ))}
    </div>
  );
};

NutritionInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nutrient_name: PropTypes.string.isRequired,
      nutrient_type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NutritionInfo;
