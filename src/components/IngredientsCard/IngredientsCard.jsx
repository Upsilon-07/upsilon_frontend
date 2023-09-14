import Title from "../../components/Title";
import line from "../../assets/images/Line 14.png";
import PropTypes from "prop-types";
import "./IngredientsCard.css"

const IngredientsCard = ({data}) => {
  return (
    <div>
      <div className="ingredientsCard">
      <img className="line" src={line} alt="line" />
      <Title
            title={`Ingredients`}
            weight="light-title"
          />
      {data.ingredients ? (
        <p className="card-description">{data.ingredients}</p>
      ) : null}
      <img className="line" src={line} alt="line" />
      <Title
            title={`Directions`}
            weight="light-title"
          />
      {data.directions ? (
        <p className="card-description">{data.directions}</p>
      ) : null}
    </div>
    </div>
  )
}

IngredientsCard.propTypes = {
    data: PropTypes.shape({
        ingredients: PropTypes.string,
        directions: PropTypes.string,
    }),
  };

export default IngredientsCard
