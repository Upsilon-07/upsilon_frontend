import "./StarButton.css";
import starImage from "/src/assets/images/star-button.svg";

const FavouriteStar = () => {
  return (
    <div className="image-background">
      <img className="img" src={starImage} />
    </div>
  );
};

export default FavouriteStar;
