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
      <div className="ingredients-card">
        <img className="line" src={line} alt="line" />
        <div className="ingredients-card-ingredients">
        <Title title={`Ingredients`} weight="light-title" className="ingredients-card-ingredients-title"/>
        {data.ingredients ? (
          <NumberedParagraphs text={data.ingredients} useBulletPoints={true} />
        ) : null}
        </div>
        <img className="line" src={line} alt="line" />
        <div className="ingredients-card-directions">
        <Title title={`Directions`} weight="light-title" className="ingredients-card-directions-title"/>
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

export default IngredientsCard
