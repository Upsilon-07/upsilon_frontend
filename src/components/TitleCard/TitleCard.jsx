import PropTypes from "prop-types";
import api from "../../api/api";
import "./TitleCard.css";

const TitleCard = ({ id, title, source }) => {
  const favourite = () => {
    //! post in api to:
    const data = {
      //! change the user_id with the id from the userContext
      user_id: 1,
      course_id: Number(id),
    };
    api
      .post("/favourites/courses", data)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="title-card">
      <h1 className="title-courses">{title}</h1>
      {source ? (
        <img
          onClick={favourite}
          src={source}
          alt="start to add to favourites"
        />
      ) : null}
    </div>
  );
};

TitleCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  source: PropTypes.string,
  width: PropTypes.string,
};

export default TitleCard;
