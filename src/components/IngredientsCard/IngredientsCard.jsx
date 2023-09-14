import Title from "../../components/Title";
import line from "../../assets/images/Line 14.png";
import PropTypes from "prop-types";
import "./IngredientsCard.css"

function NumberedParagraphs({ text, useBulletPoints }) {
  if (useBulletPoints) {
    const ingredients = text.split(',').map((ingredient, index) => (
      <li key={index}>{ingredient.trim()}</li>
    ));
    return <ul>{ingredients}</ul>;
  }

  // Split the text into an array of paragraphs
  const paragraphs = text.split(/\d+\./).filter(Boolean);

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{`${index + 1}. ${paragraph.trim()}`}</p>
      ))}
    </div>
  );
}

const IngredientsCard = ({ data }) => {
  return (
    <div>
      <div className="ingredientsCard">
        {/* <img className="line" src={line} alt="line" /> */}
        <Title title={`Ingredients`} weight="light-title" />
        {data.ingredients ? (
          <NumberedParagraphs text={data.ingredients} useBulletPoints={true} />
        ) : null}
        <img className="line" src={line} alt="line" />
        <Title title={`Directions`} weight="light-title" />
        {data.directions ? (
          <NumberedParagraphs text={data.directions} />
        ) : null}
      </div>
    </div>
  );
};

NumberedParagraphs.propTypes = {
  text: PropTypes.string.isRequired,
  useBulletPoints: PropTypes.bool.isRequired,
};

IngredientsCard.propTypes = {
  data: PropTypes.shape({
    ingredients: PropTypes.string,
    directions: PropTypes.string,
  }),
};

export default IngredientsCard
