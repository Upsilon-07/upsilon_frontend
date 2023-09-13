import PropTypes from "prop-types";
import api from "../../api/api";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import favouriteImg from "../../assets/images/star 1.svg";
import favouriteStar from "../../assets/images/blank-star.svg";
import "./TitleCard.css";
import { useLocation } from "react-router-dom";

const TitleCard = ({ id, title, isFavourite, setIsFavourite }) => {
  const { user } = useContext(UserContext);

  const location = useLocation();

  const favourite = () => {
    //! post in api to:
    const data = {
      //! change the user_id with the id from the userContext
      user_id: user.id,
      course_id: Number(id),
    };
    api
      .post("favourites/courses", data)
      .then((response) => {
        if (response.status === 200) {
          setIsFavourite(!isFavourite);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="title-card">
      <h1 className="title-courses">{title}</h1>
      {location.pathname === `/courses/${id}` ? (
        <img
          onClick={favourite}
          src={isFavourite ? favouriteImg : favouriteStar}
          alt="start to add to favourites"
        />
      ) : null}
    </div>
  );
};

TitleCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  isFavourite: PropTypes.bool,
  setIsFavourite: PropTypes.func,
};

export default TitleCard;
