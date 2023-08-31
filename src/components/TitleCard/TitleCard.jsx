import PropTypes from "prop-types";
import "./TitleCard.css";

const TitleCard = ({ id, title, source }) => {
  const favourite = () => {
    //! post in api to:
    // if not exists in DB add row with course_id and user_id
    // if exists in DB delete
  };

  return (
    <div className="title-card">
      <h1 className="title-courses">{title}</h1>
      {source ? <img src={source} alt="start to add to favourites" /> : null}
    </div>
  );
};

TitleCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  source: PropTypes.string,
};

export default TitleCard;
