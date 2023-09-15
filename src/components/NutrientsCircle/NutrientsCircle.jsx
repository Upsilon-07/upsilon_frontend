import "./NutrientsCircle.css"
import { PropTypes } from "prop-types";

function NutrientsCircle({data}) {
  // Filter the nutrients for Protein, Carbohydrates, and Fat
  const macroNutrients = data.filter(
    (nutrient) =>
      ["Protein", "Carbohydrates", "Fat"].includes(nutrient.nutrient_name)
  );

  // Find the nutrient with the name 'Calories'
  const caloriesNutrient = data.find(
    (nutrient) => nutrient.nutrient_name === "Calories"
  );

  // Calculate the total value for "Protein", "Carbohydrates", and "Fat"
  const totalMacroValue = macroNutrients.reduce(
    (acc, nutrient) => acc + nutrient.nutrient_value,
    0
  );

  return (
    <div>
        <h2 className="nutrient-card-title">{`Nutrition`}</h2>
        <div className="nutrient-circles">
      {macroNutrients.map((nutrient, index) => (
        <div className="stance-circle" key={index}>
          <svg width="70" height="70">
            <circle className={`meter-1`} cx="50" cy="50" r="40" />
            <text
              x="37%"
              y="49%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#171717"
            >
              {nutrient.nutrient_name === "Carbohydrates" ? "Carbs" : nutrient.nutrient_name}
            </text>
            <text
              x="37%"
              y="66%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#EB784E"
            >
              {`${((nutrient.nutrient_value / totalMacroValue) * 100).toFixed(2)}%`}
            </text>
          </svg>
          <div className="stance-bottom">
            <p className="stance-performance">
              {nutrient.nutrient_name === "Carbohydrates" ? "Carbs" : nutrient.nutrient_name}:{" "}
              {String(nutrient.nutrient_value).replaceAll(".", ",")} g
            </p>
          </div>
        </div>
      ))}
      </div>
      <p className="stance-description">
        {caloriesNutrient
          ? `${caloriesNutrient.nutrient_name}: ${caloriesNutrient.nutrient_value} kcal`
          : "testdescription"}
      </p>
    </div>
  );
}

NutrientsCircle.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nutrient_name: PropTypes.string.isRequired,
      nutrient_type: PropTypes.string.isRequired,
      nutrient_value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default NutrientsCircle
