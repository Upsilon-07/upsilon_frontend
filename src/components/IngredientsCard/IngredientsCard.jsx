import line from "../../assets/images/Line.svg";
import PropTypes from "prop-types";
import "./IngredientsCard.css";

function NumberedParagraphs({ text, useBulletPoints }) {
  if (useBulletPoints) {
    const ingredients = text.split(',').map((ingredient, index) => (
      <li key={index}>{ingredient.trim()}</li>
    ));
    return <ul>{ingredients}</ul>;
  }

  // Split the text into paragraphs based on periods (".")
  const paragraphs = text.split('.').filter(Boolean).map((paragraph, index) => (
    <div key={index}>
      <p data-number={`${index + 1}`}>{paragraph.trim()}</p>
    </div>
  ));

  return <div>{paragraphs}</div>;
}

const IngredientsCard = ({ data }) => {
  return (
    <div>
      <div className="ingredients-card">
        <img className="line" src={line} alt="line" />
        <div className="ingredients-card-ingredients">
          <h2 className="ingredients-card-title">{`Ingredients`}</h2>
          {data.ingredients ? (
            <NumberedParagraphs
              text={data.ingredients}
              useBulletPoints={true}
            />
          ) : null}
        </div>
        <img className="line" src={line} alt="line" />
        <div className="ingredients-card-directions">
          <h2 className="ingredients-card-title">{`Directions`}</h2>
          {data.directions ? (
            <NumberedParagraphs text={data.directions} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

NumberedParagraphs.propTypes = {
  text: PropTypes.string,
  useBulletPoints: PropTypes.bool,
};

IngredientsCard.propTypes = {
  data: PropTypes.shape({
    ingredients: PropTypes.string,
    directions: PropTypes.string,
  }),
};

export default IngredientsCard;
